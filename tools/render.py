#!/usr/bin/env python3
"""
Injecta els blocs compartits (menu lateral i footer) dins de cada pagina HTML.

Els blocs viuen a partials/ i s'escriuen UNA sola vegada. Aquest script els
copia dins de cada fitxer entre marcadors, de manera que l'HTML publicat
continua sent estatic: sense JavaScript, indexable i sense parpelleig.

Primera execucio: substitueix el <nav>...</nav> i el <footer>...</footer> que
ja hi ha a cada pagina i hi deixa els marcadors.
Execucions seguents: substitueix nomes el contingut entre marcadors.

Us:  python3 tools/render.py          (des de l'arrel del repositori)
     python3 tools/render.py --check  (no escriu res, nomes informa)
"""

import hashlib
import re
import sys
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
EXCLOU = {'partials', 'tools', '.github', '_backup', 'corporate_video', 'node_modules'}

BLOCS = {
    'nav':    (r'<nav[^>]*>.*?</nav>',       'nav'),
    'footer': (r'<footer[^>]*>.*?</footer>', 'footer'),
}


def partial(nom, lang):
    return (ROOT / 'partials' / f'{nom}.{lang}.html').read_text(encoding='utf-8').rstrip('\n')


def ruta_publica(fitxer):
    """qui-som/index.html -> /qui-som/   |   index.es.html -> /index.es.html"""
    rel = fitxer.relative_to(ROOT).as_posix()
    if rel.endswith('index.es.html'):
        return '/' + rel
    return '/' + rel[:-len('index.html')]


def marca_actiu(nav_html, ruta):
    """Posa class="active" a l'enllac de la pagina actual. Sense JS."""
    def sub(m):
        tag = m.group(0)
        href = re.search(r"href=['\"]([^'\"]+)['\"]", tag)
        if href and href.group(1) == ruta and 'class=' not in tag:
            return tag[:2] + ' class="active"' + tag[2:]
        return tag
    return re.sub(r'<a\s[^>]*>', sub, nav_html)


def versions():
    """Empremta curta dels fitxers compartits, per trencar la cache."""
    marques = {}
    for rel in ('css/nexsocial.css', 'js/nexsocial.js',
                'css/nexsocial-extres.css', 'js/nexsocial-extres.js'):
        f = ROOT / rel
        if f.exists():
            dades = f.read_bytes()
            marques[rel.split('/')[-1]] = hashlib.sha1(dades).hexdigest()[:8]
    return marques


def assegura_extres(text, marques):
    """Garanteix que cada pagina carrega els extres compartits.

    La portada no enllaca css/nexsocial.css ni js/nexsocial.js: porta el seu
    propi full d'estils i el seu propi JavaScript escrits a dins. Per aixo el
    menu plegable i el rastre de fulles viuen en dos fitxers a part, que
    s'enllacen aqui a TOTES les pagines, tinguin o no els compartits.
    """
    if 'nexsocial-extres.css' not in text:
        marca = marques.get('nexsocial-extres.css', '1')
        enllac = f'<link rel="stylesheet" href="/css/nexsocial-extres.css?v={marca}">\n'
        if '</head>' in text:
            text = text.replace('</head>', enllac + '</head>', 1)
    if 'nexsocial-extres.js' not in text:
        marca = marques.get('nexsocial-extres.js', '1')
        etiqueta = f'<script src="/js/nexsocial-extres.js?v={marca}"></script>\n'
        if '</body>' in text:
            text = text.replace('</body>', etiqueta + '</body>', 1)
    return text


def segella_actius(text, marques):
    """Afegeix ?v=<empremta> als enllacos del CSS i del JS compartits.

    Sense aixo, qui ja ha visitat el web es queda amb la versio antiga
    guardada al navegador i veu la pagina a mitges fins que buida la cache.
    """
    for fitxer, marca in marques.items():
        patro = re.compile(r'((?:href|src)=["\'][^"\']*' + re.escape(fitxer) + r')(\?v=[0-9a-f]+)?(["\'])')
        text = patro.sub(lambda m: f'{m.group(1)}?v={marca}{m.group(3)}', text)
    return text


def processa(fitxer, escriu=True, marques=None):
    original = fitxer.read_text(encoding='utf-8', errors='strict')
    if not original.strip():
        return ['buida, s\'omet'], False
    text = original.replace('\r\n', '\n')          # normalitza CRLF -> LF
    lang = 'es' if fitxer.name.endswith('.es.html') else 'ca'
    ruta = ruta_publica(fitxer)
    canvis = []

    for nom, (patro, _) in BLOCS.items():
        cos = partial(nom, lang)
        if nom == 'nav':
            cos = marca_actiu(cos, ruta)
        nou = f'<!--#{nom}-->\n{cos}\n<!--/#{nom}-->'

        marcadors = re.compile(rf'<!--#{nom}-->.*?<!--/#{nom}-->', re.S)
        if marcadors.search(text):
            text, n = marcadors.subn(lambda _: nou, text)
        else:
            text, n = re.subn(patro, lambda _: nou, text, count=1, flags=re.S)
        # Una pagina sense aquest bloc no es cap error: simplement no en te.
        canvis.append(f'{nom} x{n}' if n else f'sense {nom}')

    if marques:
        text = assegura_extres(text, marques)
        text = segella_actius(text, marques)

    if escriu and text != original:
        fitxer.write_text(text, encoding='utf-8', newline='\n')
    return canvis, text != original


def main():
    escriu = '--check' not in sys.argv
    fitxers = sorted(
        f for f in ROOT.rglob('*.html')
        if not (set(f.relative_to(ROOT).parts) & EXCLOU)
    )
    marques = versions()
    tocats = 0
    for f in fitxers:
        canvis, canviat = processa(f, escriu, marques)
        tocats += canviat
        if canviat:
            print(f'{f.relative_to(ROOT)}: actualitzat ({", ".join(canvis)})')
    print(f'\n{len(fitxers)} pagines revisades, {tocats} actualitzades.')
    return 0


if __name__ == '__main__':
    sys.exit(main())

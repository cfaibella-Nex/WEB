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


def processa(fitxer, escriu=True):
    original = fitxer.read_text(encoding='utf-8', errors='strict')
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
        if n == 0:
            canvis.append(f'AVIS: no s\'ha trobat cap bloc {nom}')
        else:
            canvis.append(f'{nom} x{n}')

    if escriu and text != original:
        fitxer.write_text(text, encoding='utf-8', newline='\n')
    return canvis, text != original


def main():
    escriu = '--check' not in sys.argv
    fitxers = sorted(
        f for f in ROOT.rglob('*.html')
        if not (set(f.relative_to(ROOT).parts) & EXCLOU)
    )
    tocats = 0
    for f in fitxers:
        canvis, canviat = processa(f, escriu)
        tocats += canviat
        estat = 'actualitzat' if canviat else 'sense canvis'
        avisos = [c for c in canvis if c.startswith('AVIS')]
        if avisos or canviat:
            print(f'{f.relative_to(ROOT)}: {estat} ({", ".join(canvis)})')
    print(f'\n{len(fitxers)} pagines revisades, {tocats} actualitzades.')
    return 0


if __name__ == '__main__':
    sys.exit(main())

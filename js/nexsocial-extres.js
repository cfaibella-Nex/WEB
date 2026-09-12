// Extres compartits: rastre de fulles del punter i menu lateral plegable.
// Fitxer a part perque la portada no carrega js/nexsocial.js: te el seu
// propi JavaScript escrit a dins.

// ── Rastre de fulles del punter ───────────────────────────────────────────
// Nomes a escriptori amb ratoli. No s'activa a tauleta ni a mobil, ni si el
// sistema demana reduir el moviment. Per apagar-ho del tot: posar false aqui.
var NEXSOCIAL_LEAF_TRAIL = true;

(function(){
  if(!NEXSOCIAL_LEAF_TRAIL) return;
  if(!window.matchMedia) return;
  if(!matchMedia('(pointer:fine)').matches) return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  var CAPA, viues = [], MAX = 14, DIST = 46, ultimX = null, ultimY = null;
  // Mateixa fulla i mateixos verds que la senefa del menu, amb la faceta clara
  // del logotip. Cada parella es fosc + clar.
  var TONS = [['#2d6b48','#8cb464'], ['#648c3c','#b4dc78'], ['#3d8a62','#a0c878'],
              ['#648c50','#b4c878'], ['#4a7c3c','#a0c878']];
  var FULLA  = 'M 0,-6.4 C 3.1,-3.2 3.6,-0.5 2.0,2.8 C 0.8,5.5 0,6.4 0,6.4 '
             + 'C 0,6.4 -0.7,4.5 -1.9,1.9 C -3.3,-0.6 -1.7,-4.1 0,-6.4 Z';
  var FACETA = 'M 0,-6.4 C 3.1,-3.2 3.6,-0.5 2.0,2.8 L 0,1.2 Z';

  function crear(x, y){
    if(viues.length >= MAX) esborrar(viues[0]);
    var mida = 13 + Math.random()*10;
    var gir  = Math.random()*360;
    var desv = (Math.random()-0.5)*34;      // deriva lateral
    var to   = TONS[(Math.random()*TONS.length)|0];

    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','-8 -8 16 16');
    svg.setAttribute('width', mida);
    svg.setAttribute('height', mida);
    svg.setAttribute('aria-hidden','true');
    svg.innerHTML = '<path d="'+FULLA+'" fill="'+to[0]+'"/>'
                  + '<path d="'+FACETA+'" fill="'+to[1]+'" opacity=".85"/>';
    svg.style.left = (x - mida/2) + 'px';
    svg.style.top  = (y - mida/2) + 'px';
    svg.style.transform = 'rotate('+gir+'deg) scale(.6)';
    svg.style.opacity = '0';
    CAPA.appendChild(svg);

    // caiguda suau: baixa, es desvia i s'apaga
    var anim = svg.animate([
      { transform:'rotate('+gir+'deg) scale(.65)', opacity:0 },
      { transform:'rotate('+(gir+22)+'deg) scale(1)', opacity:.85, offset:.18 },
      { transform:'translate('+desv+'px,58px) rotate('+(gir+150)+'deg) scale(.9)', opacity:0 }
    ], { duration: 1500 + Math.random()*600, easing:'cubic-bezier(.25,.6,.35,1)', fill:'forwards' });

    var reg = { el:svg, anim:anim };
    viues.push(reg);
    anim.onfinish = function(){ esborrar(reg); };
  }

  function esborrar(reg){
    var i = viues.indexOf(reg);
    if(i > -1) viues.splice(i,1);
    if(reg.el && reg.el.parentNode) reg.el.parentNode.removeChild(reg.el);
  }

  function moviment(e){
    if(ultimX === null){ ultimX = e.clientX; ultimY = e.clientY; return; }
    var dx = e.clientX - ultimX, dy = e.clientY - ultimY;
    if(dx*dx + dy*dy < DIST*DIST) return;    // nomes en moure's prou
    ultimX = e.clientX; ultimY = e.clientY;
    crear(e.clientX, e.clientY);
  }

  document.addEventListener('DOMContentLoaded', function(){
    CAPA = document.createElement('div');
    CAPA.id = 'leaf-trail';
    CAPA.setAttribute('aria-hidden','true');
    document.body.appendChild(CAPA);
    document.addEventListener('mousemove', moviment, { passive:true });
    // en canviar de pestanya, netegem el que hi hagi a mig camí
    document.addEventListener('visibilitychange', function(){
      if(document.hidden) viues.slice().forEach(esborrar);
    });
  });
})();

// ── Menú lateral plegable ─────────────────────────────────────────────────
function toggleSidebarCollapse(){
  var plegat = document.body.classList.toggle('sidebar-collapsed');
  try{ localStorage.setItem('nexsocial_sidebar', plegat ? 'collapsed' : 'open'); }catch(e){}
  var b = document.querySelector('.sidebar-collapse');
  if(b) b.setAttribute('aria-expanded', plegat ? 'false' : 'true');
}

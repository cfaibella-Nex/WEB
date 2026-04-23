
function handleContactForm(e){
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const success = document.getElementById('form-success');
  const form = document.getElementById('contact-form');
  if(!form.action || form.action.includes('XXXXXXXX')){
    const nom = form.querySelector('[name="nom"]') ? form.querySelector('[name="nom"]').value : '';
    const email = form.querySelector('[name="email"]') ? form.querySelector('[name="email"]').value : '';
    const telefon = form.querySelector('[name="telefon"]') ? form.querySelector('[name="telefon"]').value : '';
    const motiu = form.querySelector('[name="motiu"]') ? form.querySelector('[name="motiu"]').value : '';
    const missatge = form.querySelector('[name="missatge"]') ? form.querySelector('[name="missatge"]').value : '';
    const body = encodeURIComponent('Nom: '+nom+'\nEmail: '+email+'\nTelèfon: '+telefon+'\nMotiu: '+motiu+'\n\n'+missatge);
    window.location.href = 'mailto:infonex@nexsocial.org?subject=Contacte web NexSocial&body='+body;
    success.style.display='block';
    form.reset();
    return;
  }
  btn.textContent = 'Enviant...';
  btn.disabled = true;
  fetch(form.action, {method:'POST', body:new FormData(form), headers:{'Accept':'application/json'}})
    .then(function(res){
      if(res.ok){ success.style.display='block'; form.reset(); btn.textContent='Enviat ✓'; }
      else { btn.textContent='Error — torna-ho a intentar'; btn.disabled=false; }
    }).catch(function(){ btn.textContent='Error — torna-ho a intentar'; btn.disabled=false; });
}

function handleTreballarForm(e){
  e.preventDefault();
  const form = e.target;
  const ok = document.getElementById('treballar-ok');
  if(!form.action || form.action.includes('XXXXXXXX')){
    const nom = form.querySelector('[name="nom"]') ? form.querySelector('[name="nom"]').value : '';
    const email = form.querySelector('[name="email"]') ? form.querySelector('[name="email"]').value : '';
    const telefon = form.querySelector('[name="telefon"]') ? form.querySelector('[name="telefon"]').value : '';
    const area = form.querySelector('[name="area"]') ? form.querySelector('[name="area"]').value : '';
    const motivacio = form.querySelector('[name="motivacio"]') ? form.querySelector('[name="motivacio"]').value : '';
    const body = encodeURIComponent('Candidatura NexSocial\n\nNom: '+nom+'\nEmail: '+email+'\nTelèfon: '+telefon+'\nÀrea: '+area+'\n\nMotivació:\n'+motivacio);
    window.location.href = 'mailto:infonex@nexsocial.org?subject=Candidatura NexSocial&body='+body;
    ok.style.display='block';
    form.reset();
    return;
  }
  fetch(form.action, {method:'POST', body:new FormData(form), headers:{'Accept':'application/json'}})
    .then(function(res){
      if(res.ok){ ok.style.display='block'; form.reset(); }
    });
}
function toggleSubnav(id){
  var el = document.getElementById(id);
  var arrow = document.getElementById(id+'-arrow');
  if(!el) return;
  var open = el.style.maxHeight && el.style.maxHeight !== '0px';
  el.style.maxHeight = open ? '0px' : '200px';
  if(arrow) arrow.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
}
function scrollToServei(area){
  var target = area === 'acomp'
    ? document.getElementById('servei-acomp-title')
    : document.getElementById('servei-gestio-title');
  if(target) setTimeout(function(){ target.scrollIntoView({behavior:'smooth', block:'center'}); }, 100);
}
function showProjPanel(id, btn){
  document.querySelectorAll('.proj-panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.proj-subnav-btn').forEach(function(b){ b.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  if(btn) btn.classList.add('active');
  // Amaga/mostra el banner i subnav segons el panel
  var hdr = document.getElementById('proj-page-header');
  var nav = document.getElementById('proj-subnav-bar');
  if (id === 'proj-intel') {
    if (hdr) hdr.style.display = 'none';
    if (nav) nav.style.display = 'none';
  } else {
    if (hdr) hdr.style.display = '';
    if (nav) nav.style.display = '';
  }
}

// DIAGNÒSTIC
function startDiag(){
  document.getElementById('diag-intro').style.display = 'none';
  document.getElementById('diag-main').style.display = 'block';
}
var diagStep = 0;
var diagScores = new Array(10).fill(0);

function selectOpt(el, stepIdx, score){
  var opts = document.querySelectorAll('#dstep-'+stepIdx+' .dopt');
  opts.forEach(function(o){ o.classList.remove('selected'); });
  el.classList.add('selected');
  diagScores[stepIdx] = score;
  var nextBtn = document.getElementById('diag-next');
  nextBtn.disabled = false;
  nextBtn.style.opacity = '1';
  nextBtn.textContent = stepIdx === 9 ? 'Veure resultat →' : 'Següent →';
}

function diagNav(dir){
  // Si estem a l'última pregunta i anem endavant → mostrar resultat
  if(dir === 1 && diagStep === 9){
    document.getElementById('dstep-'+diagStep).style.display = 'none';
    showDiagResult();
    return;
  }

  var newStep = diagStep + dir;
  if(newStep < 0 || newStep > 9) return;

  document.getElementById('dstep-'+diagStep).style.display = 'none';
  diagStep = newStep;
  document.getElementById('dstep-'+diagStep).style.display = 'block';

  // Progrés
  var pct = (diagStep / 10) * 100;
  document.getElementById('diag-pbar').style.width = pct + '%';
  document.getElementById('diag-ptxt').textContent = diagStep + ' / 10 preguntes';

  // Botons
  document.getElementById('diag-prev').style.display = diagStep > 0 ? 'block' : 'none';
  var nextBtn = document.getElementById('diag-next');
  nextBtn.disabled = diagScores[diagStep] === 0;
  nextBtn.style.opacity = diagScores[diagStep] === 0 ? '0.4' : '1';
  nextBtn.textContent = diagStep === 9 ? 'Veure resultat →' : 'Següent →';
}

function showDiagResult(){
  var total = diagScores.reduce(function(a,b){ return a+b; }, 0);
  document.getElementById('diag-questions').style.display = 'none';
  document.getElementById('diag-progress-wrap').style.display = 'none';
  document.getElementById('diag-results').style.display = 'block';
  
  var resIdx = 0;
  if(total <= 15) resIdx = 0;
  else if(total <= 25) resIdx = 1;
  else if(total <= 35) resIdx = 2;
  else resIdx = 3;
  
  document.getElementById('dres-'+resIdx).style.display = 'block';
  window.scrollTo(0,0);
}

function resetDiag(){
  // Tornar a la intro
  document.getElementById('diag-intro').style.display = 'block';
  document.getElementById('diag-main').style.display = 'none';
  diagStep = 0;
  diagScores = new Array(10).fill(0);
  for(var i=0;i<10;i++){
    document.getElementById('dstep-'+i).style.display = i===0 ? 'block' : 'none';
    var opts = document.querySelectorAll('#dstep-'+i+' .dopt');
    opts.forEach(function(o){ o.classList.remove('selected'); });
  }
  for(var j=0;j<4;j++){
    var r = document.getElementById('dres-'+j);
    if(r) r.style.display = 'none';
  }
  document.getElementById('diag-questions').style.display = 'block';
  document.getElementById('diag-progress-wrap').style.display = 'block';
  document.getElementById('diag-results').style.display = 'none';
  document.getElementById('diag-pbar').style.width = '0%';
  document.getElementById('diag-ptxt').textContent = '0 / 10 preguntes';
  document.getElementById('diag-prev').style.display = 'none';
  var nextBtn = document.getElementById('diag-next');
  nextBtn.disabled = true;
  nextBtn.style.opacity = '0.4';
  nextBtn.textContent = 'Següent →';
}
function showSection(id,el){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  var sec = document.getElementById(id);
  if(sec) sec.classList.add('active');
  if(el) el.classList.add('active');
  if(window.innerWidth<=768){
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
  }
  window.scrollTo(0,0);
}

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}


function switchTab(name, btn){
  document.querySelectorAll('.atab-content').forEach(t=>t.style.display='none');
  document.querySelectorAll('.atab').forEach(b=>{
    b.style.background='transparent';
    b.style.color='rgba(253,252,249,0.5)';
  });
  var tab = document.getElementById('tab-'+name);
  if(tab) tab.style.display='block';
  if(btn){
    btn.style.background='rgba(109,191,133,0.12)';
    btn.style.color='#fdfcf9';
  }
}

function updateById(id, val){
  var el = document.getElementById(id);
  if(el){ el.textContent = val; showDownloadBar(); }
}

function updateText(input, selector){
  var el = document.querySelector(selector);
  if(el){ el.textContent = input.value; showDownloadBar(); }
}

function updateNthTeamField(input, idx, fieldSelector){
  var cards = document.querySelectorAll('.team-card');
  if(cards[idx]){
    var el = cards[idx].querySelector(fieldSelector);
    if(el){ el.textContent = input.value; showDownloadBar(); }
  }
}

function updateNthText(input, selector, n){
  var els = document.querySelectorAll(selector);
  if(els[n]){ els[n].textContent = input.value; showDownloadBar(); }
}

function updateContact(field, val){
  showDownloadBar();
  if(field==='email'){
    document.querySelectorAll('a[href^="mailto"]').forEach(a=>a.href='mailto:'+val);
    document.querySelectorAll('.contact-email-text').forEach(el=>el.textContent=val);
  } else if(field==='phone'){
    document.querySelectorAll('a[href^="tel"]').forEach(a=>a.href='tel:'+val.replace(/\s/g,''));
    document.querySelectorAll('.contact-phone-text').forEach(el=>el.textContent=val);
  } else if(field==='web'){
    document.querySelectorAll('.contact-web-text').forEach(el=>el.textContent=val);
  } else if(field==='address'){
    document.querySelectorAll('.contact-address-text').forEach(el=>el.textContent=val);
  }
}

function showDownloadBar(){
  var bar = document.getElementById('download-bar');
  if(bar) bar.style.display='flex';
}

function downloadWeb(){
  var html = document.documentElement.outerHTML;
  var fn = 'nexsocial.html';
  try {
    if(window.location.protocol === 'file:'){
      var encoded = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
      var a = document.createElement('a');
      a.href = encoded; a.download = fn;
      document.body.appendChild(a); a.click();
      setTimeout(function(){ document.body.removeChild(a); }, 500);
    } else {
      var blob = new Blob([html], {type:'text/html;charset=utf-8'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = fn;
      document.body.appendChild(a); a.click();
      setTimeout(function(){ document.body.removeChild(a); URL.revokeObjectURL(url); }, 500);
    }
  } catch(e){
    alert('Error en descarregar. Prova Ctrl+U per copiar el codi font.');
  }
}

function showHelp(){
  document.getElementById('help-modal').style.display='flex';
}
function hideHelp(){
  document.getElementById('help-modal').style.display='none';
}

function changePhoto(idx){
  var input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e){
    var file = e.target.files[0]; if(!file) return;
    var reader = new FileReader();
    reader.onload = function(ev){
      var url = ev.target.result;
      var photos = document.querySelectorAll('.photo-target');
      if(photos[idx]) photos[idx].src = url;
      var bgs = document.querySelectorAll('.bg-photo-target');
      if(bgs[idx]) bgs[idx].style.backgroundImage = 'url('+url+')';
      showDownloadBar();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function changeLogo(){
  var input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e){
    var file = e.target.files[0]; if(!file) return;
    var reader = new FileReader();
    reader.onload = function(ev){
      var url = ev.target.result;
      document.querySelectorAll('.sidebar-logo img, #topbar-logo-img, #footer-logo-img').forEach(img=>img.src=url);
      showDownloadBar();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

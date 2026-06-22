/**
 * FreeCAD voor Radioamateurs — WLD ON6WL
 * i18n · Voortgang · Interactiviteit  (WLD-motor, aangepast)
 */
'use strict';

/* ── UI-strings ─────────────────────────────────────────── */
const T = {
  nl: {
    progress:'Voortgang', completed:'voltooid', of:'van', chapters:'hoofdstukken',
    mark_done:'✓ Markeer als voltooid', marked_done:'✓ Voltooid!',
    show_solution:'▼ Toon oplossing', hide_solution:'▲ Verberg oplossing',
    prev:'← Vorige', next:'Volgende →',
    objectives:'Na dit hoofdstuk kun je',
    summary_title:'Samenvatting', memory_title:'🧠 Onthoud dit', key_title:'🔑 Kernregel',
    warning_title:'⚠️ Let op!', tip_title:'💡 Tip', shack_title:'📻 In de shack',
    print_title:'🖨️ Voor de print', steps_title:'Stappenplan', task_title:'Doe-opdracht',
    exercises_title:'Oefeningen', example_title:'Voorbeeld', mistakes_title:'Veelgemaakte fouten',
    overview:'Overzicht', sources:'Bronnen', downloads:'Downloads', start:'Start',
    in_preparation:'In voorbereiding',
    login_btn:'Start de cursus',
  },
  fr: {
    progress:'Progression', completed:'terminé(s)', of:'sur', chapters:'chapitres',
    mark_done:'✓ Marquer comme terminé', marked_done:'✓ Terminé !',
    show_solution:'▼ Voir la solution', hide_solution:'▲ Cacher la solution',
    prev:'← Précédent', next:'Suivant →',
    objectives:'Après ce chapitre, vous serez capable de',
    summary_title:'Résumé', memory_title:'🧠 À retenir', key_title:'🔑 Règle clé',
    warning_title:'⚠️ Attention !', tip_title:'💡 Astuce', shack_title:'📻 En pratique',
    print_title:'🖨️ Pour l\'impression', steps_title:'Procédure', task_title:'Exercice pratique',
    exercises_title:'Exercices', example_title:'Exemple', mistakes_title:'Erreurs fréquentes',
    overview:'Aperçu', sources:'Sources', downloads:'Téléchargements', start:'Démarrer',
    in_preparation:'En préparation',
    login_btn:'Démarrer le cours',
  },
  en: {
    progress:'Progress', completed:'completed', of:'of', chapters:'chapters',
    mark_done:'✓ Mark as completed', marked_done:'✓ Completed!',
    show_solution:'▼ Show solution', hide_solution:'▲ Hide solution',
    prev:'← Previous', next:'Next →',
    objectives:'After this chapter you will be able to',
    summary_title:'Summary', memory_title:'🧠 Remember this', key_title:'🔑 Key rule',
    warning_title:'⚠️ Watch out!', tip_title:'💡 Tip', shack_title:'📻 In the shack',
    print_title:'🖨️ For printing', steps_title:'Step-by-step', task_title:'Hands-on task',
    exercises_title:'Exercises', example_title:'Example', mistakes_title:'Common mistakes',
    overview:'Overview', sources:'Sources', downloads:'Downloads', start:'Start',
    in_preparation:'Coming soon',
    login_btn:'Start the course',
  }
};

/* ── Hoofdstuk-titels per taal ──────────────────────────── */
const CHAPTER_TITLES = {
  nl: {
    h01:'Wat is FreeCAD & installeren', h02:'Eerste start: voorkeuren & navigatie',
    h03:'Navigeren in 3D & de feature-boom', h04:'Je eerste schets (Sketcher)',
    h05:'Volledig bepaalde schets', h06:'Van schets naar bakje + STL-export',
    h07:'Parametrisch wijzigen', h08:'Constraints in de diepte',
    h09:'Uitsparingen & gaten', h10:'Afronden & afkanten (fillet/chamfer)',
    h11:'Externe geometrie', h12:'Deksel: tolerantie & passing',
    h13:'Patronen & spiegelen', h14:'Hulpvlakken (datum planes)',
    h15:'Meerdelige behuizingen (multi-body)', h16:'Ontwerpen voor 3D-print (DfAM)',
    h17:'Frontpaneel met tekst', h18:'Sweep & pipe',
    h19:'Robuust modelleren & topological naming', h20:'Spreadsheets & parameters',
    h21:'Varianten & configuraties', h22:'History bewerken & fouten herstellen',
    h23:'Mesh, STL-controle & slicer',
  },
  fr: {
    h01:'Qu\'est-ce que FreeCAD & installation', h02:'Premier lancement : préférences & navigation',
    h03:'Naviguer en 3D & l\'arbre des fonctions', h04:'Votre premier croquis (Sketcher)',
    h05:'Croquis entièrement contraint', h06:'Du croquis au boîtier + export STL',
    h07:'Modification paramétrique', h08:'Les contraintes en profondeur',
    h09:'Évidements & perçages', h10:'Congés & chanfreins',
    h11:'Géométrie externe', h12:'Couvercle : tolérance & ajustement',
    h13:'Répétitions & symétrie', h14:'Plans de référence',
    h15:'Boîtiers multi-corps', h16:'Conception pour impression 3D (DfAM)',
    h17:'Façade avec texte', h18:'Balayage & conduite (sweep/pipe)',
    h19:'Modélisation robuste & topological naming', h20:'Feuilles de calcul & paramètres',
    h21:'Variantes & configurations', h22:'Modifier l\'historique & corriger les erreurs',
    h23:'Maillage, contrôle STL & slicer',
  },
  en: {
    h01:'What is FreeCAD & installing', h02:'First launch: preferences & navigation',
    h03:'Navigating in 3D & the feature tree', h04:'Your first sketch (Sketcher)',
    h05:'Fully constrained sketch', h06:'From sketch to box + STL export',
    h07:'Parametric editing', h08:'Constraints in depth',
    h09:'Pockets & holes', h10:'Fillets & chamfers',
    h11:'External geometry', h12:'Lid: tolerance & fit',
    h13:'Patterns & mirroring', h14:'Datum planes',
    h15:'Multi-body enclosures', h16:'Design for 3D printing (DfAM)',
    h17:'Front panel with text', h18:'Sweep & pipe',
    h19:'Robust modelling & topological naming', h20:'Spreadsheets & parameters',
    h21:'Variants & configurations', h22:'Editing history & fixing errors',
    h23:'Mesh, STL checking & slicer',
  }
};

/* ── Niveau-titels per taal ─────────────────────────────── */
const DEEL_TITLES = {
  nl: { 1:'Niveau 1 — Basis', 2:'Niveau 2 — Medior', 3:'Niveau 3 — Gevorderd', 4:'Niveau 4 — Expert' },
  fr: { 1:'Niveau 1 — Base', 2:'Niveau 2 — Médior', 3:'Niveau 3 — Avancé', 4:'Niveau 4 — Expert' },
  en: { 1:'Level 1 — Basics', 2:'Level 2 — Medior', 3:'Level 3 — Advanced', 4:'Level 4 — Expert' },
};

const CHAPTER_DEEL = {
  h01:1,h02:1,h03:1,h04:1,h05:1,h06:1,
  h07:2,h08:2,h09:2,h10:2,h11:2,h12:2,
  h13:3,h14:3,h15:3,h16:3,h17:3,h18:3,
  h19:4,h20:4,h21:4,h22:4,h23:4,
};

const TOTAL_CHAPTERS = 23;
const STORAGE_KEY    = 'freecad_cursus';

/* ── State ──────────────────────────────────────────────── */
let currentLang = 'nl';
function loadState(){ try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{};}catch{return {};} }
function saveState(s){ try{localStorage.setItem(STORAGE_KEY,JSON.stringify(s));}catch{} }
function getState(){ return loadState(); }
function markDone(id){ const s=getState(); s['done_'+id]=true; s['done_ts_'+id]=Date.now(); saveState(s); refreshAllUI(); }
function isDone(id){ return !!getState()['done_'+id]; }
function getDoneCount(){ const s=getState(); return Object.keys(s).filter(k=>k.startsWith('done_')&&!k.includes('_ts_')).length; }

/* ── Taal ───────────────────────────────────────────────── */
function setLang(lang){
  currentLang=lang;
  const s=getState(); s.lang=lang; saveState(s);
  document.querySelectorAll('.lang-block').forEach(el=>el.classList.toggle('active', el.dataset.lang===lang));
  document.querySelectorAll('.lang-switch-btn,.login-lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(T[lang]&&T[lang][k]) el.textContent=T[lang][k]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ const k=el.dataset.i18nPh; if(T[lang]&&T[lang][k]) el.placeholder=T[lang][k]; });
  document.documentElement.lang=lang;
}

/* ── Voortgang UI ───────────────────────────────────────── */
function refreshAllUI(){
  const done=getDoneCount(); const pct=Math.round((done/TOTAL_CHAPTERS)*100);
  document.querySelectorAll('.header-progress-fill').forEach(el=>el.style.width=pct+'%');
  document.querySelectorAll('.header-progress-done').forEach(el=>el.textContent=done+' / '+TOTAL_CHAPTERS);
  const circle=document.querySelector('.progress-circle');
  if(circle){ circle.style.background=`conic-gradient(var(--teal) ${pct*3.6}deg, var(--bg-light) 0deg)`;
    const p=circle.querySelector('.progress-pct'); if(p) p.textContent=pct+'%'; }
  document.querySelectorAll('.progress-bar-fill').forEach(el=>el.style.width=pct+'%');
  document.querySelectorAll('.progress-count').forEach(el=>{ el.textContent=done+' '+T[currentLang].of+' '+TOTAL_CHAPTERS+' '+T[currentLang].completed; });
  document.querySelectorAll('[data-chid]').forEach(el=>{ const id=el.dataset.chid;
    if(isDone(id)){ const s=el.querySelector('.nav-status'); if(s){s.classList.add('done');s.textContent='✓';}
      const c=el.querySelector('.card-status-done'); if(c) c.style.display='block'; } });
  const btn=document.getElementById('btn-complete');
  if(btn){ const id=btn.dataset.chid;
    if(isDone(id)){ btn.textContent=T[currentLang].marked_done; btn.classList.add('done'); }
    else btn.textContent=T[currentLang].mark_done; }
}

/* ── Oplossingen / complete / menu / lang ───────────────── */
function initSolutionToggles(){
  document.querySelectorAll('.solution-btn').forEach(btn=>{
    btn.addEventListener('click',function(){ const t=document.getElementById(this.dataset.target); if(!t)return;
      const v=t.classList.toggle('visible'); this.textContent=v?T[currentLang].hide_solution:T[currentLang].show_solution; });
  });
}
function initCompleteBtn(){
  const btn=document.getElementById('btn-complete'); if(!btn)return;
  btn.addEventListener('click',function(){ markDone(this.dataset.chid);
    this.textContent=T[currentLang].marked_done; this.classList.add('done');
    this.style.transform='scale(1.06)'; setTimeout(()=>this.style.transform='',300); });
}
function initMobileMenu(){
  const t=document.getElementById('menu-toggle'); const sb=document.querySelector('.app-sidebar'); if(!t||!sb)return;
  t.addEventListener('click',()=>sb.classList.toggle('open'));
  document.addEventListener('click',e=>{ if(sb.classList.contains('open')&&!sb.contains(e.target)&&e.target!==t) sb.classList.remove('open'); });
}
function markActiveSidebarLink(){
  const cur=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(a=>{ if((a.getAttribute('href')||'').split('/').pop()===cur) a.classList.add('active'); });
}

document.addEventListener('DOMContentLoaded',()=>{
  const saved=getState(); if(saved.lang) currentLang=saved.lang;
  setLang(currentLang); initSolutionToggles(); initCompleteBtn(); initMobileMenu(); markActiveSidebarLink(); refreshAllUI();
  document.querySelectorAll('.lang-switch-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
});

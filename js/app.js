// MATHSCI — Application (chargement dynamique des exercices)

const state = { niveau: null, discipline: null, chapitre: null, exercice: null };

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.scroll-hint')?.addEventListener('click', () => {
    document.querySelector('.app').scrollIntoView({ behavior: 'smooth' });
  });
});

function selectNiveau(btn) {
  document.querySelectorAll('.niveau-card').forEach(c => c.classList.remove('selected'));
  btn.classList.add('selected');
  state.niveau = btn.dataset.niveau;
  state.discipline = null; state.chapitre = null; state.exercice = null;
  showBreadcrumb();
  document.getElementById('bc-niveau').textContent = LABELS[state.niveau];
  document.getElementById('bc-discipline').textContent = '';
  hide('bc-sep2'); hide('bc-chapitre'); hide('bc-sep3'); hide('bc-exercice');
  showSection('step-discipline');
  setTimeout(() => document.getElementById('step-discipline').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function selectDiscipline(btn) {
  document.querySelectorAll('.discipline-card').forEach(c => c.classList.remove('selected'));
  btn.classList.add('selected');
  state.discipline = btn.dataset.discipline;
  state.chapitre = null; state.exercice = null;
  document.getElementById('bc-discipline').textContent = LABELS[state.discipline];
  buildChapitreList();
  showSection('step-chapitre');
  setTimeout(() => document.getElementById('step-chapitre').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function buildChapitreList() {
  const container = document.getElementById('chapitre-list');
  container.innerHTML = '';
  const chapitres = CURRICULUM[state.niveau]?.[state.discipline] || [];
  if (chapitres.length === 0) {
    container.innerHTML = '<p style="color:var(--muted);font-style:italic;padding:2rem 0;">Aucun exercice disponible pour ce niveau. Bientot disponible !</p>';
    return;
  }
  chapitres.forEach(chap => {
    const btn = document.createElement('button');
    btn.className = 'chapitre-item';
    btn.onclick = () => selectChapitre(chap);
    btn.innerHTML = '<span class="chap-num">'+chap.num+'</span><span class="chap-name">'+chap.nom+'</span><span class="chap-count">'+chap.exercices.length+' exo'+(chap.exercices.length > 1 ? 's' : '')+'</span><span style="color:var(--gold);font-size:1.2rem;">›</span>';
    container.appendChild(btn);
  });
}

function selectChapitre(chap) {
  state.chapitre = chap; state.exercice = null;
  show('bc-sep2'); show('bc-chapitre');
  document.getElementById('bc-chapitre').textContent = chap.nom;
  hide('bc-sep3'); hide('bc-exercice');
  buildExerciceList();
  showSection('step-exercice');
  setTimeout(() => document.getElementById('step-exercice').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function buildExerciceList() {
  const container = document.getElementById('exercice-list');
  container.innerHTML = '';
  state.chapitre.exercices.forEach(exo => {
    const btn = document.createElement('button');
    btn.className = 'exercice-item';
    btn.onclick = () => selectExercice(exo);
    btn.innerHTML = '<span class="exo-correction-badge">✓ Corrige</span><span class="exo-num">'+exo.num+'</span><span class="exo-title">'+exo.titre+'</span><span class="exo-meta">'+exo.difficulte+' · '+exo.duree+'</span>';
    container.appendChild(btn);
  });
}

async function selectExercice(exo) {
  state.exercice = exo;
  show('bc-sep3'); show('bc-exercice');
  document.getElementById('bc-exercice').textContent = exo.titre;
  document.getElementById('contenu-titre').textContent = exo.num + ' — ' + exo.titre;

  document.getElementById('sujet-content').innerHTML = '<p style="color:var(--muted);padding:2rem;text-align:center;">Chargement...</p>';
  document.getElementById('correction-content').innerHTML = '<p style="color:var(--muted);padding:2rem;text-align:center;">Chargement...</p>';

  try {
    const response = await fetch(exo.fichier);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const sujet = doc.getElementById('sujet') ? doc.getElementById('sujet').innerHTML : '<p>Contenu non disponible.</p>';
    const correction = doc.getElementById('correction') ? doc.getElementById('correction').innerHTML : '<p>Correction non disponible.</p>';
    document.getElementById('sujet-content').innerHTML = sujet;
    document.getElementById('correction-content').innerHTML = correction;
  } catch (e) {
    document.getElementById('sujet-content').innerHTML = '<p style="color:var(--red);">Erreur de chargement.</p>';
  }

  switchTab('sujet');
  showSection('step-contenu');

  setTimeout(() => {
    document.getElementById('step-contenu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.renderMathInElement) {
      renderMathInElement(document.getElementById('step-contenu'), {
        delimiters: [{left:'\\(',right:'\\)',display:false}],
        throwOnError: false
      });
    }
  }, 150);
}

function switchTab(tab) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pane').forEach(p => { p.classList.remove('active'); p.classList.add('hidden'); });
  document.getElementById('tab-' + tab).classList.add('active');
  const pane = document.getElementById('pane-' + tab);
  pane.classList.add('active'); pane.classList.remove('hidden');
  if (window.renderMathInElement) {
    renderMathInElement(pane, {delimiters:[{left:'\\(',right:'\\)',display:false}],throwOnError:false});
  }
}

function goBack(currentStep) {
  const steps = ['step-niveau','step-discipline','step-chapitre','step-exercice','step-contenu'];
  const idx = steps.indexOf(currentStep);
  if (idx <= 0) return;
  hideSection(currentStep);
  const prev = steps[idx - 1];
  showSection(prev);
  setTimeout(() => document.getElementById(prev).scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  if (currentStep === 'step-discipline') { document.getElementById('bc-discipline').textContent = ''; hide('bc-sep2'); hide('bc-chapitre'); hide('bc-sep3'); hide('bc-exercice'); }
  else if (currentStep === 'step-chapitre') { hide('bc-sep2'); hide('bc-chapitre'); hide('bc-sep3'); hide('bc-exercice'); }
  else { hide('bc-sep3'); hide('bc-exercice'); }
}

function showSection(id) { const el = document.getElementById(id); if (el) el.classList.remove('hidden'); }
function hideSection(id) { const el = document.getElementById(id); if (el) el.classList.add('hidden'); }
function show(id) { const el = document.getElementById(id); if (el) el.classList.remove('bc-hide'); }
function hide(id) { const el = document.getElementById(id); if (el) el.classList.add('bc-hide'); }
function showBreadcrumb() { document.getElementById('breadcrumb').style.display = 'flex'; }

// ═══════════════════════════════════════════════════════
//  MATHSCI — Application principale
// ═══════════════════════════════════════════════════════

// État de navigation
const state = {
  niveau:     null,
  discipline: null,
  chapitre:   null,
  exercice:   null
};

// ─── SCROLL VERS L'APP ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Scroll depuis la hero
  document.querySelector('.scroll-hint')?.addEventListener('click', () => {
    document.querySelector('.app').scrollIntoView({ behavior: 'smooth' });
  });
});

// ─── ÉTAPE 1 : Sélection du niveau ──────────────────────
function selectNiveau(btn) {
  // Marquer le bouton sélectionné
  document.querySelectorAll('.niveau-card').forEach(c => c.classList.remove('selected'));
  btn.classList.add('selected');

  state.niveau     = btn.dataset.niveau;
  state.discipline = null;
  state.chapitre   = null;
  state.exercice   = null;

  // Breadcrumb
  showBreadcrumb();
  document.getElementById('bc-niveau').textContent = LABELS[state.niveau];
  document.getElementById('bc-discipline').textContent = '';
  hide('bc-sep2'); hide('bc-chapitre'); hide('bc-sep3'); hide('bc-exercice');

  // Naviguer
  showSection('step-discipline');

  // Scroll
  setTimeout(() => document.getElementById('step-discipline')
    .scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

// ─── ÉTAPE 2 : Sélection de la discipline ───────────────
function selectDiscipline(btn) {
  document.querySelectorAll('.discipline-card').forEach(c => c.classList.remove('selected'));
  btn.classList.add('selected');

  state.discipline = btn.dataset.discipline;
  state.chapitre   = null;
  state.exercice   = null;

  // Breadcrumb
  document.getElementById('bc-discipline').textContent = LABELS[state.discipline];

  // Construire la liste des chapitres
  buildChapitreList();
  showSection('step-chapitre');

  setTimeout(() => document.getElementById('step-chapitre')
    .scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

// ─── Construire la liste des chapitres ──────────────────
function buildChapitreList() {
  const container = document.getElementById('chapitre-list');
  container.innerHTML = '';

  const chapitres = CURRICULUM[state.niveau]?.[state.discipline] || [];

  if (chapitres.length === 0) {
    container.innerHTML = `<p style="color:var(--muted);font-style:italic;padding:2rem 0;">
      Aucun exercice disponible pour ce niveau/discipline. D'autres seront ajoutés prochainement.
    </p>`;
    return;
  }

  chapitres.forEach(chap => {
    const btn = document.createElement('button');
    btn.className = 'chapitre-item';
    btn.onclick = () => selectChapitre(chap);
    btn.innerHTML = `
      <span class="chap-num">${chap.num}</span>
      <span class="chap-name">${chap.nom}</span>
      <span class="chap-count">${chap.exercices.length} exo${chap.exercices.length > 1 ? 's' : ''}</span>
      <span style="color:var(--gold);font-size:1.2rem;">›</span>
    `;
    container.appendChild(btn);
  });
}

// ─── ÉTAPE 3 : Sélection du chapitre ────────────────────
function selectChapitre(chap) {
  state.chapitre = chap;
  state.exercice = null;

  // Breadcrumb
  show('bc-sep2'); show('bc-chapitre');
  document.getElementById('bc-chapitre').textContent = chap.nom;
  hide('bc-sep3'); hide('bc-exercice');

  buildExerciceList();
  showSection('step-exercice');

  setTimeout(() => document.getElementById('step-exercice')
    .scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

// ─── Construire la liste des exercices ──────────────────
function buildExerciceList() {
  const container = document.getElementById('exercice-list');
  container.innerHTML = '';

  state.chapitre.exercices.forEach(exo => {
    const btn = document.createElement('button');
    btn.className = 'exercice-item';
    btn.onclick = () => selectExercice(exo);
    btn.innerHTML = `
      <span class="exo-correction-badge">✓ Corrigé</span>
      <span class="exo-num">${exo.num}</span>
      <span class="exo-title">${exo.titre}</span>
      <span class="exo-meta">${exo.difficulte} · ${exo.duree}</span>
    `;
    container.appendChild(btn);
  });
}

// ─── ÉTAPE 4 : Afficher l'exercice ──────────────────────
function selectExercice(exo) {
  state.exercice = exo;

  // Breadcrumb
  show('bc-sep3'); show('bc-exercice');
  document.getElementById('bc-exercice').textContent = exo.titre;
  document.getElementById('contenu-titre').textContent = `${exo.num} — ${exo.titre}`;

  // Contenu
  document.getElementById('sujet-content').innerHTML     = exo.sujet;
  document.getElementById('correction-content').innerHTML = exo.correction;

  // Tab par défaut
  switchTab('sujet');

  showSection('step-contenu');

  setTimeout(() => {
    document.getElementById('step-contenu')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Re-render KaTeX
    if (window.renderMathInElement) {
      renderMathInElement(document.getElementById('step-contenu'), {
        delimiters: [{ left: '\\(', right: '\\)', display: false }],
        throwOnError: false
      });
    }
  }, 150);
}

// ─── TABS SUJET / CORRECTION ─────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));

  document.getElementById('tab-' + tab).classList.add('active');
  document.getElementById('pane-' + tab).classList.add('active');

  // Re-render KaTeX dans le pane actif
  if (window.renderMathInElement) {
    const pane = document.getElementById('pane-' + tab);
    renderMathInElement(pane, {
      delimiters: [{ left: '\\(', right: '\\)', display: false }],
      throwOnError: false
    });
  }
}

// ─── RETOUR ──────────────────────────────────────────────
function goBack(currentStep) {
  const steps = ['step-niveau', 'step-discipline', 'step-chapitre', 'step-exercice', 'step-contenu'];
  const idx = steps.indexOf(currentStep);
  if (idx <= 0) return;

  hideSection(currentStep);
  const prev = steps[idx - 1];
  showSection(prev);

  // Scroll
  setTimeout(() => document.getElementById(prev)
    .scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);

  // Mettre à jour breadcrumb
  updateBreadcrumbOnBack(currentStep);
}

function updateBreadcrumbOnBack(from) {
  if (from === 'step-discipline') {
    document.getElementById('bc-discipline').textContent = '';
    hide('bc-sep2'); hide('bc-chapitre'); hide('bc-sep3'); hide('bc-exercice');
  } else if (from === 'step-chapitre') {
    hide('bc-sep2'); hide('bc-chapitre'); hide('bc-sep3'); hide('bc-exercice');
    document.getElementById('bc-chapitre').textContent = '';
  } else if (from === 'step-exercice') {
    hide('bc-sep3'); hide('bc-exercice');
    document.getElementById('bc-exercice').textContent = '';
  } else if (from === 'step-contenu') {
    hide('bc-sep3'); hide('bc-exercice');
    document.getElementById('bc-exercice').textContent = '';
  }
}

// ─── UTILITAIRES ─────────────────────────────────────────
function showSection(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('hidden'); }
}

function hideSection(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('hidden'); }
}

function show(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('bc-hide');
}

function hide(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('bc-hide');
}

function showBreadcrumb() {
  document.getElementById('breadcrumb').style.display = 'flex';
}

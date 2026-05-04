# MathSci — Exercices & Corrections

Site de révision en **Mathématiques** et **Sciences Physiques** pour les niveaux :
**3ème · Seconde · Première S1/S2 · Terminale S1/S2**

## 🌐 Démo en ligne
Accessible sur : `https://VOTRE_USERNAME.github.io/mathsci`

---

## 📁 Structure du projet

```
mathsci/
├── index.html          ← Page principale (navigation + affichage)
├── css/
│   └── style.css       ← Styles (thème institutionnel or/rouge/noir)
├── js/
│   ├── app.js          ← Logique de navigation
│   └── data.js         ← Base de données des exercices et corrections
└── README.md
```

---

## 🚀 Mise en ligne sur GitHub Pages

### Étape 1 — Créer le dépôt GitHub
1. Connectez-vous sur [github.com](https://github.com)
2. Cliquez **New repository**
3. Nommez-le `mathsci` (ou ce que vous voulez)
4. Laissez-le **Public**
5. Cliquez **Create repository**

### Étape 2 — Uploader les fichiers
**Option A — Interface web (plus simple) :**
1. Sur la page du dépôt, cliquez **Add file → Upload files**
2. Glissez-déposez tous les fichiers du projet
3. Cliquez **Commit changes**

**Option B — Git en ligne de commande :**
```bash
git init
git add .
git commit -m "Premier commit - site MathSci"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/mathsci.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages
1. Allez dans **Settings** du dépôt
2. Section **Pages** (menu gauche)
3. Source : **Deploy from a branch**
4. Branch : **main** · Dossier : **/ (root)**
5. Cliquez **Save**
6. Attendez 1–2 minutes puis visitez `https://VOTRE_USERNAME.github.io/mathsci`

---

## ✏️ Ajouter des exercices

Tout se passe dans **`js/data.js`**.

### Structure d'un exercice
```javascript
{
  id: "ts1m-c1-e2",        // Identifiant unique
  num: "EX.02",             // Numéro affiché
  titre: "Titre de l'exo", // Titre court
  difficulte: "Moyen",      // Facile / Moyen / Difficile
  duree: "30 min",          // Durée estimée
  sujet: `                  // HTML du sujet
    <h3>Titre</h3>
    <div class="enonce">...</div>
    <div class="question" data-q="1.">
      <p>Question ici avec formule \(f(x)\)</p>
      <div class="espace" style="height:80px;"></div>
    </div>
  `,
  correction: `             // HTML de la correction
    <h3>Correction</h3>
    <div class="question" data-q="1.">
      <div class="step">
        <span class="eq">\(f'(x) = 2x\)</span>
        <span class="eq ind">\(= 2x\)</span>
      </div>
      <div class="result">\(\boxed{2x}\)</div>
    </div>
  `
}
```

### Formules mathématiques (KaTeX)
- Inline : `\(f(x) = x^2\)` 
- Fraction : `\(\dfrac{a}{b}\)`
- Racine : `\(\sqrt{x}\)`
- Encadré : `\(\boxed{x=3}\)`
- Ensemble : `\(\mathbb{R}\)` · `\(\mathbb{N}\)`
- Limite : `\(\lim_{x\to+\infty}\)`

### Classes CSS utiles
| Classe | Utilisation |
|--------|-------------|
| `.enonce` | Texte d'introduction |
| `.question` | Bloc d'une question (avec `data-q="1."`) |
| `.data-box` | Encadré de données |
| `.step` | Étapes de calcul |
| `.eq` | Une ligne d'égalité |
| `.eq.ind` | Ligne indentée |
| `.result` | Résultat final encadré |
| `.espace` | Espace de réponse (sujet) |

---

## 🎨 Personnalisation

Variables CSS dans `css/style.css` :
```css
:root {
  --gold: #b5851e;   /* Couleur principale */
  --red:  #8b2818;   /* Accent rouge */
  --ink:  #0e0c0a;   /* Noir encre */
}
```

---

## 📱 Compatibilité
- ✅ Mobile et tablette
- ✅ Impression (PDF depuis le navigateur)
- ✅ Formules LaTeX via KaTeX
- ✅ Fonctionne sans serveur (GitHub Pages)

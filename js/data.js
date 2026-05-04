// ═══════════════════════════════════════════════════════
//  MATHSCI — Base de données des exercices
//  Structure : CURRICULUM[niveau][discipline][chapitre][exercice]
// ═══════════════════════════════════════════════════════

const CURRICULUM = {

  // ────────────────────────────────────────────────────
  //  3ème
  // ────────────────────────────────────────────────────
  "troisieme": {
    "maths": [
      {
        id: "t3m-c1", num: "CH.01", nom: "Calcul littéral & équations",
        exercices: [
          {
            id: "t3m-c1-e1", num: "EX.01", titre: "Développer et réduire",
            difficulte: "Facile", duree: "15 min",
            sujet: `
              <h3>Exercice 1 — Développer et réduire</h3>
              <div class="enonce">
                <p>Développer et réduire chacune des expressions suivantes.</p>
              </div>
              <div class="question" data-q="1.">
                <p>\(A = 3(2x - 5) + 4(x + 1)\)</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>\(B = (x+3)(x-2)\)</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>\(C = (2x-1)^2 - (x+3)^2\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p><strong>Expression A</strong></p>
                <div class="step">
                  <span class="eq">\(A = 3(2x-5) + 4(x+1)\)</span>
                  <span class="eq ind">\(= 6x - 15 + 4x + 4\)</span>
                  <span class="eq ind">\(= 10x - 11\)</span>
                </div>
                <div class="result">\(\boxed{A = 10x - 11}\)</div>
              </div>
              <div class="question" data-q="2.">
                <p><strong>Expression B</strong></p>
                <div class="step">
                  <span class="eq">\(B = (x+3)(x-2)\)</span>
                  <span class="eq ind">\(= x^2 - 2x + 3x - 6\)</span>
                  <span class="eq ind">\(= x^2 + x - 6\)</span>
                </div>
                <div class="result">\(\boxed{B = x^2 + x - 6}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p><strong>Expression C</strong> — Identités remarquables</p>
                <div class="step">
                  <span class="eq">\(C = (2x-1)^2 - (x+3)^2\)</span>
                  <span class="eq ind">\(= 4x^2 - 4x + 1 - (x^2 + 6x + 9)\)</span>
                  <span class="eq ind">\(= 4x^2 - 4x + 1 - x^2 - 6x - 9\)</span>
                  <span class="eq ind">\(= 3x^2 - 10x - 8\)</span>
                </div>
                <div class="result">\(\boxed{C = 3x^2 - 10x - 8}\)</div>
              </div>
            `
          },
          {
            id: "t3m-c1-e2", num: "EX.02", titre: "Résolution d'équations",
            difficulte: "Moyen", duree: "20 min",
            sujet: `
              <h3>Exercice 2 — Résoudre les équations</h3>
              <div class="enonce">
                <p>Résoudre chacune des équations suivantes dans \(\mathbb{R}\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>\(3x - 7 = 2x + 5\)</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>\(\dfrac{2x+1}{3} = \dfrac{x-4}{2}\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>\((x-3)(2x+1) = 0\)</p>
                <div class="espace" style="height:60px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 2</h3>
              <div class="question" data-q="1.">
                <div class="step">
                  <span class="eq">\(3x - 7 = 2x + 5\)</span>
                  <span class="eq ind">\(3x - 2x = 5 + 7\)</span>
                  <span class="eq ind">\(x = 12\)</span>
                </div>
                <div class="result">\(\boxed{S = \{12\}}\)</div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(\dfrac{2x+1}{3} = \dfrac{x-4}{2}\)</span>
                  <span class="eq ind">\(2(2x+1) = 3(x-4)\)</span>
                  <span class="eq ind">\(4x + 2 = 3x - 12\)</span>
                  <span class="eq ind">\(x = -14\)</span>
                </div>
                <div class="result">\(\boxed{S = \{-14\}}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p>Produit nul : \(ab = 0 \Leftrightarrow a=0\) ou \(b=0\)</p>
                <div class="step">
                  <span class="eq">\((x-3)(2x+1) = 0\)</span>
                  <span class="eq ind">\(x - 3 = 0 \Rightarrow x = 3\)</span>
                  <span class="eq ind">\(2x + 1 = 0 \Rightarrow x = -\dfrac{1}{2}\)</span>
                </div>
                <div class="result">\(\boxed{S = \left\{-\dfrac{1}{2};\, 3\right\}}\)</div>
              </div>
            `
          }
        ]
      },
      {
        id: "t3m-c2", num: "CH.02", nom: "Théorème de Pythagore",
        exercices: [
          {
            id: "t3m-c2-e1", num: "EX.01", titre: "Calcul d'hypoténuse",
            difficulte: "Facile", duree: "15 min",
            sujet: `
              <h3>Exercice 1 — Théorème de Pythagore</h3>
              <div class="enonce">
                <p>Dans un triangle rectangle ABC en A, on donne :</p>
                <div class="data-box">AB = 6 cm &nbsp;·&nbsp; AC = 8 cm</div>
                <p>Calculer BC.</p>
              </div>
              <div class="espace" style="height:100px;"></div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <p>Le triangle ABC est rectangle en A, donc par le théorème de Pythagore :</p>
              <div class="step">
                <span class="eq">\(BC^2 = AB^2 + AC^2\)</span>
                <span class="eq ind">\(= 6^2 + 8^2\)</span>
                <span class="eq ind">\(= 36 + 64\)</span>
                <span class="eq ind">\(= 100\)</span>
                <span class="eq ind">\(BC = \sqrt{100} = 10\)</span>
              </div>
              <div class="result">\(\boxed{BC = 10 \text{ cm}}\)</div>
            `
          }
        ]
      },
      {
        id: "t3m-c3", num: "CH.03", nom: "Statistiques & probabilités",
        exercices: [
          {
            id: "t3m-c3-e1", num: "EX.01", titre: "Probabilités simples",
            difficulte: "Facile", duree: "15 min",
            sujet: `
              <h3>Exercice 1 — Probabilités</h3>
              <div class="enonce">
                <p>On lance un dé équilibré à 6 faces. On note les événements :</p>
                <div class="data-box">
                  A : « obtenir un nombre pair »<br>
                  B : « obtenir un nombre strictement supérieur à 4 »
                </div>
              </div>
              <div class="question" data-q="1.">
                <p>Calculer \(P(A)\) et \(P(B)\).</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer \(P(A \cap B)\) et \(P(A \cup B)\).</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>L'univers est \(\Omega = \{1,2,3,4,5,6\}\), avec \(|\Omega| = 6\).</p>
                <p>\(A = \{2,4,6\}\) donc \(P(A) = \dfrac{3}{6} = \dfrac{1}{2}\)</p>
                <p>\(B = \{5,6\}\) donc \(P(B) = \dfrac{2}{6} = \dfrac{1}{3}\)</p>
                <div class="result">\(\boxed{P(A) = \dfrac{1}{2} \quad;\quad P(B) = \dfrac{1}{3}}\)</div>
              </div>
              <div class="question" data-q="2.">
                <p>\(A \cap B = \{6\}\) donc \(P(A \cap B) = \dfrac{1}{6}\)</p>
                <div class="step">
                  <span class="eq">\(P(A \cup B) = P(A) + P(B) - P(A \cap B)\)</span>
                  <span class="eq ind">\(= \dfrac{1}{2} + \dfrac{1}{3} - \dfrac{1}{6}\)</span>
                  <span class="eq ind">\(= \dfrac{3+2-1}{6} = \dfrac{4}{6} = \dfrac{2}{3}\)</span>
                </div>
                <div class="result">\(\boxed{P(A \cup B) = \dfrac{2}{3}}\)</div>
              </div>
            `
          }
        ]
      }
    ],
    "physique": [
      {
        id: "t3p-c1", num: "CH.01", nom: "Électricité — Circuits",
        exercices: [
          {
            id: "t3p-c1-e1", num: "EX.01", titre: "Loi d'Ohm",
            difficulte: "Facile", duree: "15 min",
            sujet: `
              <h3>Exercice 1 — Loi d'Ohm</h3>
              <div class="enonce">
                <p>Un résistor de résistance \(R = 220\ \Omega\) est soumis à une tension \(U = 12\ \text{V}\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Rappeler la loi d'Ohm.</p>
                <div class="espace" style="height:40px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer l'intensité du courant qui traverse ce résistor.</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>La loi d'Ohm s'énonce : la tension aux bornes d'un résistor est proportionnelle à l'intensité du courant qui le traverse.</p>
                <div class="result">\(\boxed{U = R \times I}\)</div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(U = R \times I\)</span>
                  <span class="eq ind">\(I = \dfrac{U}{R}\)</span>
                  <span class="eq ind">\(I = \dfrac{12}{220}\)</span>
                  <span class="eq ind">\(I \approx 0{,}055 \ \text{A}\)</span>
                </div>
                <div class="result">\(\boxed{I \approx 55 \ \text{mA}}\)</div>
              </div>
            `
          }
        ]
      },
      {
        id: "t3p-c2", num: "CH.02", nom: "Mécanique — Vitesse & mouvements",
        exercices: [
          {
            id: "t3p-c2-e1", num: "EX.01", titre: "Vitesse moyenne",
            difficulte: "Facile", duree: "15 min",
            sujet: `
              <h3>Exercice 1 — Vitesse moyenne</h3>
              <div class="enonce">
                <p>Un train parcourt \(d = 540 \ \text{km}\) en \(t = 3 \ \text{h}\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Calculer la vitesse moyenne du train en km/h puis en m/s.</p>
                <div class="espace" style="height:100px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="step">
                <span class="eq">\(v = \dfrac{d}{t} = \dfrac{540}{3} = 180 \ \text{km/h}\)</span>
              </div>
              <p>Conversion en m/s : \(1 \ \text{km/h} = \dfrac{1}{3{,}6} \ \text{m/s}\)</p>
              <div class="step">
                <span class="eq">\(v = \dfrac{180}{3{,}6} = 50 \ \text{m/s}\)</span>
              </div>
              <div class="result">\(\boxed{v = 180 \ \text{km/h} = 50 \ \text{m/s}}\)</div>
            `
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────
  //  Seconde
  // ────────────────────────────────────────────────────
  "seconde": {
    "maths": [
      {
        id: "s2m-c1", num: "CH.01", nom: "Fonctions — Généralités",
        exercices: [
          {
            id: "s2m-c1-e1", num: "EX.01", titre: "Domaine de définition",
            difficulte: "Facile", duree: "20 min",
            sujet: `
              <h3>Exercice 1 — Domaine de définition</h3>
              <div class="enonce">
                <p>Déterminer le domaine de définition des fonctions suivantes.</p>
              </div>
              <div class="question" data-q="1.">
                <p>\(f(x) = \dfrac{x+1}{x-3}\)</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>\(g(x) = \sqrt{2x - 4}\)</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>\(h(x) = \dfrac{1}{\sqrt{x+5}}\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>Le dénominateur ne peut pas être nul : \(x - 3 \neq 0 \Rightarrow x \neq 3\)</p>
                <div class="result">\(\boxed{D_f = \mathbb{R} \setminus \{3\} = ]-\infty;\, 3[ \cup ]3;\, +\infty[}\)</div>
              </div>
              <div class="question" data-q="2.">
                <p>L'expression sous la racine doit être \(\geq 0\) :</p>
                <div class="step">
                  <span class="eq">\(2x - 4 \geq 0\)</span>
                  <span class="eq ind">\(x \geq 2\)</span>
                </div>
                <div class="result">\(\boxed{D_g = [2;\, +\infty[}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p>L'expression sous la racine doit être \(> 0\) (dénominateur) :</p>
                <div class="step">
                  <span class="eq">\(x + 5 > 0\)</span>
                  <span class="eq ind">\(x > -5\)</span>
                </div>
                <div class="result">\(\boxed{D_h = ]-5;\, +\infty[}\)</div>
              </div>
            `
          }
        ]
      },
      {
        id: "s2m-c2", num: "CH.02", nom: "Vecteurs dans le plan",
        exercices: [
          {
            id: "s2m-c2-e1", num: "EX.01", titre: "Opérations sur les vecteurs",
            difficulte: "Moyen", duree: "25 min",
            sujet: `
              <h3>Exercice 1 — Vecteurs</h3>
              <div class="enonce">
                <p>On donne \(\vec{u} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}\) et \(\vec{v} = \begin{pmatrix} -2 \\ 4 \end{pmatrix}\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Calculer \(2\vec{u} - \vec{v}\).</p>
                <div class="espace" style="height:70px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer \(\|\vec{u}\|\) et \(\|\vec{v}\|\).</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <div class="step">
                  <span class="eq">\(2\vec{u} - \vec{v} = 2\begin{pmatrix}3\\-1\end{pmatrix} - \begin{pmatrix}-2\\4\end{pmatrix}\)</span>
                  <span class="eq ind">\(= \begin{pmatrix}6\\-2\end{pmatrix} - \begin{pmatrix}-2\\4\end{pmatrix}\)</span>
                  <span class="eq ind">\(= \begin{pmatrix}8\\-6\end{pmatrix}\)</span>
                </div>
                <div class="result">\(\boxed{2\vec{u}-\vec{v} = \begin{pmatrix}8\\-6\end{pmatrix}}\)</div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(\|\vec{u}\| = \sqrt{3^2 + (-1)^2} = \sqrt{9+1} = \sqrt{10}\)</span>
                  <span class="eq ind">\(\|\vec{v}\| = \sqrt{(-2)^2+4^2} = \sqrt{4+16} = \sqrt{20} = 2\sqrt{5}\)</span>
                </div>
                <div class="result">\(\boxed{\|\vec{u}\| = \sqrt{10} \quad;\quad \|\vec{v}\| = 2\sqrt{5}}\)</div>
              </div>
            `
          }
        ]
      }
    ],
    "physique": [
      {
        id: "s2p-c1", num: "CH.01", nom: "Chimie — Atomes et molécules",
        exercices: [
          {
            id: "s2p-c1-e1", num: "EX.01", titre: "Structure électronique",
            difficulte: "Facile", duree: "20 min",
            sujet: `
              <h3>Exercice 1 — Configuration électronique</h3>
              <div class="enonce">
                <p>Donner la configuration électronique des atomes suivants et les représenter selon le modèle de Lewis.</p>
                <div class="data-box">
                  Carbone : \(Z = 6\) &nbsp;·&nbsp; Oxygène : \(Z = 8\) &nbsp;·&nbsp; Sodium : \(Z = 11\)
                </div>
              </div>
              <div class="question" data-q="1.">
                <p>Donner la configuration électronique de chaque atome.</p>
                <div class="espace" style="height:80px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Combien d'électrons de valence possède chacun ?</p>
                <div class="espace" style="height:60px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p><strong>Carbone</strong> \((Z=6)\) : \(1s^2\; 2s^2\; 2p^2\)</p>
                <p><strong>Oxygène</strong> \((Z=8)\) : \(1s^2\; 2s^2\; 2p^4\)</p>
                <p><strong>Sodium</strong> \((Z=11)\) : \(1s^2\; 2s^2\; 2p^6\; 3s^1\)</p>
              </div>
              <div class="question" data-q="2.">
                <p>La couche de valence est la couche externe :</p>
                <p>Carbone : 4 électrons de valence (couche \(n=2\))</p>
                <p>Oxygène : 6 électrons de valence (couche \(n=2\))</p>
                <p>Sodium : 1 électron de valence (couche \(n=3\))</p>
              </div>
            `
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────
  //  Première S1 & S2
  // ────────────────────────────────────────────────────
  "premiere-s1": {
    "maths": [
      {
        id: "p1m-c1", num: "CH.01", nom: "Suites numériques",
        exercices: [
          {
            id: "p1m-c1-e1", num: "EX.01", titre: "Suites arithmétiques et géométriques",
            difficulte: "Moyen", duree: "30 min",
            sujet: `
              <h3>Exercice 1 — Suites</h3>
              <div class="enonce">
                <p>Soit la suite \((u_n)\) définie par \(u_0 = 5\) et \(u_{n+1} = 2u_n - 3\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Calculer \(u_1\), \(u_2\) et \(u_3\).</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Montrer que la suite \((v_n)\) définie par \(v_n = u_n - 3\) est géométrique. Préciser sa raison.</p>
                <div class="espace" style="height:90px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>Exprimer \(u_n\) en fonction de \(n\).</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <div class="step">
                  <span class="eq">\(u_1 = 2 \times 5 - 3 = 7\)</span>
                  <span class="eq ind">\(u_2 = 2 \times 7 - 3 = 11\)</span>
                  <span class="eq ind">\(u_3 = 2 \times 11 - 3 = 19\)</span>
                </div>
              </div>
              <div class="question" data-q="2.">
                <p>On pose \(v_n = u_n - 3\). Calculons \(\dfrac{v_{n+1}}{v_n}\) :</p>
                <div class="step">
                  <span class="eq">\(v_{n+1} = u_{n+1} - 3 = (2u_n - 3) - 3\)</span>
                  <span class="eq ind">\(= 2u_n - 6 = 2(u_n - 3) = 2v_n\)</span>
                </div>
                <p>Donc \(\dfrac{v_{n+1}}{v_n} = 2\) (constante), ainsi \((v_n)\) est géométrique de raison \(q = 2\).</p>
                <div class="result">\(\boxed{q = 2}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p>\(v_0 = u_0 - 3 = 5 - 3 = 2\), donc \(v_n = 2 \times 2^n = 2^{n+1}\).</p>
                <div class="step">
                  <span class="eq">\(u_n = v_n + 3 = 2^{n+1} + 3\)</span>
                </div>
                <div class="result">\(\boxed{u_n = 2^{n+1} + 3}\)</div>
              </div>
            `
          }
        ]
      },
      {
        id: "p1m-c2", num: "CH.02", nom: "Dérivation",
        exercices: [
          {
            id: "p1m-c2-e1", num: "EX.01", titre: "Calcul de dérivées",
            difficulte: "Moyen", duree: "25 min",
            sujet: `
              <h3>Exercice 1 — Dérivées</h3>
              <div class="enonce">
                <p>Calculer la dérivée de chacune des fonctions suivantes.</p>
              </div>
              <div class="question" data-q="1.">
                <p>\(f(x) = 3x^4 - 2x^2 + 5x - 1\)</p>
                <div class="espace" style="height:50px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>\(g(x) = (2x-1)(x^2+3)\)</p>
                <div class="espace" style="height:70px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>\(h(x) = \dfrac{x+1}{2x-3}\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <div class="step">
                  <span class="eq">\(f'(x) = 3 \times 4x^3 - 2 \times 2x + 5\)</span>
                  <span class="eq ind">\(= 12x^3 - 4x + 5\)</span>
                </div>
                <div class="result">\(\boxed{f'(x) = 12x^3 - 4x + 5}\)</div>
              </div>
              <div class="question" data-q="2.">
                <p>Règle \((uv)' = u'v + uv'\) avec \(u = 2x-1\) et \(v = x^2+3\).</p>
                <div class="step">
                  <span class="eq">\(g'(x) = 2(x^2+3) + (2x-1)(2x)\)</span>
                  <span class="eq ind">\(= 2x^2 + 6 + 4x^2 - 2x\)</span>
                  <span class="eq ind">\(= 6x^2 - 2x + 6\)</span>
                </div>
                <div class="result">\(\boxed{g'(x) = 6x^2 - 2x + 6}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p>Règle \(\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}\) avec \(u=x+1\), \(v=2x-3\).</p>
                <div class="step">
                  <span class="eq">\(h'(x) = \dfrac{1 \cdot (2x-3) - (x+1) \cdot 2}{(2x-3)^2}\)</span>
                  <span class="eq ind">\(= \dfrac{2x - 3 - 2x - 2}{(2x-3)^2}\)</span>
                  <span class="eq ind">\(= \dfrac{-5}{(2x-3)^2}\)</span>
                </div>
                <div class="result">\(\boxed{h'(x) = \dfrac{-5}{(2x-3)^2}}\)</div>
              </div>
            `
          }
        ]
      }
    ],
    "physique": [
      {
        id: "p1p-c1", num: "CH.01", nom: "Mécanique — Lois de Newton",
        exercices: [
          {
            id: "p1p-c1-e1", num: "EX.01", titre: "Deuxième loi de Newton",
            difficulte: "Moyen", duree: "30 min",
            sujet: `
              <h3>Exercice 1 — 2ème loi de Newton</h3>
              <div class="enonce">
                <p>Un bloc de masse \(m = 2 \ \text{kg}\) est posé sur un plan incliné d'angle \(\alpha = 30°\). Le sol est supposé sans frottement.</p>
                <div class="data-box">
                  \(g = 9{,}8 \ \text{m/s}^2\) &nbsp;·&nbsp; \(\sin 30° = 0{,}5\) &nbsp;·&nbsp; \(\cos 30° = 0{,}87\)
                </div>
              </div>
              <div class="question" data-q="1.">
                <p>Faire le bilan des forces s'exerçant sur le bloc.</p>
                <div class="espace" style="height:80px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer l'accélération du bloc sur le plan incliné.</p>
                <div class="espace" style="height:100px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>Forces s'exerçant sur le bloc :</p>
                <p>• Le poids \(\vec{P}\) : vertical vers le bas, \(P = mg = 2 \times 9{,}8 = 19{,}6 \ \text{N}\)</p>
                <p>• La réaction normale \(\vec{N}\) : perpendiculaire au plan, vers le haut</p>
                <p>(Pas de frottement : pas de force tangentielle)</p>
              </div>
              <div class="question" data-q="2.">
                <p>On projette la 2ème loi de Newton sur l'axe du plan :</p>
                <div class="step">
                  <span class="eq">\(\sum F_x = ma\)</span>
                  <span class="eq ind">\(P \sin\alpha = ma\)</span>
                  <span class="eq ind">\(a = g \sin\alpha = 9{,}8 \times 0{,}5\)</span>
                  <span class="eq ind">\(a = 4{,}9 \ \text{m/s}^2\)</span>
                </div>
                <div class="result">\(\boxed{a = 4{,}9 \ \text{m/s}^2}\)</div>
              </div>
            `
          }
        ]
      }
    ]
  },

  "premiere-s2": {
    "maths": [
      {
        id: "p2m-c1", num: "CH.01", nom: "Probabilités conditionnelles",
        exercices: [
          {
            id: "p2m-c1-e1", num: "EX.01", titre: "Probabilités conditionnelles",
            difficulte: "Moyen", duree: "30 min",
            sujet: `
              <h3>Exercice 1 — Probabilités conditionnelles</h3>
              <div class="enonce">
                <p>Dans une classe, 60% des élèves ont un smartphone. Parmi ceux qui ont un smartphone, 80% utilisent les réseaux sociaux. Parmi ceux qui n'ont pas de smartphone, 20% utilisent les réseaux sociaux.</p>
              </div>
              <div class="question" data-q="1.">
                <p>Construire un arbre de probabilités.</p>
                <div class="espace" style="height:120px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer la probabilité qu'un élève choisi au hasard utilise les réseaux sociaux.</p>
                <div class="espace" style="height:90px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>Notons S : « a un smartphone » et R : « utilise les réseaux sociaux ».</p>
                <p>Données : \(P(S) = 0{,}6\) · \(P(R|S) = 0{,}8\) · \(P(R|\bar{S}) = 0{,}2\)</p>
              </div>
              <div class="question" data-q="2.">
                <p>Par la formule des probabilités totales :</p>
                <div class="step">
                  <span class="eq">\(P(R) = P(S) \times P(R|S) + P(\bar{S}) \times P(R|\bar{S})\)</span>
                  <span class="eq ind">\(= 0{,}6 \times 0{,}8 + 0{,}4 \times 0{,}2\)</span>
                  <span class="eq ind">\(= 0{,}48 + 0{,}08\)</span>
                  <span class="eq ind">\(= 0{,}56\)</span>
                </div>
                <div class="result">\(\boxed{P(R) = 0{,}56 = 56\%}\)</div>
              </div>
            `
          }
        ]
      }
    ],
    "physique": [
      {
        id: "p2p-c1", num: "CH.01", nom: "Optique — Réfraction",
        exercices: [
          {
            id: "p2p-c1-e1", num: "EX.01", titre: "Loi de Snell-Descartes",
            difficulte: "Moyen", duree: "25 min",
            sujet: `
              <h3>Exercice 1 — Réfraction</h3>
              <div class="enonce">
                <p>Un rayon lumineux passe de l'air (\(n_1 = 1{,}00\)) dans un verre d'indice \(n_2 = 1{,}50\) avec un angle d'incidence \(i_1 = 45°\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Rappeler la loi de Snell-Descartes pour la réfraction.</p>
                <div class="espace" style="height:50px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer l'angle de réfraction \(i_2\).</p>
                <div class="espace" style="height:90px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <div class="result">\(\boxed{n_1 \sin i_1 = n_2 \sin i_2}\)</div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(\sin i_2 = \dfrac{n_1 \sin i_1}{n_2}\)</span>
                  <span class="eq ind">\(= \dfrac{1{,}00 \times \sin 45°}{1{,}50}\)</span>
                  <span class="eq ind">\(= \dfrac{0{,}707}{1{,}50} \approx 0{,}471\)</span>
                  <span class="eq ind">\(i_2 = \arcsin(0{,}471) \approx 28{,}1°\)</span>
                </div>
                <div class="result">\(\boxed{i_2 \approx 28°}\)</div>
              </div>
            `
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────
  //  Terminale S1 & S2
  // ────────────────────────────────────────────────────
  "terminale-s1": {
    "maths": [
      {
        id: "ts1m-c1", num: "CH.01", nom: "Limites et continuité",
        exercices: [
          {
            id: "ts1m-c1-e1", num: "EX.01", titre: "Calcul de limites",
            difficulte: "Difficile", duree: "35 min",
            sujet: `
              <h3>Exercice 1 — Calcul de limites</h3>
              <div class="enonce">
                <p>Calculer les limites suivantes.</p>
              </div>
              <div class="question" data-q="1.">
                <p>\(\lim_{x \to +\infty} \dfrac{3x^2 - 2x + 1}{x^2 + 5}\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>\(\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2}\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>\(\lim_{x \to 0} \dfrac{\sin(3x)}{x}\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>Diviser numérateur et dénominateur par \(x^2\) :</p>
                <div class="step">
                  <span class="eq">\(\lim_{x\to+\infty} \dfrac{3x^2-2x+1}{x^2+5} = \lim_{x\to+\infty} \dfrac{3-\frac{2}{x}+\frac{1}{x^2}}{1+\frac{5}{x^2}}\)</span>
                  <span class="eq ind">\(= \dfrac{3-0+0}{1+0} = 3\)</span>
                </div>
                <div class="result">\(\boxed{\lim_{x\to+\infty} \dfrac{3x^2-2x+1}{x^2+5} = 3}\)</div>
              </div>
              <div class="question" data-q="2.">
                <p>Forme indéterminée \(\dfrac{0}{0}\) en \(x=2\). On factorise :</p>
                <div class="step">
                  <span class="eq">\(x^2 - 4 = (x-2)(x+2)\)</span>
                  <span class="eq ind">\(\dfrac{x^2-4}{x-2} = \dfrac{(x-2)(x+2)}{x-2} = x+2\)</span>
                </div>
                <div class="result">\(\boxed{\lim_{x\to 2} \dfrac{x^2-4}{x-2} = 4}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p>On utilise \(\lim_{u\to 0}\dfrac{\sin u}{u} = 1\) :</p>
                <div class="step">
                  <span class="eq">\(\dfrac{\sin(3x)}{x} = 3 \cdot \dfrac{\sin(3x)}{3x} \\xrightarrow[x\to 0]{} 3 \times 1 = 3\)</span>
                </div>
                <div class="result">\(\boxed{\lim_{x\to 0} \dfrac{\sin(3x)}{x} = 3}\)</div>
              </div>
            `
          }
        ]
      },
      {
        id: "ts1m-c2", num: "CH.02", nom: "Intégration",
        exercices: [
          {
            id: "ts1m-c2-e1", num: "EX.01", titre: "Calcul d'intégrales",
            difficulte: "Difficile", duree: "40 min",
            sujet: `
              <h3>Exercice 1 — Intégrales</h3>
              <div class="enonce">
                <p>Calculer les intégrales suivantes.</p>
              </div>
              <div class="question" data-q="1.">
                <p>\(\int_0^2 (3x^2 - 2x + 1)\, dx\)</p>
                <div class="espace" style="height:80px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>\(\int_1^e \dfrac{1}{x}\, dx\)</p>
                <div class="espace" style="height:70px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <div class="step">
                  <span class="eq">\(\int_0^2 (3x^2-2x+1)\,dx = \left[x^3 - x^2 + x\right]_0^2\)</span>
                  <span class="eq ind">\(= (8 - 4 + 2) - (0)\)</span>
                  <span class="eq ind">\(= 6\)</span>
                </div>
                <div class="result">\(\boxed{\int_0^2 (3x^2-2x+1)\,dx = 6}\)</div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(\int_1^e \dfrac{1}{x}\,dx = \left[\ln x\right]_1^e\)</span>
                  <span class="eq ind">\(= \ln e - \ln 1\)</span>
                  <span class="eq ind">\(= 1 - 0 = 1\)</span>
                </div>
                <div class="result">\(\boxed{\int_1^e \dfrac{1}{x}\,dx = 1}\)</div>
              </div>
            `
          }
        ]
      }
    ],
    "physique": [
      {
        id: "ts1p-c1", num: "CH.01", nom: "Mécanique — Dynamique",
        exercices: [
          {
            id: "ts1p-c1-e1", num: "EX.01", titre: "Chute libre",
            difficulte: "Moyen", duree: "30 min",
            sujet: `
              <h3>Exercice 1 — Chute libre</h3>
              <div class="enonce">
                <p>On lâche sans vitesse initiale un objet de masse \(m = 500 \ \text{g}\) depuis une hauteur \(h = 20 \ \text{m}\).</p>
                <div class="data-box">\(g = 9{,}8 \ \text{m/s}^2\)</div>
              </div>
              <div class="question" data-q="1.">
                <p>Établir les équations horaires \(y(t)\) et \(v(t)\).</p>
                <div class="espace" style="height:90px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer la durée de chute et la vitesse à l'impact.</p>
                <div class="espace" style="height:100px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>Avec axe Oy vers le bas, origine en O :</p>
                <div class="step">
                  <span class="eq">\(a = g = 9{,}8 \ \text{m/s}^2\)</span>
                  <span class="eq ind">\(v(t) = gt\)</span>
                  <span class="eq ind">\(y(t) = \dfrac{1}{2}gt^2\)</span>
                </div>
              </div>
              <div class="question" data-q="2.">
                <p>À l'impact, \(y(t) = h = 20 \ \text{m}\) :</p>
                <div class="step">
                  <span class="eq">\(\dfrac{1}{2}g t^2 = 20\)</span>
                  <span class="eq ind">\(t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{40}{9{,}8}} \approx 2{,}02 \ \text{s}\)</span>
                </div>
                <div class="step">
                  <span class="eq">\(v = g \times t \approx 9{,}8 \times 2{,}02 \approx 19{,}8 \ \text{m/s}\)</span>
                </div>
                <div class="result">\(\boxed{t \approx 2{,}02 \ \text{s} \quad;\quad v \approx 19{,}8 \ \text{m/s}}\)</div>
              </div>
            `
          }
        ]
      }
    ]
  },

  "terminale-s2": {
    "maths": [
      {
        id: "ts2m-c1", num: "CH.01", nom: "Nombres complexes",
        exercices: [
          {
            id: "ts2m-c1-e1", num: "EX.01", titre: "Opérations sur les complexes",
            difficulte: "Difficile", duree: "40 min",
            sujet: `
              <h3>Exercice 1 — Nombres complexes</h3>
              <div class="enonce">
                <p>Soient \(z_1 = 3 + 2i\) et \(z_2 = 1 - i\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Calculer \(z_1 + z_2\), \(z_1 \times z_2\) et \(\dfrac{z_1}{z_2}\).</p>
                <div class="espace" style="height:100px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer \(|z_1|\) et \(|z_2|\). En déduire \(\left|\dfrac{z_1}{z_2}\right|\).</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <div class="step">
                  <span class="eq">\(z_1 + z_2 = (3+1) + (2-1)i = 4 + i\)</span>
                </div>
                <div class="step">
                  <span class="eq">\(z_1 \times z_2 = (3+2i)(1-i)\)</span>
                  <span class="eq ind">\(= 3 - 3i + 2i - 2i^2\)</span>
                  <span class="eq ind">\(= 3 - i + 2 = 5 - i\)</span>
                </div>
                <div class="step">
                  <span class="eq">\(\dfrac{z_1}{z_2} = \dfrac{3+2i}{1-i} \times \dfrac{1+i}{1+i}\)</span>
                  <span class="eq ind">\(= \dfrac{(3+2i)(1+i)}{1+1}\)</span>
                  <span class="eq ind">\(= \dfrac{3+3i+2i-2}{2}\)</span>
                  <span class="eq ind">\(= \dfrac{1+5i}{2} = \dfrac{1}{2} + \dfrac{5}{2}i\)</span>
                </div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(|z_1| = \sqrt{3^2+2^2} = \sqrt{13}\)</span>
                  <span class="eq ind">\(|z_2| = \sqrt{1^2+(-1)^2} = \sqrt{2}\)</span>
                  <span class="eq ind">\(\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|} = \dfrac{\sqrt{13}}{\sqrt{2}} = \sqrt{\dfrac{13}{2}}\)</span>
                </div>
                <div class="result">\(\boxed{\left|\dfrac{z_1}{z_2}\right| = \sqrt{\dfrac{13}{2}}}\)</div>
              </div>
            `
          }
        ]
      }
    ],
    "physique": [
      {
        id: "ts2p-c1", num: "CH.01", nom: "Électricité — Circuits RC et RL",
        exercices: [
          {
            id: "ts2p-c1-e1", num: "EX.01", titre: "Charge d'un condensateur",
            difficulte: "Difficile", duree: "40 min",
            sujet: `
              <h3>Exercice 1 — Circuit RC</h3>
              <div class="enonce">
                <p>Un condensateur de capacité \(C = 100 \ \mu F\) est chargé à travers une résistance \(R = 10 \ k\Omega\) sous une tension \(E = 12 \ \text{V}\).</p>
              </div>
              <div class="question" data-q="1.">
                <p>Établir l'équation différentielle vérifiée par \(u_C(t)\).</p>
                <div class="espace" style="height:90px;"></div>
              </div>
              <div class="question" data-q="2.">
                <p>Calculer la constante de temps \(\tau\).</p>
                <div class="espace" style="height:60px;"></div>
              </div>
              <div class="question" data-q="3.">
                <p>Donner la solution \(u_C(t)\).</p>
                <div class="espace" style="height:80px;"></div>
              </div>
            `,
            correction: `
              <h3>Correction — Exercice 1</h3>
              <div class="question" data-q="1.">
                <p>Loi des mailles : \(E = u_R + u_C = Ri + u_C\)</p>
                <p>Or \(i = C \dfrac{du_C}{dt}\), donc :</p>
                <div class="step">
                  <span class="eq">\(RC\dfrac{du_C}{dt} + u_C = E\)</span>
                </div>
              </div>
              <div class="question" data-q="2.">
                <div class="step">
                  <span class="eq">\(\tau = RC = 10 \times 10^3 \times 100 \times 10^{-6}\)</span>
                  <span class="eq ind">\(= 1 \ \text{s}\)</span>
                </div>
                <div class="result">\(\boxed{\tau = 1 \ \text{s}}\)</div>
              </div>
              <div class="question" data-q="3.">
                <p>Avec \(u_C(0) = 0\) (condensateur déchargé initialement) :</p>
                <div class="result">\(\boxed{u_C(t) = E\left(1 - e^{-t/\tau}\right) = 12\left(1 - e^{-t}\right) \ \text{V}}\)</div>
              </div>
            `
          }
        ]
      }
    ]
  }
};

// Labels d'affichage
const LABELS = {
  "troisieme":    "Troisième",
  "seconde":      "Seconde",
  "premiere-s1":  "Première S1",
  "premiere-s2":  "Première S2",
  "terminale-s1": "Terminale S1",
  "terminale-s2": "Terminale S2",
  "maths":        "Mathématiques",
  "physique":     "Sciences Physiques"
};

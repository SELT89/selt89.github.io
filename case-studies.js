/* data/case-studies.js — structure de référence des études de cas.
   Les textes affichés vivent dans index.html (FR) et content/en.js (EN) ;
   ce fichier trace la structure, les univers et les statuts. */
window.CASE_STUDIES = [
  { id: "tresorerie", univers: ["cpt", "fin"], publie: true,
    titre: "Automatisation du reporting de trésorerie",
    resultat: { affiche: "prudente", ref: "PROFILE.resultats.tresorerie" } },
  { id: "cloture", univers: ["cpt"], publie: true,
    titre: "Réorganisation du cycle de clôture",
    resultat: { affiche: "prudente", ref: "PROFILE.resultats.cloture" } },
  { id: "tva", univers: ["cpt"], publie: true,
    titre: "Détection et régularisation d'anomalies TVA",
    resultat: { affiche: "validee", ref: "PROFILE.resultats.tva" } },
  { id: "reporting", univers: ["fin"], publie: true,
    titre: "Standardisation du reporting multi-entités",
    resultat: { affiche: "prudente", ref: "PROFILE.resultats.reporting" } },
  { id: "subsides", univers: ["cpt", "fin"], publie: false,
    titre: "Justification de dépenses subsidiées",
    note: "Brouillon. À rédiger ensemble, données fictives et anonymisées. Non publié en v1." }
];

/* data/profile.js — SOURCE UNIQUE DE VÉRITÉ (étape 4 v1.1, validée le 01/08/2026)
   Règle : toute modification ici doit être répercutée dans index.html
   (site statique sans build). Les résultats ont deux formulations ;
   la version chiffrée ne s'affiche que si statut === "verifie". */
window.PROFILE = {
  identite: {
    nom: "Samir El Taibe",
    intituleOfficiel: "Coordinateur financier et administratif",
    employeur: "Mission Locale de Molenbeek et Molenbeek Formation (ASBL, Bruxelles)",
    depuis: 2024,
    ville: "Bruxelles",
    email: "eltaibesamir@gmail.com",
    linkedin: "https://www.linkedin.com/in/samir-eltaibe"
  },
  positionnement: {
    fr: "De la comptabilité à la décision",
    en: "From accounting to decision-making",
    sousTitreFr: "Le chiffre comme point de départ, pas comme une fin en soi.",
    manifesteSecondaire: "Comprendre. Sécuriser. Créer de la valeur."
  },
  reperes: ["8+ ans d'expérience", "2 entités", "4 collaborateurs encadrés",
            "comptabilité générale", "reporting et budgets", "amélioration des processus"],
  resultats: [
    { id: "tresorerie",
      prudente: "Automatisation quasi complète du reporting de trésorerie sous Excel",
      chiffree: "Production ramenée de 60 à 2 minutes",
      statut: "a_documenter" },
    { id: "reporting",
      prudente: "Réduction significative du temps de traitement des reportings grâce à la standardisation",
      chiffree: "Environ 30 % de temps gagné",
      statut: "a_documenter" },
    { id: "cloture",
      prudente: "Cycle de clôture raccourci grâce à la réorganisation des contrôles et des réconciliations",
      chiffree: "Réduction d'environ 10 %",
      statut: "a_documenter" },
    { id: "tva",
      prudente: "Détection et régularisation proactive d'anomalies TVA avant contrôle, afin de sécuriser la conformité des déclarations",
      chiffree: null,
      statut: "verifie" }
  ],
  formations: [
    "Bachelier en comptabilité, orientation fiscalité, EPHEC, 2023-2026, en cours de finalisation",
    "Master en opérations financières et internationales, HBF, Oujda, 2013-2015",
    "Licence en management bancaire, HBF, Oujda, 2010-2013"
  ],
  outils: ["Adfinity", "Isabel", "Excel avancé", "Winbooks", "Popsy", "SAP FI (formation Key User)"],
  langues: {
    fr: "Français courant (langue de travail)",
    ar: "Arabe (langue maternelle)",
    en: "Anglais intermédiaire professionnel : bonne compréhension écrite, communication écrite opérationnelle, expression orale en progression"
  },
  objectif: "Poursuivre mon parcours vers la certification ITAA"
};

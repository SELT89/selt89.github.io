/* data/cv-manifest.js — CV spécialisés (angles de candidature, jamais des postes occupés).
   "fichier" = nom cible dans assets/cv/ ; "source" = nom actuel dans le dépôt,
   à renommer lors du dépôt (voir README). Un CV ne s'affiche que si actif
   ET que le fichier existe réellement. */
window.CV_MANIFEST = [
  { id: "gl", fichier: "cv-general-ledger-accountant-fr.pdf", source: "CV General Ledger Accountant(1).pdf",
    langue: "fr", famille: "accounting", niveau: "confirme", univers: "cpt",
    label: "General Ledger Accountant", priorite: 1, actif: true },
  { id: "senior-accountant", fichier: "cv-senior-accountant-fr.pdf", source: "CV Senior Accountant(1).pdf",
    langue: "fr", famille: "accounting", niveau: "senior", univers: "cpt",
    label: "Senior Accountant", priorite: 2, actif: true },
  { id: "chef-comptable", fichier: "cv-chef-comptable-fr.pdf", source: "CV Chef comptable(1).pdf",
    langue: "fr", famille: "accounting", niveau: "lead", univers: "cpt",
    label: "Chef comptable", priorite: 3, actif: true },
  { id: "comptable-confirme", fichier: "cv-comptable-confirme-fr.pdf", source: "Samir Comptable confirmé(1).pdf",
    langue: "fr", famille: "accounting", niveau: "confirme", univers: "cpt",
    label: "Comptable confirmé", priorite: 4, actif: true },
  { id: "compta-publique", fichier: "cv-comptabilite-generale-publique-fr.pdf", source: "CV Comptable en comptabilité générale et publique(1).pdf",
    langue: "fr", famille: "accounting", niveau: "confirme", univers: "cpt",
    label: "Comptabilité générale et publique", priorite: 5, actif: true },
  { id: "financial-analyst", fichier: "cv-financial-analyst-fr.pdf", source: "CV Financial Analyst(1).pdf",
    langue: "fr", famille: "finance", niveau: "confirme", univers: "fin",
    label: "Financial Analyst", priorite: 1, actif: true },
  { id: "controleur-gestion", fichier: "cv-controleur-de-gestion-fr.pdf", source: "CV Contrôleur de gestion(1).pdf",
    langue: "fr", famille: "finance", niveau: "confirme", univers: "fin",
    label: "Contrôleur de gestion", priorite: 2, actif: true },
  { id: "referent-erp", fichier: "cv-referent-erp-processus-fr.pdf", source: "CV Comptable, référent ERP et amélioration des processus(1).pdf",
    langue: "fr", famille: "process", niveau: "confirme", univers: "cpt",
    label: "Comptable, référent ERP et processus", priorite: 6, actif: true },
  { id: "experienced-en", fichier: "cv-experienced-accountant-en.pdf", source: "Samir Experienced Accountant.pdf",
    langue: "en", famille: "english", niveau: "confirme", univers: "cpt",
    label: "Experienced Accountant (EN)", priorite: 1, actif: true },
  /* Archivés : hors assets/cv/, jamais affichés. */
  { id: "un-comptable", fichier: null, source: "CV Un Comptable(2).pdf",
    langue: "fr", famille: "accounting", niveau: "confirme", univers: "cpt",
    label: "Un Comptable (doublon)", priorite: 99, actif: false },
  { id: "senior-fa", fichier: null, source: "CV Senior Financial Analyst(2).pdf",
    langue: "fr", famille: "finance", niveau: "senior", univers: "fin",
    label: "Senior Financial Analyst (doublon)", priorite: 99, actif: false }
];
window.CV_RECO = {
  cpt: { reco: "gl", alt: "senior-accountant" },
  fin: { reco: "financial-analyst", alt: "controleur-gestion" },
  hum: { reco: null, alt: null, repli: "comptable-confirme" }
};

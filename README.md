# Portfolio Samir El Taibe · v2.0

Site statique GitHub Pages. HTML, CSS et JavaScript natifs, aucune bibliothèque.
Source de vérité éditoriale : `etape-4-wireframe.md` (v1.1, validée le 01/08/2026).

## Structure

```
index.html            page principale (hero, univers, études de cas, 60 s, parcours, contact)
parcours.html         page Processus (BPMN clôture puis BPMN parcours)
styles.css            styles communs, univers, mobile, impression
script.js             univers, grec, langue FR/EN, recommandation des CV
data/profile.js       source unique de vérité (identité, résultats et statuts)
data/cv-manifest.js   CV : fichiers, familles, actifs/archivés, recommandations
data/case-studies.js  structure des études de cas et statuts de publication
content/fr.js         libellés dynamiques FR (le FR statique vit dans le HTML)
content/en.js         traductions anglaises complètes
assets/cv/            les PDF des CV, en kebab-case
assets/images/        vide pour l'instant (future photo réelle)
```

## Publier

1. Sur le dépôt `selt89.github.io`, Add file > Upload files.
2. Glisser TOUT le contenu du zip d'un coup, dossiers compris (`data`, `content`, `assets`). GitHub conserve l'arborescence.
3. Commit changes.
4. **Renommer les CV déjà présents dans le dépôt** selon la table ci-dessous, et les déplacer dans `assets/cv/`. Sur GitHub : ouvrir le fichier, icône crayon, modifier le champ du nom en tête, y compris le chemin (taper `assets/cv/` devant le nouveau nom), Commit.
5. **Supprimer les images générées par IA** encore dans le dépôt : `photo.jpg`, `photo-cpt.jpg`, `photo-fin.jpg`, `photo-hum.jpg`. Règle définitive du brief : aucune photo IA.
6. Attendre une à deux minutes, puis Ctrl + Shift + R sur https://selt89.github.io.

## Renommage des CV (obligatoire, sinon liens morts)

| Fichier actuel dans le dépôt | Nouveau chemin |
|---|---|
| CV General Ledger Accountant(1).pdf | déjà fourni renommé dans le zip |
| CV Senior Accountant(1).pdf | assets/cv/cv-senior-accountant-fr.pdf |
| CV Chef comptable(1).pdf | assets/cv/cv-chef-comptable-fr.pdf |
| Samir Comptable confirmé(1).pdf | assets/cv/cv-comptable-confirme-fr.pdf |
| CV Comptable en comptabilité générale et publique(1).pdf | assets/cv/cv-comptabilite-generale-publique-fr.pdf |
| CV Financial Analyst(1).pdf | assets/cv/cv-financial-analyst-fr.pdf |
| CV Contrôleur de gestion(1).pdf | assets/cv/cv-controleur-de-gestion-fr.pdf |
| CV Comptable, référent ERP et amélioration des processus(1).pdf | assets/cv/cv-referent-erp-processus-fr.pdf |
| Samir Experienced Accountant.pdf | assets/cv/cv-experienced-accountant-en.pdf |
| CV Un Comptable(2).pdf | à supprimer du dépôt (archivé) |
| CV Senior Financial Analyst(2).pdf | à supprimer du dépôt (archivé) |

## Éditer

- Le site est complet sans JavaScript, en français, univers Comptabilité. Toutes les valeurs finales sont dans le HTML.
- `data/` et `content/` sont la référence éditoriale. Il n'y a pas de build : toute modification de fond doit être répercutée à la main dans `index.html` (et inversement).
- **Activer un chiffre** (60→2 min, −30 %, −10 %) : documenter d'abord la mesure (organisation, tâche, avant, après, méthode), passer `statut` à `"verifie"` dans `data/profile.js`, puis remplacer la formulation prudente par la chiffrée dans `index.html` (étude de cas, 60 secondes, dashboard finance).
- **Langue** : le sélecteur FR/EN est dans la barre. L'anglais vit dans `content/en.js`.
- **Photo réelle** : à la livraison d'une vraie séance photo noir et blanc, déposer le fichier dans `assets/images/` et me redonner la main pour activer l'emplacement (une modification d'`index.html`). D'ici là, le monogramme SE est assumé.
- Diagrammes BPMN fournis en français (mention affichée sur la page Processus).
- Seule dépendance externe : les polices Google Fonts.

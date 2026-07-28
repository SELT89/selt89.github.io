# CV en ligne — Samir El Taibe

Site statique, deux fichiers, aucune dépendance à installer.

- `index.html` : le CV, avec bascule entre trois profils (comptabilité générale, analyse financière, comptabilité ASBL et publique) et bouton Imprimer qui produit un PDF A4 propre.
- `parcours.html` : deux diagrammes BPMN (parcours 2010-2026, cycle de clôture mensuelle).

## Publier

1. Créer un dépôt public nommé exactement `<pseudo>.github.io` (remplacer `<pseudo>` par le nom d'utilisateur GitHub).
2. Déposer `index.html`, `parcours.html` et ce fichier à la racine du dépôt.
3. Settings > Pages > Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`, puis Save.
4. Attendre une à deux minutes. Le site est en ligne sur `https://<pseudo>.github.io`.

## Modifier

Tout le contenu est en clair dans le HTML. Chercher le texte à changer, l'éditer, valider (Commit changes). La mise à jour est visible en une minute environ.

## Points d'attention

- Le numéro de téléphone est masqué à l'écran (page publique indexée) mais apparaît sur la version imprimée. Classe CSS `.tel`.
- Pour ajouter ou retirer une compétence selon le profil, modifier l'attribut `data-for` : `gl` = comptabilité générale, `fa` = analyse financière, `pub` = ASBL et public. Plusieurs valeurs séparées par un espace.

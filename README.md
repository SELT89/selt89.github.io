# CV en ligne — Samir El Taibe

Site statique, aucune dépendance à installer.

- `index.html` : le CV. Trois angles de lecture, chacun avec son code couleur.
  - Comptabilité, rouge `#E1352A`
  - Finance, jaune `#F0B31C`
  - Savoir-être, cyan `#1FB0C4`
- `parcours.html` : deux diagrammes BPMN (parcours 2010-2026, cycle de clôture mensuelle).
- `photo.jpg` : photo de profil, à déposer à la racine sous ce nom exact. Format carré, 600x600 px minimum. Si le fichier est absent, les initiales SE s'affichent et rien ne casse.

## Publier

1. Dépôt public `selt89.github.io`.
2. Add file > Upload files > déposer les fichiers à la racine > Commit changes.
3. Settings > Pages > Source `Deploy from a branch`, branche `main`, dossier `/ (root)`, Save.
4. Une à deux minutes, puis `https://selt89.github.io`.

## Modifier

Tout est en clair dans le HTML. Icône crayon sur GitHub, éditer, Commit changes.

## Repères

- **Angles** : attribut `data-for` sur chaque élément. `cpt` = comptabilité, `fin` = finance, `hum` = savoir-être. Plusieurs valeurs séparées par un espace : `data-for="cpt fin"`.
- **Couleurs** : bloc `body[data-angle="..."]` en haut du CSS, plus l'objet `ACC` dans le script.
- **Téléphone** : masqué à l'écran, visible à l'impression. Classe `.tel`.
- **Graphiques** : valeurs dans le `<script>` en bas, objets `radar`, `bars`, `donut`. Les couleurs suivent automatiquement l'angle actif.
- **Chronologie** : barres positionnées en pourcentage sur une échelle 2010-2026, attributs `left` et `width` dans le HTML.
- **Impression** : le bouton PDF sort une version sobre, noir sur blanc, sans graphiques ni effets. C'est cette version qu'on envoie en candidature.

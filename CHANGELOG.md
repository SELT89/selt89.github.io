# Changelog · Portfolio Samir El Taibe

## v2.1.0 · 05/08/2026 · Rythme et présence

### Modifié
- Grec ralenti pour être réellement lisible : environ 0,8 s stable puis 0,56 s de transformation, soit 1,4 s au total. Toujours une seule fois par session : pour le revoir, ouvrir une fenêtre de navigation privée.
- Entrée en scène du hero au premier chargement de la session : les éléments apparaissent en séquence sur environ 1,7 s (repère, bloc identité, titre en grec qui se transforme, sous-titre, présentation, repères, boutons, dashboard). La page reste utilisable dès la première milliseconde, rien n'est bloqué, désactivé avec prefers-reduced-motion, garde-fou automatique si le script échoue.
- Bloc identité retravaillé : plus grand, cadre intérieur, monogramme SE et nom en composition typographique. Ce n'est plus un carré vide.

### Ajouté
- Emplacement photo réelle auto-monté : déposer une photo nommée `portrait.jpg` dans `assets/images/` suffit. Elle s'affiche automatiquement en noir et blanc contrasté à la place du monogramme, sans toucher au code. Aucune image générée par IA (règle inchangée).

## v2.0.0 · 02/08/2026 · Étape 5, refonte complète

### Ajouté
- Hero « De la comptabilité à la décision » avec sous-titre, présentation, repères en dur dans le HTML, manifeste secondaire « Comprendre. Sécuriser. Créer de la valeur. »
- Introduction grecque « ΑΠΟ ΤΗ ΛΟΓΙΣΤΙΚΗ ΣΤΗΝ ΑΠΟΦΑΣΗ » : uniquement sur le H1, environ 0,9 s, une fois par session, rejouée au changement de langue, jamais bloquante, texte final présent dans le HTML, désactivée avec prefers-reduced-motion.
- Trois univers en panneaux dans la page (Comptabilité, Finance, Samir), ancres partageables #cpt #fin #hum et alias #comptabilite #finance #samir, sans rechargement.
- Dashboards par univers en HTML/SVG natifs : bandeau de clôture J+1 → J+8, avant/après trésorerie sans axe chiffré, budget vs réalisé étiqueté « Démonstration avec données fictives », frise en huit jalons.
- Section « Ce que mon CV ne montre pas » : quatre études de cas au format en sept points, filtrées par univers, résultats en formulations prudentes.
- Section « L'essentiel en 60 secondes ».
- Chronologie 2010 → aujourd'hui avec la période 2022-2023 en jalon assumé et l'horizon ITAA.
- Sections Progression et Contact, liste complète des CV par famille.
- Recommandation des CV par univers et par langue via data/cv-manifest.js, jamais plus de trois options visibles.
- Bascule FR/EN complète sur index.html (content/en.js), choix mémorisé, attribut lang mis à jour.
- Source unique de vérité data/profile.js avec double formulation des résultats et statuts de validation.
- Impression : bouton « Imprimer le portfolio », version sobre avec les trois univers, résultats, études en format court, chronologie, adresses des CV en toutes lettres.
- Accessibilité : skip link, focus visible, états textuels, aria-selected et aria-pressed, cibles tactiles, reduced motion respecté partout.

### Modifié
- parcours.html : identité alignée, BPMN de clôture en premier avec la phrase d'introduction validée, BPMN du parcours en second.
- Événement final du parcours : « Vers la certification ITAA (moyen terme) » remplace « Objectif : CDI ».
- Intitulé EPHEC partout : « Bachelier en comptabilité, orientation fiscalité, en cours de finalisation ».
- Formulations prudentes verrouillées : SAP FI en formation Key User, clôtures mensuelles et annuelles, TVA en régularisation proactive, anglais intermédiaire professionnel, 2015-2017 en missions fiscales en cabinet, coordination pour Marbre El Yamani, encadrement de quatre collaborateurs limité au poste actuel, « deux entités » sans le mot consolidation.
- Le seul intitulé rattaché au nom est « Coordinateur financier et administratif » ; tous les autres portent la mention « Angle de candidature ».
- Figcaption du BPMN de clôture sans chiffre (statut « à documenter »).

### Retiré
- Intro plein écran, portes, particules, parallaxe souris, esthétique gaming.
- Chart.js, radar d'auto-évaluation, jauges, compteurs partant de zéro.
- Photos générées par IA (à supprimer aussi du dépôt : photo.jpg, photo-cpt.jpg, photo-fin.jpg, photo-hum.jpg).
- Mention « 0 redressement », « consolidées », « Key User » seul, « clôtures trimestrielles » en compétence générale.
- CV archivés : Un Comptable(2), Senior Financial Analyst(2).

## Contrôles étape 6, à cocher après mise en ligne

- [ ] Les dossiers data, content, assets sont bien à la racine du dépôt avec leur contenu.
- [ ] Les 8 CV restants sont renommés et déplacés dans assets/cv/ selon la table du README.
- [ ] Les 9 liens de téléchargement fonctionnent (aucun 404), y compris depuis « Tous les CV ciblés ».
- [ ] Les photos IA et les deux CV archivés sont supprimés du dépôt.
- [ ] Le changement d'univers fonctionne depuis la barre et depuis les panneaux, et les ancres #cpt #fin #hum #comptabilite #finance #samir ouvrent le bon angle.
- [ ] La bascule FR/EN traduit le hero, les univers, les études de cas, la chronologie et le contact, et le choix survit au rechargement.
- [ ] L'introduction grecque joue une fois par session, dure moins de 1,2 s, et n'apparaît pas avec les animations réduites.
- [ ] Sur mobile : colonne unique, chronologie verticale, intitulés complets, boutons utilisables au pouce.
- [ ] Navigation complète au clavier, focus visible, skip link fonctionnel.
- [ ] Impression : version sobre, sans navigation ni dashboards, avec les adresses des CV lisibles.
- [ ] Site complet avec JavaScript désactivé (français, univers Comptabilité).
- [ ] Aucune donnée confidentielle d'employeur nulle part.
- [ ] Aucun chiffre non documenté affiché (pas de 60→2, −30 %, −10 % à l'écran).
- [ ] Vitesse correcte sur connexion lente (page principale hors polices sous 100 Ko).

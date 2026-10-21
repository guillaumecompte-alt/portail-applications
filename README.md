# Le Hub — portail d'applications

Portail statique en HTML/CSS/JavaScript, prêt à être publié sur Cloudflare Pages. Il ne modifie pas les applications existantes : il fournit un point d'entrée public vers leurs URL.

## Applications déjà renseignées

- Cross du collège — `https://crosscollege.outilotheque.fr/`
- Relatifs pour tous — `https://relatifs.outilotheque.fr/`
- Atelier QR — `https://qrcode.outilotheque.fr/`
- Plan de classe — `https://plan-de-classe.outilotheque.fr/`
- Multiflip — `https://multiflip.outilotheque.fr/`
- Enregistreur d’écran — `https://enregistreurecran.outilotheque.fr/`
- Verbes irréguliers anglais — `https://verbes.outilotheque.fr/`
- Le compte est bon — `https://compteestbon.guillaume-compte.workers.dev/`

Les liens publics du catalogue utilisent maintenant le domaine `outilotheque.fr` et ses sous-domaines, associés aux Workers Cloudflare correspondants. Les adresses `workers.dev` restent disponibles comme adresses techniques d'origine.

## Ajouter une application

Ouvrir `apps.js`, puis ajouter un objet au tableau `window.PORTAL_APPS` :

```js
{
  id: "mon-outil",
  name: "Nom de l'application",
  description: "Une courte description claire.",
  url: "https://mon-outil.example.workers.dev/",
  category: "Productivité",
  icon: "default",
  accent: "#9586ff"
}
```

Catégories prises en charge par les filtres : `Éducation`, `Productivité`, `Création`. Une autre catégorie reste visible dans la grille, mais n'apparaît pas dans les filtres tant que le bouton correspondant n'est pas ajouté dans `index.html`.

Icônes prévues : `trophy`, `calculator`, `qr`, `seats`, `record`, `book`, `default`.

## Déployer avec Cloudflare Pages et GitHub

1. Créer un nouveau dépôt GitHub, par exemple `portail-applications`.
2. Ajouter à la racine du dépôt les fichiers `index.html`, `styles.css`, `apps.js`, `app.js` et `README.md`.
3. Dans Cloudflare Dashboard, ouvrir **Workers & Pages** puis créer une application Pages connectée au dépôt GitHub.
4. Choisir le framework **None** (ou « Aucun »), laisser la commande de build vide et définir le répertoire de sortie sur `/` (racine du dépôt).
5. Lancer le déploiement. Cloudflare fournira une URL `*.pages.dev`.

Le portail est public : les URL des applications ajoutées au catalogue seront visibles par tout visiteur. N'y ajoutez pas de secrets, de jetons ou de liens censés rester privés.

## À propos des URL

Les quatre URL fournies utilisent `workers.dev`, domaine des déploiements Cloudflare Workers. Le choix initial mentionnait `pages.dev`; ce projet utilise pour l'instant les URL réelles que tu as communiquées. Si tu veux uniquement des URL `pages.dev`, il faudra d'abord confirmer que chaque application est aussi déployée via Cloudflare Pages.

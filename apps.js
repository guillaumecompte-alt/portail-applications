/*
 * Catalogue du portail.
 * Pour ajouter une application, duplique un objet et renseigne :
 * id, name, description, url, category, icon, accent.
 *
 * Catégories utilisées par les filtres : Éducation, Productivité, Création.
 * Les URL ci-dessous sont les adresses Workers des applications déployées.
 */
window.PORTAL_APPS = [
  {
    id: "crosscollege",
    name: "Cross du collège",
    description: "Prépare les listes d'élèves, organise les dossards et génère les documents PDF pour le cross.",
    url: "https://crosscollege.guillaume-compte.workers.dev/",
    category: "Éducation",
    icon: "trophy",
    accent: "#f4b45f"
  },
  {
    id: "relatifs",
    name: "Relatifs pour tous",
    description: "Entraîne-toi en calcul avec des exercices d'addition, de soustraction, de multiplication et de division.",
    url: "https://relatifspourtous.guillaume-compte.workers.dev/",
    category: "Éducation",
    icon: "calculator",
    accent: "#67d9c3"
  },
  {
    id: "qrcode",
    name: "Atelier QR",
    description: "Crée des QR codes personnalisés, ajoute un style ou un logo et prépare des planches à imprimer.",
    url: "https://qrcode.guillaume-compte.workers.dev/",
    category: "Création",
    icon: "qr",
    accent: "#a89bff"
  },
  {
    id: "plan-de-classe",
    name: "Plan de classe",
    description: "Importe une liste Excel puis place les élèves dans la classe par glisser-déposer.",
    url: "https://plan-de-classe.guillaume-compte.workers.dev/",
    category: "Productivité",
    icon: "seats",
    accent: "#78b7ff"
  },
  {
    id: "multiflip",
    name: "Multiflip",
    description: "Révise les tables de 3 à 9 avec des cartes interactives : multiplications, facteur manquant et décompositions.",
    url: "https://multiflip.guillaume-compte.workers.dev/",
    category: "Éducation",
    icon: "calculator",
    accent: "#a89bff"
  }
];

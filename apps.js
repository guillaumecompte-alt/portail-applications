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
    id: "frise-chronologique",
    name: "Frise chronologique",
    description: "Crée des frises chronologiques personnalisées avec périodes colorées, événements illustrés et temps condensés, puis exporte-les en PNG ou SVG.",
    url: "https://frisechronologique.guillaume-compte.workers.dev/",
    category: "Création",
    icon: "default",
    accent: "#e7a0a7"
  },
  {
    id: "crosscollege",
    name: "Cross du collège",
    description: "Prépare les listes d'élèves, organise les dossards et génère les documents PDF pour le cross.",
    url: "https://crosscollege.outilotheque.fr/",
    category: "Éducation",
    icon: "trophy",
    accent: "#f4b45f"
  },
  {
    id: "relatifs",
    name: "Relatifs pour tous",
    description: "Entraîne-toi en calcul avec des exercices d'addition, de soustraction, de multiplication et de division.",
    url: "https://relatifs.outilotheque.fr/",
    category: "Éducation",
    icon: "calculator",
    accent: "#67d9c3"
  },
  {
    id: "qrcode",
    name: "Atelier QR",
    description: "Crée des QR codes personnalisés, ajoute un style ou un logo et prépare des planches à imprimer.",
    url: "https://qrcode.outilotheque.fr/",
    category: "Création",
    icon: "qr",
    accent: "#a89bff"
  },
  {
    id: "plan-de-classe",
    name: "Plan de classe",
    description: "Importe une liste Excel puis place les élèves dans la classe par glisser-déposer.",
    url: "https://plan-de-classe.outilotheque.fr/",
    category: "Productivité",
    icon: "seats",
    accent: "#78b7ff"
  },
  {
    id: "multiflip",
    name: "Multiflip",
    description: "Révise les tables de 3 à 9 avec des cartes interactives : multiplications, facteur manquant et décompositions.",
    url: "https://multiflip.outilotheque.fr/",
    category: "Éducation",
    icon: "calculator",
    accent: "#a89bff"
  },
  {
    id: "enregistreur-ecran",
    name: "Enregistreur d’écran",
    description: "Enregistre ton écran et le son, recadre la vidéo puis télécharge le résultat en MP4 ou WebM selon le navigateur.",
    url: "https://enregistreurecran.outilotheque.fr/",
    category: "Productivité",
    icon: "record",
    accent: "#ff777f"
  },
  {
    id: "verbes-irreguliers-anglais",
    name: "Verbes irréguliers anglais",
    description: "Entraîne-toi à mémoriser les verbes irréguliers anglais avec ton application de révision interactive.",
    url: "https://verbes.outilotheque.fr/",
    category: "Éducation",
    icon: "book",
    accent: "#79c7ff"
  },
  {
    id: "compte-est-bon",
    name: "Le compte est bon",
    description: "Entraîne-toi au calcul mental en trouvant les opérations qui permettent d’atteindre le nombre cible.",
    url: "https://compteestbon.outilotheque.fr/",
    category: "Éducation",
    icon: "calculator",
    accent: "#ffbd73"
  }
];

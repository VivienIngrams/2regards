type ProductDataType = {
  title: string;
  id: string;
  width?: number;
  position?: string;
  url: string;
  description?: string;
  videoLink?: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
    image4?: string;
    image5?: string;
    image6?: string;
    image7?: string;
  };
};
type GalleryDataType = {
  title: string;
  id: string;

  url: string;
  subtitle: string;
  description: string;
  videoLink?: string;
  images: {
    image1: { url: string; position?: string; width?: number; };
    image2: { url: string; position?: string; width?: number; };
    image3: { url: string; position?: string; width?: number; };
    image4?: { url: string; position?: string; width?: number; };
    image5?: { url: string; position?: string; width?: number; };
  };
};

export const productData: ProductDataType[] = [
  // Product 1
  {
    title: "Aleanze Design",
    id: "aleanze",
    width: 300,
    position: "top-1/4 left-0",
    url: "/product/aleanze",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/products/Aleanze/aleanze (1).jpg",
      image2: "/images/products/Aleanze/aleanze (2).jpg",
      image3: "/images/products/Aleanze/aleanze (3).jpg",
      image4: "/images/products/Aleanze/aleanze (4).jpg",
    },
  },
  // Product 2
  {
    title: "Compagnie du Veilleur",
    id: "veilleur",
    width: 400,
    position: "bottom-0 left-50",
    url: "/product/veilleur",
    videoLink: "",
    images: {
      image1: "/images/products/Veilleur/veilleur (1).jpg",
      image2: "/images/products/Veilleur/veilleur (2).jpg",
      image3: "/images/products/Veilleur/veilleur (3).jpg",
      image4: "/images/products/Veilleur/veilleur (4).jpg",
    },
  },
  // Product 3
  {
    title: "Hiima",
    id: "hiima",
    width: 350,
    url: "/product/hiima",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: "/images/products/Hiima/hiima (1).jpg",
      image2: "/images/products/Hiima/hiima (2).jpg",
      image3: "/images/products/Hiima/hiima (3).jpg",
      image4: "/images/products/Hiima/hiima (4).jpg",
      image5: "/images/products/Hiima/hiima (5).jpg",
      image6: "/images/products/Hiima/hiima (6).jpg",
    },
  },

  // Product 4
  {
    title: "Paperflow",
    id: "paperflow",
    width: 500,
    url: "/product/paperflow",
    videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
    images: {
      image1: "/images/products/Paperflow/paperflow (1).jpg",
      image2: "/images/products/Paperflow/paperflow (2).jpg",
      image3: "/images/products/Paperflow/paperflow (3).jpg",
      image4: "/images/products/Paperflow/paperflow (4).jpg",
      image5: "/images/products/Paperflow/paperflow (5).jpg",
      image6: "/images/products/Paperflow/paperflow (6).jpg",
      image7: "/images/products/Paperflow/paperflow (7).jpg",
    },
  },

  // Product 5
  {
    title: "Packshot",
    id: "packshot",
    width: 320,
    url: "/product/packshot",
    description:
      "Description for Product 5. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Packshot/packshot (1).png",
      image2: "/images/products/Packshot/packshot (2).jpg",
      image3: "/images/products/Packshot/packshot (3).jpg",
      image4: "/images/products/Packshot/packshot (4).jpg",
      image5: "/images/products/Packshot/packshot (5).jpg",
      image6: "/images/products/Packshot/packshot (6).jpg",
      image7: "/images/products/Packshot/packshot (7).png",
    },
  },

  // Product 6
  {
    title: "becafire",
    id: "becafire",
    width: 450,
    url: "/product/becafire",
    description:
      "Description for Product 6. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire/becafire (1).jpg",
      image2: "/images/products/Becafire/becafire (2).jpg",
      image3: "/images/products/Becafire/becafire (3).jpg",
      image4: "/images/products/Becafire/becafire (4).jpg",
      image5: "/images/products/Becafire/becafire (5).jpg",
    },
  },

  // Product 7
  {
    title: "TAKANAP",
    id: "takanap",
    width: 380,
    url: "/product/takanap",
    description:
      "Description for Product 7. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=roFW8j9nju8",
    images: {
      image1: "/images/products/TAKANAP/takanap (1).jpg",
      image2: "/images/products/TAKANAP/takanap (2).jpg",
      image3: "/images/products/TAKANAP/takanap (3).jpg",
      image4: "/images/products/TAKANAP/takanap (4).jpg",
      image5: "/images/products/TAKANAP/takanap (5).jpg",
      image6: "/images/products/TAKANAP/takanap (6).jpg",
      image7: "/images/products/TAKANAP/takanap (7).jpg",
    },
  },

  // Product 8
  {
    title: "Vawo",
    id: "vawo",
    width: 420,
    url: "/product/vawo",
    description:
      "Description for Product 8. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Vawo/vawo (1).jpg",
      image2: "/images/products/Vawo/vawo (2).jpg",
      image3: "/images/products/Vawo/vawo (3).jpg",
      image4: "/images/products/Vawo/vawo (4).jpg",
      image5: "/images/products/Vawo/vawo (5).jpg",
      image6: "/images/products/Vawo/vawo (6).jpg",
      image7: "/images/products/Vawo/vawo (7).jpg",
    },
  },

  // Product 9
  {
    title: "Ensemble",
    id: "ensemble",
    width: 400,
    position: "bottom-0 -left-100",
    url: "/product/ensemble",
    images: {
      image1: "/images/products/Ensemble/ensemble (1).jpg",
      image2: "/images/products/Ensemble/ensemble (2).jpg",
      image3: "/images/products/Ensemble/ensemble (3).jpg",
      image4: "/images/products/Ensemble/ensemble (4).jpg",
      image5: "/images/products/Ensemble/ensemble (5).jpg",
      image6: "/images/products/Ensemble/ensemble (6).jpg",
      image7: "/images/products/Ensemble/ensemble (7).jpg",
    },
  },

  // Product 10
  {
    title: "Meet",
    id: "meet",
    width: 350,
    url: "/product/meet",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: "/images/products/Meet/meet (1).jpg",
      image2: "/images/products/Meet/meet (2).jpg",
      image3: "/images/products/Meet/meet (3).jpg",
      image4: "/images/products/Meet/meet (4).jpg",
      image5: "/images/products/Meet/meet (5).jpg",
    },
  },

  // Product 11
  {
    title: "Miquelon",
    id: "miquelon",
    width: 500,
    url: "/product/miquelon",
    description:
      "Description for Product 11. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
    images: {
      image1: "/images/products/Miquelon/miquelon (1).jpg",
      image2: "/images/products/Miquelon/miquelon (2).jpg",
      image3: "/images/products/Miquelon/miquelon (3).jpg",
      image4: "/images/products/Miquelon/miquelon (4).jpg",
      image5: "/images/products/Miquelon/miquelon (5).jpg",
      image6: "/images/products/Miquelon/miquelon (6).jpg",
      image7: "/images/products/Miquelon/miquelon (7).jpg",
    },
  },

  // Product 12
  {
    title: "Plaid",
    id: "plaid",
    width: 320,
    url: "/product/plaid",
    description:
      "Description for Product 12. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Plaid/plaid (1).jpg",
      image2: "/images/products/Plaid/plaid (2).jpg",
      image3: "/images/products/Plaid/plaid (3).jpg",
      image4: "/images/products/Plaid/plaid (4).jpg",
      image5: "/images/products/Plaid/plaid (5).jpg",
      image6: "/images/products/Plaid/plaid (6).jpg",
      image7: "/images/products/Plaid/plaid (7).jpg",
    },
  },

  // Product 13
  {
    title: "Product",
    id: "product",
    width: 450,
    url: "/product/product",
    description:
      "Description for Product 13. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Product/product (1).jpg",
      image2: "/images/products/Product/product (2).jpg",
      image3: "/images/products/Product/product (3).jpg",
      image4: "/images/products/Product/product (4).jpg",
      image5: "/images/products/Product/product (5).jpg",
      image6: "/images/products/Product/product (6).jpg",
      image7: "/images/products/Product/product (7).jpg",
    },
  },

  // Product 14
  {
    title: "CIF",
    id: "cif",
    width: 380,
    url: "/product/cif",
    description:
      "Description for Product 14. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=roFW8j9nju8",
    images: {
      image1: "/images/products/CIF/cif (1).jpg",
      image2: "/images/products/CIF/cif (2).jpg",
      image3: "/images/products/CIF/cif (3).jpg",
      image4: "/images/products/CIF/cif (4).jpg",
      image5: "/images/products/CIF/cif (5).jpg",
      image6: "/images/products/CIF/cif (6).jpg",
    },
  },

  // Product 15
  {
    title: "Zoo Gaia",
    id: "zoo",
    width: 420,
    url: "/product/zoo",
    description:
      "Description for Product 15. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Zoo/Zoo (1).jpg",
      image2: "/images/products/Zoo/Zoo (2).jpg",
      image3: "/images/products/Zoo/Zoo (3).jpg",

    },
  },

  // Product 16
  {
    title: "Design",
    id: "design",
    width: 480,
    url: "/product/design",
    description:
      "Description for Product 16. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Design/design (1).png",
      image2: "/images/products/Design/design (2).png",
      image3: "/images/products/Design/design (3).png",
      image4: "/images/products/Design/design (4).png",
      image5: "/images/products/Design/design (5).png",
      image6: "/images/products/Design/design (6).png",
    },
  },
];

export const galleryData: GalleryDataType[] = [
  {
    title: "Desert",
    id: "desert",
    url: "/gallery/desert",
    subtitle: "Ayala Braidman",
    description:
      "The exhibition Desert unveils the culmination of Ayala Braidman's year-long journey from her homeland to Portugal. Crafted during this transformative period, the artworks draw inspiration from the desert landscapes of her childhood, distinct from Porto's environment. The textures and color palette mirror the dry terrain, capturing its essence. For Braidman, the desert signifies a fusion of personal experiences and a universal theme—a space inviting inner exploration and spiritual enlightenment. This exhibition marks Braidman’s debut solo show in Portugal. Ayala Braidman (b. 1992, Israel) is a designer and artist, currently residing and working in Porto.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/AyalaBraidman/desert (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/AyalaBraidman/desert (3).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/AyalaBraidman/desert (2).jpg", position: "bottom-0", width: 400 },
      image4: { url: "/images/gallery/AyalaBraidman/desert (4).jpg", position: "", width: 400 }
    },
  },
  {
    title: "Sentiment océanique",
    id: "sentiment_oceanique",
    url: "/gallery/sentiment_oceanique",
    subtitle: "Mathilde Cudeville & Paulo Bastos",
    description:
      "The transformation of the oceans in the face of climate change and the collapse of biodiversity poses a real challenge, both for taking action and for becoming aware of a sometimes elusive process. This series aims to question the future of the oceans while introspectively reflecting on oneself. As we contemplate the sea, ever-ambiguous with its passages, uncertainties, reliefs, rumblings, aims, and transformations, a unique and challenging-to-describe feeling overwhelms me. According to Romain Rolland, a French writer, it could be described as an 'oceanic feeling.' An emotion close to ecstasy that allows one to identify with the system in its vastness in order to feel the whole.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/MathildePaulo/sentiment_oceanique (6).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/MathildePaulo/sentiment_oceanique (3).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/MathildePaulo/sentiment_oceanique (4).jpg", position: "", width: 400 },
      image4: { url: "/images/gallery/MathildePaulo/sentiment_oceanique (5).jpg", position: "", width: 400 },
      image5: { url: "/images/gallery/MathildePaulo/sentiment_oceanique (1).jpg", position: "", width: 400 },
    },
  },
  {
    title: "Marcia Luças",
    id: "marcia_lucas",
    url: "/gallery/marcia_lucas",
    subtitle: "Marcia Luças",
    description:
      "Inspired by this citation “Se eu vir aquela árvore como toda a gente vê, Não tenho nada a dizer sobre aquela árvore” If I see that tree as everyone else sees it, I have nothing to say about that tree. Excerpt from If I see that tree as everyone else sees it, I have nothing to say about that tree. I did not see that tree. It is when the tree triggers in me a connected series of emotions that I see it differently and justly. And to the extent that these ideas and emotions are acceptable to everyone, not just individual, the tree will be THE Tree.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/MarciaLucas/marcia_lucas (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/MarciaLucas/marcia_lucas (2).jpg", position: "", width: 500 },
      image3: { url: "/images/gallery/MarciaLucas/marcia_lucas (3).jpg", position: "-bottom-18 -right-24 z-100", width: 600 },
    },
  },
  {
    title: "Pedome",
    id: "pedome",
    url: "/gallery/pedome",
    subtitle: "Mariana Baldaia",
    description:
      "Pedome is an exhibition featuring works that Mariana Baldaia created during the times of the pandemic, intertwined with motherhood.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/MarianaBaldaia/pedome (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/MarianaBaldaia/pedome (2).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/MarianaBaldaia/pedome (3).jpg", position: "", width: 400 },
      image4: { url: "/images/gallery/MarianaBaldaia/pedome (4).jpg", position: "", width: 400 },
      image5: { url: "/images/gallery/MarianaBaldaia/pedome (5).jpg", position: "", width: 400 },
    },
  },
  {
    title: "Diversidade",
    id: "diversidade",
    url: "/gallery/diversidade",
    subtitle: "Inês Sousa Cardoso",
    description:
      "All the personal work of @ines.sousacardoso.peres has always embraced diversity, the culture of ancestral peoples, and their symbolism. A constantly evolving line where the geometric and the organic merge. In this exhibition, some of her masks will be presented in different mediums and forms such as wood, paper, canvas, ceramics, earrings, lamps... a glimpse into her inner world and what she loves to do the most.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/InêsSousaCardoso/diversidade (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/InêsSousaCardoso/diversidade (2).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/InêsSousaCardoso/diversidade (3).jpg", position: "", width: 400 },
      image4: { url: "/images/gallery/InêsSousaCardoso/diversidade (4).jpg", position: "", width: 400 },
      image5: { url: "/images/gallery/InêsSousaCardoso/diversidade (5).jpg", position: "", width: 400 },
    },
  },
  {
    title: "Me: ander(ing)",
    id: "me_andering",
    url: "/gallery/me_andering",
    subtitle: "Nettie Burnett",
    description:
      "The exhibition « me: ander(ing) is a retrospective of Nettie Burnett’s artwork, Meandering, Like a river- through Life. Picking up random ideas and objects to create visual artifice.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/NettieBurnett/me_ander (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/NettieBurnett/me_ander (2).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/NettieBurnett/me_ander (3).jpg", position: "", width: 400 },
      image4: { url: "/images/gallery/NettieBurnett/me_ander (4).jpg", position: "", width: 400 },
      image5: { url: "/images/gallery/NettieBurnett/me_ander (5).jpg", position: "", width: 400 },
    },
  },
  {
    title: "Pizzicato",
    id: "pizzicato",
    url: "/gallery/pizzicato",
    subtitle: "Pierre Linz",
    description:
      "In the captivating world of contemporary art, it is rare to encounter an artist whose vitality and passion seem boundless. We embark to discover Pierre Linz, a truly unique plastic artist who, at the age of 80, still overflows with energy. Through his remarkable journey and boundless creativity, he offers us a living testimony of the paper/cardboard expression that transcends time. The encounter with Pierre Linz proves to us that art knows no age and that life can be a canvas in constant evolution.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/gallery/PierreLinz/pizzicato (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/PierreLinz/pizzicato (2).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/PierreLinz/pizzicato (3).jpg", position: "", width: 400 },
      image4: { url: "/images/gallery/PierreLinz/pizzicato (4).jpg", position: "", width: 400 },
      image5: { url: "/images/gallery/PierreLinz/pizzicato (5).jpg", position: "", width: 400 },
    },
  },
  {
    title: "La Passagère",
    id: "la_passagere",
    url: "/gallery/la_passagere",
    subtitle: "Mathilde Cudeville & Pauline Letang",
    description:
      " It was on May 28th of 2022 in a Parisian café… A meeting between two women. A meeting between photography and poetry, between Porto and Paris. Then, from this moment of grace, out of time, between dream and reality, was born the desire to realize a common work. I feel a need, a crazy urgency to free myself from pretense and shackles, to awaken sleeping parts of my being, to seize this vertiginous freedom of Being fully, to re-discover my soul. « La Passagère » is the artistic, photographic and poetic expression of this journey towards the soul, this primordial Breath, this initial Desire, this intimate feeling of an authentic uniqueness and a possible unity.",
    images: {
      image1: { url: "/images/gallery/MathildePauline/la_passagère (1).jpg", position: "", width: 400 },
      image2: { url: "/images/gallery/MathildePauline/la_passagère (2).jpg", position: "", width: 400 },
      image3: { url: "/images/gallery/MathildePauline/la_passagère (3).jpg", position: "", width: 400 },
      image4: { url: "/images/gallery/MathildePauline/la_passagère (4).jpg", position: "", width: 400 },
      image5: { url: "/images/gallery/MathildePauline/la_passagère (5).jpg", position: "", width: 400 },
    },
  },
];


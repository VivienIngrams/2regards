type ProductDataType = {
  title: string;
  id: string;
  url: string;
  videoLink?: string;
  images: {
    image1: { url: string; position: string };
    image2: { url: string; position: string };
    image3?: { url: string; position: string };
    image4?: { url: string; position: string };
    image5?: { url: string; position: string };
    image6?: { url: string; position: string };
    image7?: { url: string; position: string };
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
  {
    title: "Product",
    id: "product",
    url: "/product/product",
    images: {
      image1: { url: "/images/products/Product/products (3).jpg", position: "top-[20vh] left-0 w-[300px] h-[300px] md:w-[380px]" },
      image2: { url: "/images/products/Product/products (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Product/products (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Product/products (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "Aleanze Design",
    id: "aleanze",
    url: "/product/aleanze",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: { url: "/images/products/Aleanze/aleanze (2).jpg", position: "md:-left-[10vw] top-[40vh] h-[300px] w-[400px] " },
      image2: { url: "/images/products/Aleanze/aleanze (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Aleanze/aleanze (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "CIF",
    id: "cif",
    url: "/product/cif",
    images: {
      image1: { url: "/images/products/CIF/cif (5).jpg", position: " top-0 left-[5vw] md:-left-[4vw] h-[270px] w-[350px] md:w-[500px]" },
      image2: { url: "/images/products/CIF/cif (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/CIF/cif (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/CIF/cif (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/CIF/cif (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image6: { url: "/images/products/CIF/cif (6).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },

  
  {
    title: "Packshot",
    id: "packshot",
    url: "/product/packshot",
    images: {
      image1: { url: "/images/products/Packshot/packshot (5).jpg", position: "top-[35vh] md:top-[43vh] left-0 h-[350px] w-[280px]" },
      image2: { url: "/images/products/Packshot/packshot (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Packshot/packshot (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Packshot/packshot (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/Packshot/packshot (1).png", position: "top-0 left-0 h-[400px] w-[300px]" },
      image6: { url: "/images/products/Packshot/packshot (6).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
 
    
  {
    title: "Meet",
    id: "meet",
    url: "/product/meet",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: { url: "/images/products/Meet/meet (1).jpg", position: "top-[2vh] md:-left-[10vw] h-[550px] w-[330px] md:h-[640px] md:w-[400px]" },
      image2: { url: "/images/products/Meet/meet (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Meet/meet (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Meet/meet (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/Meet/meet (5).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "Paperflow",
    id: "paperflow",
    url: "/product/paperflow",
    videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
    images: {
      image1: { url: "/images/products/Paperflow/paperflow (1).jpg", position: "top-[30vh] md:-left-[10vw] h-[280px] w-[400px] md:h-[340px] md:w-[580px]" },
      image2: { url: "/images/products/Paperflow/paperflow (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Paperflow/paperflow (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "zoo",
    id: "zoo",
    url: "/product/zoo",
    images: {
      image1: { url: "/images/products/zoo/zoo (1).jpg", position: "top-0 left-0 h-[400px] w-[260px] md:h-[500px] md:w-[320px]" },
      image2: { url: "/images/products/zoo/zoo (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/zoo/zoo (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
 
  {
    title: "Design",
    id: "design",
    url: "/product/design",
    images: {
      image1: { url: "/images/products/Design/design (1).png", position: "top-[42vh] -left-[6vw] h-[250px] w-[420px] md:h-[340px] md:w-[550px]" },
      image2: { url: "/images/products/Design/design (2).png", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Design/design (3).png", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Design/design (4).png", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/Design/design (5).png", position: "top-0 left-0 h-[400px] w-[300px]" },
      image6: { url: "/images/products/Design/design (6).png", position: "top-0 left-0 h-[400px] w-[300px]" },
      image7: { url: "/images/products/Design/design (7).png", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "Compagnie du Veilleur",
    id: "veilleur",
    url: "/product/veilleur",
    images: {
      image1: { url: "/images/products/Veilleur/veilleur (1).jpg", position: "top-[10vh] left-[8vw] md:left-0 h-[400px] w-[250px] md:h-[510px] md:w-[340px]" },
      image2: { url: "/images/products/Veilleur/veilleur (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },


  {
    title: "becafire",
    id: "becafire",
    url: "/product/becafire",
    images: {
      image1: { url: "/images/products/Becafire/becafire (3).jpg", position: "top-0 left-0 h-[500px] w-[450px]" },
      image2: { url: "/images/products/Becafire/becafire (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Becafire/becafire (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Becafire/becafire (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/Becafire/becafire (5).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  // Product 7
  {
    title: "TAKANAP",
    id: "takanap",
    url: "/product/takanap",
    videoLink: "https://www.youtube.com/watch?v=roFW8j9nju8",
    images: {
      image1: { url: "/images/products/Takanap/takanap (1).jpg", position: "top-0 left-0 h-[400px] w-[400px]" },
      image2: { url: "/images/products/Takanap/takanap (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Takanap/takanap (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "Vawo",
    id: "vawo",
    url: "/product/vawo",
    images: {
      image1: { url: "/images/products/Vawo/vawo (2).jpg", position: "top-0 left-0 h-[510px] w-[340px]" },
      image2: { url: "/images/products/Vawo/vawo (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Vawo/vawo (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Vawo/vawo (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },

  {
    title: "Hiima",
    id: "hiima",
    url: "/product/hiima",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: { url: "/images/products/Hiima/hiima (2).jpg", position: "bottom-0 h-[500px] w-[340px]" },
      image2: { url: "/images/products/Hiima/hiima (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Hiima/hiima (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Hiima/hiima (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/Hiima/hiima (5).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image6: { url: "/images/products/Hiima/hiima (6).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },
  {
    title: "White",
    id: "white",
    url: "/product/white",
    images: {
      image1: { url: "/images/products/White/white (6).jpg", position: "top-0 left-0 h-[360px] w-[510px]" },
      image2: { url: "/images/products/White/white (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/White/white (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/White/white (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image5: { url: "/images/products/White/white (5).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image6: { url: "/images/products/White/white (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
    },
  },

  // {
  //   title: "Miquelon",
  //   id: "miquelon",
  //   url: "/product/miquelon",
  //   videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
  //   images: {
  //     image1: { url: "/images/products/Miquelon/miquelon (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //     image2: { url: "/images/products/Miquelon/miquelon (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //     image3: { url: "/images/products/Miquelon/miquelon (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //     image4: { url: "/images/products/Miquelon/miquelon (4).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //     image5: { url: "/images/products/Miquelon/miquelon (5).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //     image6: { url: "/images/products/Miquelon/miquelon (6).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //     image7: { url: "/images/products/Miquelon/miquelon (7).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
  //   },
  // },
  {
    title: "Plaid",
    id: "plaid",
    url: "/product/plaid",
    images: {
      image1: { url: "/images/products/Plaid/plaid (1).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image2: { url: "/images/products/Plaid/plaid (2).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image3: { url: "/images/products/Plaid/plaid (3).jpg", position: "top-0 left-0 h-[400px] w-[300px]" },
      image4: { url: "/images/products/Plaid/plaid (4).jpg", position: "top-0 left-0 h-[400px] w-[400px]" },
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


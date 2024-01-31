type ProductDataType = {
  title: string;
  id: string;
  width?: number;
  position?: string;
   url: string;
  subtitle: string;
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
  width?: number;
  position?: string;
   url: string;
  subtitle: string;
  description: string;
  videoLink: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
};
export const productData: ProductDataType[] = [
  // Product 1
  {
    title: "Aleanze Design",
    id: "1",
    width: 300,
    position: "top-1/4 left-0",
    url: "/product/aleanze",
    subtitle: "Subtitle 1",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/studio/AnalogLab.jpg",
      image2: "/images/products/Paulo.jpg",
      image3: "/images/products/Portfolio.jpg",
      image4: "/images/products/Product.jpg",
   
    },
  },
  // Product 2
  {
    title: "Compagnie du Veilleur",
    id: "2",
    width: 400,
    position: "bottom-0 left-50",
    url: "/product/veilleur",
    subtitle: "Subtitle 2",
    images: {
      image1: "/images/products/Portfolio.jpg",
      image3: "/images/studio/AnalogLab.jpg",
      image2: "/images/products/Paulo.jpg",
      image4: "/images/products/Product.jpg",
      
    },
  },
  // Product 3
  {
    title: "Hiima",
    id: "3",
    width: 350,

    url: "/product/hiima",
    subtitle: "Subtitle 3",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: "/images/products/Product.jpg",
      image4: "/images/studio/AnalogLab.jpg",
      image2: "/images/products/Paulo.jpg",
      image3: "/images/products/Portfolio.jpg",
      image5: "/images/products/Becafire (6).png",
      image6: "/images/products/Becafire (9).png",
      image7: "/images/products/Becafire (10).png",
    },
  },
  // Product 4
  {
    title: "Paperflow",
    id: "4",
    width: 500,
 
    url: "/product/paperflow",
    subtitle: "Subtitle 4",
    description:
      "Description for Product 4. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
    images: {
      image1: "/images/studio/AnalogLab.jpg",
      image2: "/images/products/Paulo.jpg",
      image3: "/images/products/Portfolio.jpg",
      image4: "/images/products/Product.jpg",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
  // Product 5
  {
    title: "Packshot",
    id: "5",
    width: 320,

    url: "/product/packshot",
    subtitle: "Subtitle 5",
    description:
      "Description for Product 5. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire (8).png",
      image2: "/images/products/Becafire (9).png",
      image3: "/images/products/Becafire (10).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (6).png",
      image7: "/images/products/Becafire (7).png",
    },
  },
  // Product 6
  {
    title: "Products",
    id: "6",
    width: 450,
 
    url: "/product/products",
    subtitle: "Subtitle 6",
    description:
      "Description for Product 6. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire (6).png",
      image2: "/images/products/Becafire (7).png",
      image3: "/images/products/Becafire (8).png",
      image4: "/images/products/Becafire (9).png",
      image5: "/images/products/Becafire (10).png",
      image6: "/images/products/paperflow (2).png",
      image7: "/images/products/paperflow (3).png",
    },
  },
  // Product 7
  {
    title: "TAKANAP",
    id: "7",
    width: 380,

    url: "/product/7",
    subtitle: "Subtitle 7",
    description:
      "Description for Product 7. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=roFW8j9nju8",
    images: {
      image1: "/images/products/Becafire (9).png",
      image2: "/images/products/Becafire (10).png",
      image3: "/images/products/Becafire (6).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
  // Product 8
  {
    title: "Vawo",
    id: "8",
    width: 420,
    url: "/product/vawo",
    subtitle: "Subtitle 8",
    description:
      "Description for Product 8. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire (6).png",
      image2: "/images/products/Becafire (7).png",
      image3: "/images/products/Becafire (8).png",
      image4: "/images/products/Becafire (9).png",
      image5: "/images/products/Becafire (10).png",
      image6: "/images/products/paperflow (2).png",
      image7: "/images/products/paperflow (3).png",
    },
  },
  // Product 9
  {
    title: "Ensemble",
    id: "9",
    width: 400,
    position: "bottom-0 -left-100",
    url: "/product/ensemble",
    subtitle: "Subtitle 9",
    images: {
      image1: "/images/products/Becafire (8).png",
      image2: "/images/products/Becafire (9).png",
      image3: "/images/products/Becafire (10).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (6).png",
      image7: "/images/products/Becafire (7).png",
    },
  },
  // Product 10
  {
    title: "Meet",
    id: "10",
    width: 350,
    url: "/product/meet",
    subtitle: "Subtitle 10",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: "/images/products/Becafire (9).png",
      image2: "/images/products/Becafire (10).png",
      image3: "/images/products/paperflow (2).png",
      image4: "/images/products/paperflow (3).png",
      image5: "/images/products/Becafire (6).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
  // Product 11
  {
    title: "Miquelon",
    id: "11",
    width: 500,
    url: "/product/miquelon",
    subtitle: "Subtitle 11",
    description:
      "Description for Product 11. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
    images: {
      image1: "/images/products/Becafire (9).png",
      image2: "/images/products/Becafire (10).png",
      image3: "/images/products/Becafire (6).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
  // Product 12
  {
    title: "Plaid",
    id: "12",
    width: 320,
    url: "/product/plaid",
    subtitle: "Subtitle 12",
    description:
      "Description for Product 12. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire (8).png",
      image2: "/images/products/Becafire (9).png",
      image3: "/images/products/Becafire (10).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (6).png",
      image7: "/images/products/Becafire (7).png",
    },
  },
  // Product 13
  {
    title: "Product",
    id: "13",
    width: 450,
    url: "/product/product",
    subtitle: "Subtitle 13",
    description:
      "Description for Product 13. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire (6).png",
      image2: "/images/products/Becafire (7).png",
      image3: "/images/products/Becafire (8).png",
      image4: "/images/products/Becafire (9).png",
      image5: "/images/products/Becafire (10).png",
      image6: "/images/products/paperflow (2).png",
      image7: "/images/products/paperflow (3).png",
    },
  },
  // Product 14
  {
    title: "CIF",
    id: "cif",
    width: 380,
    url: "/product/cif",
    subtitle: "Subtitle 14",
    description:
      "Description for Product 14. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=roFW8j9nju8",
    images: {
      image1: "/images/products/Becafire (9).png",
      image2: "/images/products/Becafire (10).png",
      image3: "/images/products/Becafire (6).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
  // Product 15
  {
    title: "Zoo Gaia",
    id: "15",
    width: 420,
    url: "/product/zoo",
    subtitle: "Subtitle 15",
    description:
      "Description for Product 15. More text about the product. Even more text. You can add as many paragraphs as needed.",
    images: {
      image1: "/images/products/Becafire (9).png",
      image2: "/images/products/Becafire (10).png",
      image3: "/images/products/Becafire (6).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
  // Product 16
  {
    title: "Subtitle 16",
    id: "16",
    width: 480,
    url: "/product/16",
    subtitle: "Subtitle 16",
    description:
      "Description for Product 16. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=xyz123",
    images: {
      image1: "/images/products/Becafire (9).png",
      image2: "/images/products/Becafire (10).png",
      image3: "/images/products/Becafire (6).png",
      image4: "/images/products/paperflow (2).png",
      image5: "/images/products/paperflow (3).png",
      image6: "/images/products/Becafire (7).png",
      image7: "/images/products/Becafire (8).png",
    },
  },
];



export const galleryData: GalleryDataType[] = [
  {
    title: "Desert",
    id: "desert",
    width: 300,
    url: "/gallery/desert",
    subtitle: "Ayala Braidman",
    description:
      "The exhibition 'Desert' unveils the culmination of Ayala Braidman's year-long journey from her homeland to Portugal...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/AyalaBraidman/desert (1).jpg",
      image2: "/images/gallery/AyalaBraidman/desert (2).jpg",
      image3: "/images/gallery/AyalaBraidman/desert (3).jpg",
      image4: "/images/gallery/AyalaBraidman/desert (4).jpg",
     
    },
  },
  {
    title: "Sentiment océanique",
    id: "sentiment_oceanique",
    width: 300,
    url: "/gallery/sentiment_oceanique",
    subtitle: "Mathilde Cudeville & Paulo Bastos",
    description:
      "Today in 2022, in an ecological context whose challenges still elude our perception and surpass our human scale of space and time...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/MathildePaulo/sentiment_oceanique (1).jpg",
      image3: "/images/gallery/MathildePaulo/sentiment_oceanique (3).jpg",
      image4: "/images/gallery/MathildePaulo/sentiment_oceanique (4).jpg",
      image2: "/images/gallery/MathildePaulo/sentiment_oceanique (2).jpg",
      image5: "/images/gallery/MathildePaulo/sentiment_oceanique (5).jpg",
    },
  },
  {
    title: "Marcia Luças",
    id: "marcia_lucas",
    width: 300,
    url: "/gallery/marcia_lucas",
    subtitle: "Marcia Luças",
    description:
      "Excerpt from 'If I see that tree as everyone else sees it, I have nothing to say about that tree.'...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/MarciaLuças/marcia_lucas (1).jpg",
      image2: "/images/gallery/MarciaLuças/marcia_lucas (2).jpg",
      image3: "/images/gallery/MarciaLuças/marcia_lucas (3).jpg",
     
    },
  },
  {
    title: "Pedome",
    id: "pedome",
    width: 300,
    url: "/gallery/pedome",
    subtitle: "Mariana Baldaia",
    description:
      "Pedome is an exhibition featuring works that Mariana Baldaia created during the times of the pandemic, intertwined with motherhood...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/MarianaBaldaia/pedome (1).jpg",
      image2: "/images/gallery/MarianaBaldaia/pedome (2).jpg",
      image3: "/images/gallery/MarianaBaldaia/pedome (3).jpg",
      image4: "/images/gallery/MarianaBaldaia/pedome (4).jpg",
      image5: "/images/gallery/MarianaBaldaia/pedome (5).jpg",
    },
  },
  {
    title: "Diversidade",
    id: "diversidade",
    width: 300,
    url: "/gallery/diversidade",
    subtitle: "Inês Sousa Cardoso",
    description:
      "In this exhibition, some of her masks will be presented in different mediums and forms such as wood, paper, canvas, ceramics, earrings, lamps...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/InêsSousaCardoso/diversidade (1).jpg",
      image2: "/images/gallery/InêsSousaCardoso/diversidade (2).jpg",
      image3: "/images/gallery/InêsSousaCardoso/diversidade (3).jpg",
      image4: "/images/gallery/InêsSousaCardoso/diversidade (4).jpg",
      image5: "/images/gallery/InêsSousaCardoso/diversidade (5).jpg",
    },
  },
  {
    title: "Me: ander(ing)",
    id: "me_andering",
    width: 300,
    url: "/gallery/me_andering",
    subtitle: "Nettie Burnett",
    description:
      "Meandering like a river-through Life. Picking up random ideas and objects to create visual artifice...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/NettieBurnett/me_ander (1).jpg",
      image2: "/images/gallery/NettieBurnett/me_ander (2).jpg",
      image3: "/images/gallery/NettieBurnett/me_ander (3).jpg",
      image4: "/images/gallery/NettieBurnett/me_ander (4).jpg",
      image5: "/images/gallery/NettieBurnett/me_ander (5).jpg",
    },
  },
  {
    title: "Pizzicato",
    id: "pizzicato",
    width: 300,
    url: "/gallery/pizzicato",
    subtitle: "Pierre Linz",
    description:
      "In the captivating world of contemporary art, it is rare to encounter an artist whose vitality and passion seem boundless...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/PierreLinz/pizzicato (1).jpg",
      image2: "/images/gallery/PierreLinz/pizzicato (2).jpg",
      image3: "/images/gallery/PierreLinz/pizzicato (3).jpg",
      image4: "/images/gallery/PierreLinz/pizzicato (4).jpg",
      image5: "/images/gallery/PierreLinz/pizzicato (5).jpg",
    },
  },
  {
    title: "La Passagère",
    id: "la_passagere",
    width: 300,
    url: "/gallery/la_passagere",
    subtitle: "Mathilde Cudeville & Pauline Letang",
    description:
      "It was on May 28th of 2022, Saturday morning, in a Parisian café, Place Saint Ferdinand… A meeting between two women, Mathilde and Pauline...",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/gallery/MathildePauline/la_passagere (1).jpg",
      image2: "/images/gallery/MathildePauline/la_passagere (2).jpg",
      image3: "/images/gallery/MathildePauline/la_passagere (3).jpg",
      image4: "/images/gallery/MathildePauline/la_passagere (4).jpg",
      image5: "/images/gallery/MathildePauline/la_passagere (5).jpg",
    },
  },
  
];

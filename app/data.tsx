type ProductDataType = {
  title: string;
  id: string;
  width?: number;
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

const productData: ProductDataType[] = [
  {
    title: "Product 1",
    id: "1",
    width: 300,
    url: "/product/1",
    subtitle: "Subtitle 1",
    description:
      "Description for Product 1. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/waves.png",
      image2: "/images/Paulo.jpeg",
      image3: "/images/lights.png",
    },
  },
  {
    title: "Product 2",
    id: "2",
    width: 400,
    url: "/product/2",
    subtitle: "Subtitle 2",
    description:
      "Description for Product 2. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/lights.png",
      image2: "/images/bottles.png",
      image3: "/images/2regards.png",
    },
  },
  {
    title: "Product 3",
    id: "3",
    width: 350,
    url: "/product/3",
    subtitle: "Subtitle 3",
    description:
      "Description for Product 3. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/waves.png",
      image2: "/images/Paulo.jpeg",
      image3: "/images/bottles.png",
    },
  },
  {
    title: "Product 4",
    id: "4",
    width: 500,
    url: "/product/4",
    subtitle: "Subtitle 4",
    description:
      "Description for Product 4. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/2regards.png",
      image2: "/images/lights.png",
      image3: "/images/waves.png",
    },
  },
  {
    title: "Product 5",
    id: "5",
    width: 320,
    url: "/product/5",
    subtitle: "Subtitle 5",
    description:
      "Description for Product 5. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/bottles.png",
      image2: "/images/Paulo.jpeg",
      image3: "/images/2regards.png",
    },
  },
  {
    title: "Product 6",
    id: "6",
    width: 450,
    url: "/product/6",
    subtitle: "Subtitle 6",
    description:
      "Description for Product 6. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/lights.png",
      image2: "/images/waves.png",
      image3: "/images/bottles.png",
    },
  },
  {
    title: "Product 7",
    id: "7",
    width: 380,
    url: "/product/7",
    subtitle: "Subtitle 7",
    description:
      "Description for Product 7. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/2regards.png",
      image2: "/images/Paulo.jpeg",
      image3: "/images/lights.png",
    },
  },
  {
    title: "Product 8",
    id: "8",
    width: 420,
    url: "/product/8",
    subtitle: "Subtitle 8",
    description:
      "Description for Product 8. More text about the product. Even more text. You can add as many paragraphs as needed.",
    videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
    images: {
      image1: "/images/waves.png",
      image2: "/images/bottles.png",
      image3: "/images/Paulo.jpeg",
    },
  },
];

export default productData;

  export const exhibitionData: ProductDataType[] = Array.from(
    { length: 8 },
    (_, index) => ({
      title: "Exhibition Title",
      id: (index + 1).toString(),
      width: 300,
      url: `/gallery/${index + 1}`,
      subtitle: "Dynamic Subtitle of exhibition",
      description:
        "Dynamic text on the exhibtion in the gallery.  More dynamic text about the product.    Even more dynamic text.    Tou can add as many paragraphs as needed.",
      videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
      images: {
        image1: "/images/waves.png",
        image2: "/images/Paulo.jpeg",
        image3: "/images/lights.png",
      },
    })
  );
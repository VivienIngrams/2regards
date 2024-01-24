export type ProductDataType = {
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
  
  const productData: ProductDataType[] = Array.from(
    { length: 8 },
    (_, index) => ({
      title: "Dynamic product Title",
      id: (index + 1).toString(),
      width: 300,
      url: `/product${index + 1}`,
      subtitle: "Dynamic Subtitle of product",
      description:
        "Dynamic text on the product of photography for a product.  More dynamic text about the product.    Even more dynamic text.    Tou can add as many paragraphs as needed.",
      videoLink: "https://www.youtube.com/watch?v=MVkguIje46k",
      images: {
        image1: "/images/waves.png",
        image2: "/images/Paulo.jpeg",
        image3: "/images/lights.png",
      },
    })
  );

  export default productData;

  export const exhibitionData: ProductDataType[] = Array.from(
    { length: 8 },
    (_, index) => ({
      title: "Exhibition Title",
      id: (index + 1).toString(),
      width: 300,
      url: `/gallery/exhibition${index + 1}`,
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
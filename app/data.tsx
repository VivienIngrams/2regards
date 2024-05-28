type ProductDataType = {
  title: string;
  subtitle?: string;
  id: string;
  url: string;
  videoLink?: string;
  images: {
    image1: { url: string; width: string; position: string; size: string; center?: string};
    image2: { url: string; position: string; size: string; center?: string};
    image3: { url: string; position: string; size: string; center?: string};
    image4: { url: string; position: string; size: string;  center?: string};
    image5: { url: string; position: string; size: string; center?: string};
  };
};

type GalleryDataType = {
  title: string;
  id: string;

  url: string;
  subtitle: string;
  description: string;
  videoLink?: string;
  poster: string;
  images: {
    image1: { url: string; position: string; size: string };
    image2: { url: string; position: string; size: string };
    image3: { url: string; position: string; size: string };
  };
};

export const productData: ProductDataType[] = [
  {
    title: "Product",
   
    id: "product",
    url: "/product/product",
    images: {
      image1: {
        url: "/images/products/Product/products (1).jpg",
        width: "w-[60vw] xs:w-[45vw] md:w-[15vw]",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] 2xl:w-[20vw] 2xl:h-[60vh]",
      },
      image2: {
        url: "/images/products/Product/products (7).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "max-w-[50vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[15vw] md:h-[37vh] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Product/products (2).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] md:-mt-[5vh]",
        size: "w-[50vw] h-[30vh] xs:w-[58vw] xs:h-[36vh]  md:w-[35vw] md:h-[50vh] lg:h-[55vh] 2xl:h-[65vh] 2xl:w-[30vw]",
      },
      image4: {
        url: "/images/products/Product/products (5).jpg",
        position:
          "justify-end md:items-end md:ml-[5vw] md:mb-2  md:-mr-[8vw]",
        size: "h-[25vh] xs:w-[75vw] xs:h-[36vh] md:w-[30vw] md:h-[35vh] xl:w-[20vw] 2xl:h-[40vh]",
      },
      image5: {
        url: "/images/products/Product/products (3).jpg",
        position: " md:mt-10 justify-start md:items-start md:justify-end pb-12",
        size: "h-[45vh] xs:h-[40vh] md:w-[18vw] md:h-[40vh] lg:w-[35vw] md:-ml-[5vw]",
      },
    },
  },
  {
    title: "Fluent ",
    subtitle:"Feldenkrais Method",
    id: "fluent",
    url: "/product/fluent",
        images: {
      image1: {
        url: "/images/products/Fluent/fluent(2).jpg",
        width: "w-[120vw] xs:w-[100vw] md:w-[26vw]",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[20vh] xs:h-[30vh] sm:h-[60vh] md:w-[30vw] md:h-[37vh] lg:w-[35vw] 2xl:w-[25vw] 2xl:h-[40vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/Fluent/fluent(3).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "mt-[6vh] w-[50vw] h-[30vh] xs:w-[70vw] xs:h-[50vh] sm:h-[50vh] md:w-[20vw] md:h-[40vh] lg:w-[25vw] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Fluent/fluent(5).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] md:-mt-[10vh]",
        size: "mb-4 max-w-[80vw] h-[20vh] xs:h-[32vh]  md:w-[35vw] md:h-[35vh] lg:w-[40vw] lg:h-[47vh] 2xl:w-[35vw]",
      },
      image4: {
        url: "/images/products/Fluent/fluent(4).jpg",
       position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[8vw]",
        size: "mt-[6vh]  h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[35vw] md:h-[30vh] lg:w-[40vw] 2xl:w-[20vw] 2xl:h-[30vh]",
      },
      image5: {
        url: "/images/products/Fluent/fluent(1).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end",
        size: "h-[45vh] xs:h-[40vh] md:w-[25vw] md:h-[40vh] lg:w-[35w] xl:w-[35vw]",
      },
    },
  },
  
  {
    title: "Packshot",
    id: "packshot",
    url: "/product/packshot",
    images: {
      image1: {
        url: "/images/products/Packshot/packshot (1).jpg",
        width: "w-[60vw] xs:w-[45vw] md:w-[15vw]",
        position: " justify-start md:items-center ",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] 2xl:w-[20vw] 2xl:h-[60vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/Packshot/packshot (5).jpg",
        position: "justify-end md:items-start md:mr-[4vw]",
        size: "max-w-[50vw] h-[30vh] xs:h-[45vh] sm:h-[50vh] md:w-[20vw] md:h-[35vh] lg:h-[40vh] ",
      },
      image3: {
        url: "/images/products/Packshot/packshot (3).jpg",
        position: " justify-start md:items-end",
        size: " h-[30vh] xs:h-[40vh]  md:w-[35vw] md:h-[25vh] 2xl:w-[25vw] md:-ml-[10vw] md:mr-[12vw] md:mb-4",
      },
      image4: {
        url: "/images/products/Packshot/packshot (4).jpg",
        position: "justify-end md:items-center ",
        size: "mt-[6vh] md:mt-0 h-[22vh] xs:w-[75vw] xs:h-[25vh] md:w-[60vw] md:h-[40vh] lg:h-[35vh] lg:w-[45vw] 2xl:w-[40vw] 2xl:h-[50vh] md:-ml-[15vw] md:-mr-[1vw]",
      },
      image5: {
        url: "/images/products/Packshot/packshot (2).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
        size: "h-[20vh] xs:h-[35vh] md:w-[18vw] md:h-[30vh] xl:w-[25vw]",
      },
    },
  },
  {
    title: "C I F",
    subtitle:"Companhia Industrial de Fundição",
    id: "cif",
    url: "/product/cif",
    images: {
      image1: {
        url: "/images/products/CIF/cif (1).jpg",
        width: "w-[120vw] xs:[100vw] md:w-[32vw]",
        position: " justify-start md:items-center ",
        size: "mt-[8vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] 2xl:w-[20vw] 2xl:h-[60vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/CIF/cif (2).jpg",
        position: "justify-end md:items-start md:mr-[4vw] xl:mr-[6vw]",
        size: "mt-[6vh] md:mt-0 max-w-[50vw] h-[30vh] xs:w-[43vw] xs:h-[40vh] sm:h-[60vh] md:w-[12vw] md:h-[35vh] 2xl:w-[12vw] md:mt-[10vh] md:-ml-[4vw] xl:-ml-[12vw]",
      },
      image3: {
        url: "/images/products/CIF/cif (3).jpg",
        position: " justify-start md:items-end",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh] xs:w-[43vw] sm:h-[70vh] md:w-[12vw] md:h-[35vh] 2xl:w-[12vw] md:-ml-[8vw] md:mr-[8vw] md:mb-4",
      },

      image4: {
        url: "/images/products/CIF/cif (4).jpg",
        position: "justify-end md:items-center",
        size: "mt-[6vh] md:mt-0 h-[40vh] xs:w-[75vw] xs:h-[45vh] sm:h-[60vh] sm:w-[70vw]  md:h-[65vh] xl:w-[40vw] xl:h-[55vh] md:-ml-[15vw] md:-mr-[1vw] xl:-mr-[2vw]",
      },
      image5: {
        url: "/images/products/CIF/cif (5).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
        size: "h-[25vh] xs:h-[32vh] md:w-[28vw] md:h-[30vh] xl:w-[25vw] ",
      },
    },
  },
  
  {
    title: "Meet",
    subtitle:"Office furniture",
    id: "meet",
    url: "/product/meet",
    videoLink: "https://www.youtube.com/watch?v=--CHqr5M0o4",
    images: {
      image1: {
        url: "/images/products/Meet/meet (1).jpg",
        width: "w-[60vw] xs:[50vw] md:w-[16vw]",
        position: " justify-start md:items-center ",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] 2xl:w-[20vw] 2xl:h-[60vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/Meet/meet (2).jpg",
        position: "justify-end md:items-start md:mr-[4vw]",
        size: "max-w-[50vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[15vw] md:h-[40vh] 2xl:w-[15vw]  md:-ml-[2vw]",
      },
      image3: {
        url: "/images/products/Meet/meet (3).jpg",
        position: " justify-start md:items-end",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh]  md:w-[15vw] md:h-[40vh] 2xl:w-[15vw] md:-ml-[8vw] md:mr-[8vw] md:mb-2",
      },
      image4: {
        url: "/images/products/Meet/meet (5).jpg",
        position: "justify-end md:items-center ",
        size: "mt-[6vh] md:mt-0 h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[70vw] md:h-[45vh] 2xl:w-[40vw] 2xl:h-[50vh] md:-ml-[15vw] md:-mr-[2vw] xl:-mr-[5vw]",
      },
      image5: {
        url: "/images/products/Meet/meet (4).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
        size: "h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[40vh] xl:w-[15vw] ",
      },
    },
  },

  {
    title: "Zoo",
    subtitle: "Santo Inácio",
    id: "zoo",
    url: "/product/zoo",
    images: {
      image1: {
        url: "/images/products/Zoo/zoo (1).jpg",
        width: "w-[65vw] xs:w-[50vw] md:w-[13vw]",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[50vh] xs:h-[60vh] sm:h-[75vh] md:w-[22vw] md:h-[60vh] xl:w-[20vw] xl:h-[65vh]",
      center: "object-right-bottom",
      },
      image2: {
        url: "/images/products/Zoo/zoo (5).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "mt-[6vh] md:mt-0 w-[60vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[20vw] md:h-[40vh] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Zoo/zoo (2).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] md:mb-[8vh] md:-mt-[10vh]",
        size: " h-[25vh] xs:h-[40vh]  md:w-[35vw] md:h-[40vh] 2xl:w-[35vw]",
      },
      image4: {
        url: "/images/products/Zoo/zoo (4).jpg",
        position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[8vw]",
        size: "mt-[6vh] md:mt-0 h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[30vw] md:h-[35vh] 2xl:w-[20vw] 2xl:h-[30vh]",
      },
      image5: {
        url: "/images/products/Zoo/zoo (3).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end lg:-ml-[2vw]",
        size: "h-[35vh] xs:h-[45vh] md:w-[28vw] md:h-[40vh] xl:w-[45vw] xl:h-[50vh]",
        center: "object-right-top",
      },
    },
  },


  {
    title: "PAPERFLOW",
    subtitle: "Furniture factory",
    id: "paperflow",
    url: "/product/paperflow",
    videoLink: "https://www.youtube.com/watch?v=572uLi_rnn4",
    images: {
      image1: {
        url: "/images/products/Paperflow/paperflow (2).jpg",
        width: "w-[70vw] xs:w-[55vw] md:w-[16vw]",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] xl:w-[353w] xl:h-[60vh] ",
      },
      image2: {
        url: "/images/products/Paperflow/paperflow (1).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "mt-[6vh] md:mt-0 w-[55vw] h-[20vh] xs:h-[30vh] xs:w-[75vw]  md:w-[25vw] md:h-[30vh] lg:w-[30vw] lg:h-[25vh] ",
      },
      image3: {
        url: "/images/products/Paperflow/paperflow (3).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] md:mb-[15vh] ",
        size: "w-[55vw] h-[20vh] xs:h-[30vh] xs:w-[75vw]  md:w-[35vw] md:h-[40vh] 2xl:w-[35vw] ",
      },
      image4: {
        url: "/images/products/Paperflow/paperflow (8).jpg",
        position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[8vw]",
        size: "h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[30vw] md:h-[35vh] 2xl:w-[20vw] 2xl:h-[30vh]  ",
      },
      image5: {
        url: "/images/products/Paperflow/paperflow (4).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
        size: "mt-[6vh] md:mt-0 h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[40vh] lg:h-[50vh] xl:w-[35vw]",
      },
    },
  },
  {
    title: "Fabrics",
    subtitle: "La Môme Loja",
    id: "Fabrics",
    url: "/product/Fabrics",
    images: {
      image1: {
        url: "/images/products/Fabrics/fabrics (1).jpg",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] 2xl:w-[20vw] 2xl:h-[60vh]",
        width: "w-[70vw] xs:w-[55vw] md:w-[16vw]",
      },
      image2: {
        url: "/images/products/Fabrics/fabrics (2).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "max-w-[50vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[15vw] md:h-[40vh] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Fabrics/fabrics (4).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] md:mt-[6vh] ",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh]  md:w-[35vw] md:h-[67vh] 2xl:w-[25vw]",
        center: "object-top",
      },
      image4: {
        url: "/images/products/Fabrics/fabrics (5).jpg",
        position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[2vw]",
        size: "mt-[6vh] md:mt-0 h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[30vw] md:h-[35vh] 2xl:w-[15vw] 2xl:h-[45vh]",
      },
      image5: {
        url: "/images/products/Fabrics/fabrics (3).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end",
        size: "mt-[6vh] md:mt-0 h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[50vh] xl:w-[25vw]",
      },
    },
  },
  {
    title: "O-Mã-yã",
    id: "omaya",
    url: "/product/omaya",
    images: {
      image1: {
        url: "/images/products/Omaya/omaya (2).jpg",
        width: "w-[50vw] xs:w-[40vw] md:w-[11vw]",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] xl:w-[353w] xl:h-[65vh]",
      },
      image2: {
        url: "/images/products/Omaya/omaya (1).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "mt-[6vh] md:mt-0 max-w-[50vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[15vw] md:h-[40vh] xl:h-[45vh] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Omaya/omaya (3).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] lg:mt-[6vh]",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh]  md:w-[35vw] md:h-[50vh] xl:h-[68vh] 2xl:w-[25vw]",
        center: "object-top"
      },
      image4: {
        url: "/images/products/Omaya/omaya (5).jpg",
        position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[8vw]",
        size: "mt-[6vh] md:mt-0 h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[30vw] md:h-[35vh] 2xl:w-[15vw] 2xl:h-[40vh]",
      },
      image5: {
        url: "/images/products/Omaya/omaya (4).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end",
        size: "mt-[6vh] md:mt-0 h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[50vh] xl:w-[40vw]",
      },
    },
  },
  {
    title: "Saint Pierre et Miquelon",
    subtitle:"Photo documentary",
    id: "miquelon",
    url: "/product/miquelon",
    images: {
      image1: {
        url: "/images/products/Miquelon/miquelon (2).jpg",
        width: "w-[150vw] xs:[100vw] md:w-[37vw]",
        position: "justify-start md:items-center",
        size: "mt-[12vh] md:mt-0 h-[25vh] xs:h-[28vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] xl:w-[22vw] xl:h-[30vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/Miquelon/miquelon (3).jpg",
        position: "justify-end md:items-start md:-ml-[4vw] ",
        size: "mt-[8vh] h-[25vh] xs:h-[28vh] sm:h-[50vh] md:w-[15vw] md:h-[30vh] xl:w-[35vw] ",
      },
      image3: {
        url: "/images/products/Miquelon/miquelon (1).jpg",
        position:
          "justify-start md:items-end md:-ml-[12vw] md:mr-[8vw] md:mb-2",
        size: "mt-[2vh] h-[25vh] xs:h-[28vh] md:w-[28vw] md:h-[25vh] xl:w-[23vw] ",
      },
      image4: {
        url: "/images/products/Miquelon/miquelon (5).jpg",
        position: "justify-end md:items-center md:-ml-[12vw] md:-mr-[3vw] ",
        size: "mt-[8vh] h-[25vh] xs:h-[28vh] md:w-[65vw] md:h-[42vh] xl:w-[40vw] xl:h-[45vh] ",
      },
      image5: {
        url: "/images/products/Miquelon/miquelon (4).jpg",
        position:
          "pb-12 md:mt-4 justify-start md:items-start md:justify-end md:-ml-[2vw]",
        size: "mt-[2vh] h-[25vh] xs:h-[28vh] md:w-[28vw] md:h-[25vh] xl:w-[25vw]  ",
      },
    },
  },

  {
    title: "Vawo",
    subtitle: "Urban electric bike",
    id: "vawo",
    url: "/product/vawo",
    videoLink: "https://www.youtube.com/watch?v=-lue-ELmY2U",
    images: {
      image1: {
        url: "/images/products/Vawo/vawo (2).jpg",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] xl:w-[353w] xl:h-[60vh]",
        width: "w-[80vw] sm:w-[60vw] md:w-[16vw]",
      },
      image2: {
        url: "/images/products/Vawo/vawo (1).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "max-w-[50vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[15vw] md:h-[40vh] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Vawo/vawo (3).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[10vw] md:-mt-[5vh]",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh]  md:w-[35vw] md:h-[50vh] 2xl:w-[35vw]",
      },
      image4: {
        url: "/images/products/Vawo/vawo (4).jpg",
        position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[8vw]",
        size: "mt-[6vh] md:mt-0 h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[30vw] md:h-[35vh] 2xl:w-[20vw] 2xl:h-[30vh]",
      },
      image5: {
        url: "/images/products/Vawo/vawo (5).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end",
        size: "h-[35vh] xs:h-[55vh] md:w-[18vw] md:h-[40vh] xl:w-[35vw]",
      },
    },
  },
   {
    title: "Hiima",
    subtitle:"Paris",
    id: "hiima",
    url: "/product/hiima",
    images: {
      image1: {
        url: "/images/products/Hiima/hiima (2).jpg",
        position: " justify-start md:items-center ",
        width: "w-[65vw] xs:[50vw] md:w-[14vw]",
        size: "mt-[5vh] h-[48vh] xs:h-[58vh] sm:h-[65vh] md:w-[20vw] md:h-[45vh] 2xl:w-[20vw] 2xl:h-[60vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/Hiima/hiima (1).jpg",
        position: "justify-end md:items-start md:mr-[4vw]",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh] sm:h-[40vh] md:w-[15vw] md:h-[30vh] lg:h-[40vh] 2xl:w-[15vw]  md:-ml-[2vw]",
      },
      image3: {
        url: "/images/products/Hiima/hiima (3).jpg",
        position: " justify-start md:items-end",
        size: "max-w-[50vw] h-[30vh] xs:h-[40vh]  md:w-[15vw] md:h-[40vh] 2xl:w-[15vw] md:-ml-[8vw] md:mr-[8vw] md:mb-4",
      },
      image4: {
        url: "/images/products/Hiima/hiima (4).jpg",
        position: "justify-end md:items-center ",
        size: "h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[70vw] md:h-[45vh] 2xl:w-[40vw] 2xl:h-[50vh] md:-ml-[15vw] md:-mr-[2vw] xl:-mr-[5vw]",
      },
      image5: {
        url: "/images/products/Hiima/hiima (6).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
        size: "mt-[6vh] md:mt-0 h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[40vh] xl:w-[15vw]",
      },
    },
  },
  {
    title: "TAKANAP",
    id: "takanap",
    url: "/product/takanap",
    videoLink: "https://www.youtube.com/watch?v=0PmrKAZbKc4&t=102s",
    images: {
      image1: {
        url: "/images/products/Takanap/takanap (1).jpg",
        position: " justify-start md:items-start md:-mr-[6vw]",
        size: "mt-[5vh] h-[33vh] xs:h-[45vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] xl:w-[353w] xl:h-[45vh]",
        width: "w-[100vw] xs:w-[90vw] md:w-[20vw]",
      },
      image2: {
        url: "/images/products/Takanap/takanap (11).jpg",
        position: "justify-end md:items-end md:mb-2 md:-ml-[2vw]",
        size: "mt-[6vh] md:mt-0 max-w-[50vw] h-[20vh] xs:w-[75vw] xs:h-[30vh] sm:h-[50vh] md:w-[15vw] md:h-[30vh] 2xl:w-[15vw]",
      },
      image3: {
        url: "/images/products/Takanap/takanap (5).jpg",
        position:
          " justify-start md:items-center md:-ml-[4vw] md:-mr-[8vw] md:-mt-[5vh]",
        size: "max-w-[50vw] h-[20vh] xs:w-[75vw] xs:h-[30vh]  md:w-[35vw] md:h-[50vh] xl:h-[57vh] 2xl:w-[35vw]",
      },
      image4: {
        url: "/images/products/Takanap/takanap (2).jpg",
        position:
          "justify-end md:items-end md:-ml-[6vw] md:mb-2 md:-mr-[2vw] xl:-mr-[8vw]",
        size: "max-w-[50vw] h-[20vh] xs:w-[75vw] xs:h-[30vh] md:w-[30vw] md:h-[35vh] 2xl:w-[20vw] 2xl:h-[40vh]",
      },
      image5: {
        url: "/images/products/Takanap/takanap (10).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end",
        size: "mt-[6vh] md:mt-0 h-[30vh] xs:h-[45vh] md:w-[18vw] md:h-[40vh] xl:w-[35vw]",
      },
    },
  },
  {
    title: "Becafire",
    id: "becafire",
    url: "/product/becafire",
    videoLink: " https://www.youtube.com/watch?v=3qe4XdC--hM",
    images: {
      image1: {
        url: "/images/products/Becafire/becafire (7).jpg",
        width: "w-[80vw] sm:[60vw] md:w-[18vw]",
        position: " justify-start md:items-center ",
        size: "mt-[5vh] h-[22vh] xs:h-[28vh] sm:h-[70vh] md:w-[25vw] md:h-[30vh] lg:h-[28vh] 2xl:w-[30vw] 2xl:h-[35vh] md:-mr-[6vw]",
      },
      image2: {
        url: "/images/products/Becafire/becafire (6).jpg",
        position: "justify-end md:items-start  md:mr-[4vw] md:mt-[6vh] lg:-ml-[6vw] 2xl:-mt-[1vh]",
        size: "mt-[2vh] h-[22vh] xs:h-[28vh] sm:h-[50vh] md:w-[25vw] md:h-[30vh] lg:w-[40vw] lg:h-[25vh] 2xl:w-[35vw] 2xl:h-[30vh] md:-ml-[2vw]",
      },
      image3: {
        url: "/images/products/Becafire/becafire (3).jpg",
        position: " justify-start md:items-end",
        size: "mt-[6vh] md:mt-0 mt-[2vh] h-[45vh] xs:h-[55vh]  md:w-[15vw] md:h-[40vh] lg:h-[30vh] 2xl:w-[15vw] 2xl:h-[40vh] md:-ml-[10vw] md:mr-[8vw] md:mb-2",
      },
      image4: {
        url: "/images/products/Becafire/becafire (9).jpg",
        position: "justify-end md:items-center ",
        size: "h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[70vw] md:h-[45vh] 2xl:w-[35vw] 2xl:h-[45vh] md:-ml-[20vw] ",
      },
      image5: {
        url: "/images/products/Becafire/becafire (8).jpg",
        position: "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
        size: " mt-[2vh] h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[50vh] lg:h-[35vh] xl:w-[15vw] 2xl:h-[40vh]",
      },
    },
  },
 
];

export const galleryData: GalleryDataType[] = [
  {
    title: "Encaustic",
    id: "encaustica",
    url: "/gallery/encaustica",
    subtitle: "João Alexandre",
    poster: "/images/gallery/JoaoAlexandre/encaustic (1).jpg",
    description: "An aesthetic celebration that combines technical skill and artistic expression, abstractionism, and encaustic. João Alexandre (1960, Sever do Vouga) is a visual artist specializing in encaustic painting. He lived in Brazil for 15 years, where he earned a degree in Fine Arts from the São Paulo College of Fine Arts. He has exhibited his work in various Portuguese galleries, as well as in numerous European cities, both individually and collectively. João Alexandre paints encaustic on various supports: wood, paper, and papyrus. According to his friend Adão Cruz, 'his painting appears as if the artist were blowing away the layer of dust that covers it, one does not know if it has been centuries, millennia, or a time outside of time.'",        
    images: {
      image1: {
        url: "/images/gallery/JoaoAlexandre/encaustic (3).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:w-[30vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/JoaoAlexandre/encaustic (2).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[60vh] md:w-[50vw] md:h-[40vh] lg:w-[28vw] lg:h-[50vh] xl:w-[20vw] xl:h-[60vh] ",
      },
      image3: {
        url: "/images/gallery/JoaoAlexandre/encaustic (4).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 md:mr-10 lg:mb-16 ",
        size: "h-[22vh] xs:h-[30vh] md:w-[20vw] xl:h-[30vh]",
      },
    },
  },
  {
    title: "Culminations",
    id: "culminations",
    url: "/gallery/culminations",
    subtitle: "BerriBlue",
    poster: "/images/gallery/BerriBlue/culminations.jpg",
    description: "BerriBlue explores the convergence of her artistic past and present. The works reflect a sense of retrospection, but imbued with a forward momentum, signalling the closure of one chapter and the emergence of another. The artist has developed a private visual language through recurring themes and symbols. The evolution of form and image has been influenced by her immediate environment and her visual heritage. As a pan-European immigrant/emigrant, her skewed sense of belonging has lead to her imagining a personal folklore, creating an aesthetic “home”. ",
        images: {
      image1: {
        url: "/images/gallery/BerriBlue/culminations (1).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:w-[30vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/BerriBlue/culminations (2).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[60vh] md:w-[50vw] md:h-[40vh] lg:w-[28vw] lg:h-[50vh] xl:w-[20vw] xl:h-[60vh] ",
      },
      image3: {
        url: "/images/gallery/BerriBlue/culminations (3).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 md:mr-10 lg:mb-16 ",
        size: "h-[22vh] xs:h-[30vh] md:w-[20vw] xl:h-[30vh]",
      },
    },
  },
  {
    title: "Desert",
    id: "desert",
    url: "/gallery/desert",
    subtitle: "Ayala Braidman",
    description:
      "The exhibition Desert unveils the culmination of Ayala Braidman's year-long journey from her homeland to Portugal. Crafted during this transformative period, the artworks draw inspiration from the desert landscapes of her childhood, distinct from Porto's environment. The textures and color palette mirror the dry terrain, capturing its essence. For Braidman, the desert signifies a fusion of personal experiences and a universal theme—a space inviting inner exploration and spiritual enlightenment. This exhibition marks Braidman’s debut solo show in Portugal. Ayala Braidman (b. 1992, Israel) is a designer and artist, currently residing and working in Porto.",
    videoLink: "https://youtube.com/shorts/mletfKluUvQ?feature=share",
    poster: "/images/gallery/AyalaBraidman/desert (1).jpg",
    images: {
      image1: {
        url: "/images/gallery/AyalaBraidman/desert (4).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:w-[30vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/AyalaBraidman/desert (2).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[60vh] md:w-[50vw] md:h-[40vh] lg:w-[28vw] lg:h-[50vh] xl:w-[20vw] xl:h-[60vh] ",
      },
      image3: {
        url: "/images/gallery/AyalaBraidman/desert (3).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 md:mr-10 lg:mb-16 ",
        size: "h-[22vh] xs:h-[30vh] md:w-[18vw] xl:h-[36vh]",
      },
    },
  },

  {
    title: "La Passagère",
    id: "la_passagere",
    url: "/gallery/la_passagere",
    subtitle: "Mathilde Cudeville & Pauline Letang",
    description:
      " It was on May 28th of 2022 in a Parisian café… A meeting between two women. A meeting between photography and poetry, between Porto and Paris. Then, from this moment of grace, out of time, between dream and reality, was born the desire to realize a common work. I feel a need, a crazy urgency to free myself from pretense and shackles, to awaken sleeping parts of my being, to seize this vertiginous freedom of Being fully, to re-discover my soul. « La Passagère » is the artistic, photographic and poetic expression of this journey towards the soul, this primordial Breath, this initial Desire, this intimate feeling of an authentic uniqueness and a possible unity.",
    poster: "/images/gallery/MathildePauline/la_passagère (1).jpg",
    images: {
      image1: {
        url: "/images/gallery/MathildePauline/la_passagère (6).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:w-[30vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/MathildePauline/la_passagère (8).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[55vh] md:w-[50vw] md:h-[48vh] lg:w-[25vw] lg:h-[50vh] xl:w-[20vw] xl:h-[60vh] ",
      },
      image3: {
        url: "/images/gallery/MathildePauline/la_passagère (7).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 lg:mb-14",
        size: "h-[22vh] xs:h-[30vh] md:w-[20vw] xl:h-[30vh]",
      },
    },
  },

  {
    title: "Pizzicato",
    id: "pizzicato",
    url: "/gallery/pizzicato",
    subtitle: "Pierre Linz",
    description:
      "In the captivating world of contemporary art, it is rare to encounter an artist whose vitality and passion seem boundless. We embark to discover Pierre Linz, a truly unique plastic artist who, at the age of 80, still overflows with energy. Through his remarkable journey and boundless creativity, he offers us a living testimony of the paper/cardboard expression that transcends time. The encounter with Pierre Linz proves to us that art knows no age and that life can be a canvas in constant evolution.",
    videoLink: "https://www.youtube.com/watch?v=W5W1V_2oIX8",
    poster: "/images/gallery/PierreLinz/pizzicato (1).jpg",
    images: {
      image1: {
        url: "/images/gallery/PierreLinz/pizzicato (3).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:w-[30vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/PierreLinz/pizzicato (5).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[55vh] md:w-[50vw] md:h-[48vh] lg:w-[22vw] lg:h-[50vh] xl:w-[22vw] xl:h-[60vh] 2xl:w-[18vw] ",
      },
      image3: {
        url: "/images/gallery/PierreLinz/pizzicato (4).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 lg:mb-16",
        size: "h-[22vh] xs:h-[30vh] md:w-[35vw] lg:w-[30vw] xl:h-[28vh] 2xl:w-[20vw]",
      },
    },
  },

  {
    title: "Me: ander(ing)",
    id: "me_andering",
    url: "/gallery/me_andering",
    subtitle: "Nettie Burnett",
    description:
      "The exhibition « me: ander(ing) is a retrospective of Nettie Burnett’s artwork, Meandering, Like a river- through Life. Picking up random ideas and objects to create visual artifice.",
    videoLink: "https://www.youtube.com/watch?v=Mp1Fw5wQMRc",
    poster: "/images/gallery/NettieBurnett/me_ander (1).jpg",
    images: {
      image1: {
        url: "/images/gallery/NettieBurnett/me_ander (4).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:w-[32vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/NettieBurnett/me_ander (2).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[55vh] md:w-[50vw] md:h-[48vh] lg:w-[25vw] lg:h-[50vh] xl:w-[20vw] xl:h-[55vh] ",
      },
      image3: {
        url: "/images/gallery/NettieBurnett/me_ander (3).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 lg:mb-16 md:mr-16",
        size: "h-[22vh] xs:h-[30vh] md:w-[32vw] md:h-[25vh] xl:w-[22vw] xl:h-[30vh]",
      },
    },
  },
  {
    title: "Diversidade",
    id: "diversidade",
    url: "/gallery/diversidade",
    subtitle: "Inês Sousa Cardoso",
    description:
      "All the personal work of @ines.sousacardoso.peres has always embraced diversity, the culture of ancestral peoples, and their symbolism. A constantly evolving line where the geometric and the organic merge. In this exhibition, some of her masks will be presented in different mediums and forms such as wood, paper, canvas, ceramics, earrings, lamps... a glimpse into her inner world and what she loves to do the most.",
    poster: "/images/gallery/InêsSousaCardoso/diversidade (1).jpg",
    images: {
      image1: {
        url: "/images/gallery/InêsSousaCardoso/diversidade (3).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[35vh] lg:w-[30vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/InêsSousaCardoso/diversidade (8).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[55vh] md:w-[37vw] md:h-[45vh] lg:w-[22vw] lg:h-[45vh] xl:w-[20vw] xl:h-[60vh] ",
      },
      image3: {
        url: "/images/gallery/InêsSousaCardoso/diversidade (7).jpg",
        position: "lg:items-end lg:justify-center lg:-mr-8 lg:mb-16",
        size: "h-[40vh] xs:h-[50vh] md:w-[15vw] md:h-[35vh] xl:h-[40vh]",
      },
    },
  },
  {
    title: "Pedome",
    id: "pedome",
    url: "/gallery/pedome",
    subtitle: "Mariana Baldaia",
    description:
      "Pedome is an exhibition featuring works that Mariana Baldaia created during the times of the pandemic, intertwined with motherhood.",
    videoLink: "https://www.youtube.com/watch?v=nXCLrUdsEk4",
    poster: "/images/gallery/MarianaBaldaia/pedome (1).jpg",
    images: {
      image1: {
        url: "/images/gallery/MarianaBaldaia/pedome (5).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh]  lg:w-[35vw] xl:h-[45vh]",
      },
      image2: {
        url: "/images/gallery/MarianaBaldaia/pedome (2).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[55vh] w-[60vw] xs:h-[85vh] xs:w-[50vw] md:w-[20vw] md:h-[60vh] lg:w-[20vw] lg:h-[70vh] xl:w-[14vw] xl:h-[65vh] ",
      },
      image3: {
        url: "/images/gallery/MarianaBaldaia/pedome (3).jpg",
        position: "lg:items-end lg:justify-center md:-mt-6 xl:ml-24 lg:mb-16",
        size: "h-[40vh] xs:h-[30vh] xs:h-[55vh] md:w-[28vw] md:h-[40vh] lg:w-[22vw] xl:w-[15vw] xl:h-[45vh]",
      },
    },
  },

  {
    title: "Sobre Aquela Árvore",
    id: "marcia_lucas",
    url: "/gallery/marcia_lucas",
    subtitle: "Marcia Luças",
    description:
      "'If I see that tree as everyone else sees it, I have nothing to say about that tree. I did not see that tree. It is when the tree triggers in me a connected series of emotions that I see it differently and justly. And to the extent that these ideas and emotions are acceptable to everyone, not just individual, the tree will be THE Tree.' - Álvaro de Campos ",
    poster: "/images/gallery/MarciaLucas/arvore (4).jpg",
    images: {
      image1: {
        url: "/images/gallery/MarciaLucas/arvore (5).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh]  lg:w-[30vw] xl:h-[40vh]",
      },
      image2: {
        url: "/images/gallery/MarciaLucas/arvore (2).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[45vh] xs:h-[55vh] md:w-[50vw] md:h-[48vh] lg:w-[25vw] lg:h-[45vh] xl:w-[20vw] xl:h-[55vh] ",
      },
      image3: {
        url: "/images/gallery/MarciaLucas/arvore (3).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 md:mr-12 lg:mb-16",
        size: "h-[22vh] xs:h-[30vh] md:w-[20vw] md:h-[25vh] lg:h-[25vh] lg:w-[25vw] xl:h-[30vh]",
      },
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
    poster: "/images/gallery/MathildePaulo/sentiment_oceanique.jpg",
    images: {
      image1: {
        url: "/images/gallery/MathildePaulo/sentiment_oceanique (7).jpg",
        position: "justify-start",
        size: "mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:h-[30vh] lg:w-[30vw] xl:w-[27vw] xl:h-[38vh]",
      },
      image2: {
        url: "/images/gallery/MathildePaulo/sentiment_oceanique (9).jpg",
        position: "justify-end lg:items-center lg:justify-end ",
        size: "h-[25vh] xs:h-[35vh] md:w-[50vw] md:h-[48vh] lg:w-[25vw] lg:h-[50vh] xl:w-[25vw] xl:h-[40vh] ",
      },
      image3: {
        url: "/images/gallery/MathildePaulo/sentiment_oceanique (1).jpg",
        position: "lg:items-end lg:justify-center md:-mt-4 lg:mb-16",
        size: "h-[22vh] xs:h-[30vh] md:w-[20vw] lg:w-[25vw] xl:h-[30vh]",
      },
    },
  },
];

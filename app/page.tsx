// HomeServer.tsx
import { client } from "../sanity/lib/client";
import HomeClient from "./components/HomeClient";

const Product = async () => {
  const productData = await client.fetch(`
  *[_type == "product"] {
    title,
    "slug": slug.current,
    "mainImage": images[main == true][0]{
      "imageUrl": image.asset->url,
      layout
    }
  }
  `);

  return (
  <HomeClient productData={productData} />
  );
};

export default Product;


import React from "react";
import { client } from "../../../sanity/lib/client";
import ProductClient from "../../components/ProductClient";


type ProductProps = {
  params: {
    productId: string;
  };
};

type ImageType = {
  imageUrl: URL;
  position: string;
  size: string;
  mainImage: boolean;
};

type ProductDataType = {
  title: string;
  subtitle?: string;
  slug: string;
  videoLink?: string;
  images: ImageType[];
};

const Product: React.FC<ProductProps> = async ({ params }) => {
  const productData: ProductDataType | null = await client.fetch(
    `
    *[_type == "product" && slug.current == $slug] {
      title,
      subtitle,
      "slug": slug.current,
      videoLink,
      "images": images[]{
        "imageUrl": image.asset->url,
        position,
        size,
        mainImage
      }
    }[0]
  `,
    { slug: params.productId }
  );

  if (!productData) {
    return <p>Product not found</p>;
  }

  const slugs = await client.fetch(`
  *[_type == "product"].slug.current
`);
console.log(slugs)
  return <ProductClient productData={productData} productSlugs={slugs} />;
};

export default Product;


// HomeServer.tsx
import { client } from "../../sanity/lib/client";

const HomeServer = async () => {
  const productData = await client.fetch(`
    *[_type == "product"] {
      title,
      subtitle,
      slug,
      videoLink,
      "images": images[]{
        "imageUrl": image.asset->url,
        position,
        size,
        mainImage
      }
    }
  `);

  return productData;
};

export default HomeServer;

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
        main,
        layout
      }
    }
  `);

  return productData;
};

export default HomeServer;

export const GalleryData = async () => {
  const galleryData = await client.fetch(`
  *[_type == "exhibition"] {
    title,
    subtitle,
    description, // Corrected typo
    "poster": poster.asset->url,
    "slug": slug.current, // Added missing comma
    videoLink,
    "images": images[]{
      "imageUrl": image.asset->url,
      position,
      size
    }
  }
  `);

  return galleryData;
};




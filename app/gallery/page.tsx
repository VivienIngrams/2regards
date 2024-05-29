import {client} from "../../sanity/lib/client";
import GalleryClient from "../components/GalleryClient";

const Gallery = async () => {
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

  return (
    <GalleryClient galleryData={galleryData} />
  );
};


export default Gallery;
import {client} from "../../sanity/lib/client";
import GalleryClient from "../components/GalleryClient";

const Gallery = async () => {
  const galleryData = await client.fetch(`
  *[_type == "exhibition"] {
    "poster": poster.asset->url,
    "slug": slug.current, 
    date,
  }
  `,
  {},
  {
    next: {
      revalidate: 60,
    },
  });

  return (
    <GalleryClient galleryData={galleryData} />
  );
};


export default Gallery;
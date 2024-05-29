import React from "react";

import { client } from "../../../sanity/lib/client";
import GalleryExpo from "../../components/GalleryExpoClient";

type GalleryExpoProps = {
  params: {
    galleryId: string;
  };
};

const GalleryExpoPage: React.FC<GalleryExpoProps> = async ({ params }) => {
  const { galleryId: slug } = params; // Destructure galleryId from params and rename it to slug
  const galleryExpoData = await client.fetch(
    `*[_type == "exhibition" && slug.current == $slug] {
      title,
      subtitle,
      description,
      "poster": poster.asset->url,
      "slug": slug.current,
      videoLink,
      "images": images[]{
        "imageUrl": image.asset->url,
        position,
        size
      }
    }[0]`,
    { slug } // Pass the slug parameter to the query
  );

  const slugs = await client.fetch(`
  *[_type == "exhibition"].slug.current
`);
// console.log(slugs)
// console.log(galleryExpoData);

  return <GalleryExpo galleryExpoData={galleryExpoData} gallerySlugs={slugs}/>;
};

export default GalleryExpoPage;
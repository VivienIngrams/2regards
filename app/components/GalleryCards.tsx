import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryCards({
  img,
  title,
  id,
  url,
}: {
  img: string;
  title: string;
  id: string;

  url: string;
}) {
  return (
    <div
      key={id}
      className=" select-none w-[90%] h-[60%] flex items-center mx-8"
      tabIndex={0}
    >
      <Link href={url}>
        <div className="relative shadow-md group w-[300px] h-[400px] md:w-[420px] md:h-[560px] max-w-[75vw] max-h-[50vh] xs:max-h-[80vh] hover:bg-gradient-to-r from-[black] to-neutral-600">
          <Image
            className=" object-fill group-hover:opacity-60 border-[1px] border-black"
            src={img}
            alt={title}
            fill
            sizes="90vw md:70vw lg:40vw xl:35vw 2xl:30vw"
          />
        </div>
      </Link>
    </div>
  );
}

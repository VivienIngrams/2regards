import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryCards({
  img,
  title,
  id,
  width,
  url,
}: {
  img: string;
  title: string;
  id: string;
  width?: number;
  url: string;
}) {
  return (
    <div
      key={id}
      className=" select-none w-[90%] h-[60%] flex items-center "
      tabIndex={0}
    >
      <div className="relative shadow-md group w-[360px] h-[500px] md:w-[450px] md:h-[560px] hover:bg-gradient-to-r from-[black] to-neutral-600">
      <Link href={url}>
      <Image
          className="object-fill group-hover:opacity-60"
          src={img}
          alt={title}
          fill
          sizes="90vw md:70vw lg:40vw xl:35vw 2xl:30vw"
        />
        </Link>
        
      </div>
    </div>
  );
}

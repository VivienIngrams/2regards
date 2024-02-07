import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";
import Link from "next/link";

export default function ProductCards({
  img,
  title,
  id,
  width,
  position,
  url,
}: {
  img: string;
  title: string;
  id: string;
  width?: number;
  position?: string;
  url: string;
}) {
  // const visibility = React.useContext(VisibilityContext);

  // const visible = visibility.isItemVisible(id);

  return (
    <div className="relative w-[75vw] sm:w-[60vw] md:w-[28vw] h-full select-none" tabIndex={0}>
      <div
        key={id}
        className={`relative ${position} shadow-md shadow-neutral-500  border-[1px] border-black group hover:bg-gradient-to-r from-[black] to-neutral-600`}
      >
        <Image
          className="object-cover shadow-md group-hover:opacity-60"
          src={img}
          alt={title}
          fill
          sizes="50vw"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Link href={url}>
            <p className="py-3 text-white text-lg cursor-pointer text-center">
              {title}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

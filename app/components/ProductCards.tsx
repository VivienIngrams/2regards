import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function ProductCards({
  img,
  title,
  slug,
  id,
  layout,
  
}: {
  img: string;
  title: string;
  slug: string;
  id: string;
  layout: string;
 
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(id);

  return (
    <div
      className={`relative grid grid-cols-1  ${layout} h-full select-none`}
      tabIndex={0}
    >
      <Link href={`/product/${slug}`}>
        <div
          key={id}
          className="relative shadow-md m-2 shadow-neutral-500 h-[90%] border-[1px] border-black group hover:bg-gradient-to-r from-[black] to-neutral-600"
        >
          <Image
            className="object-cover overflow-hidden shadow-md group-hover:opacity-30"
            src={img}
            alt={title}
            fill
            sizes="50vw lg:25vw"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className="py-3 text-white text-2xl font-italiana uppercase cursor-pointer text-center">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

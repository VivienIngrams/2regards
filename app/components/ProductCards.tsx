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
    <div className="w[25%] h-full select-none" tabIndex={0}>
      <div
        key={id}
        className="relative h-[98%] w-[300px]  group hover:bg-gradient-to-r from-[black] to-neutral-600"
      >
        <Image
          className={`absolute ${position} shadow-md group-hover:opacity-60`}
          src={img}
          alt={title}
        height={500}
          width={width}
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

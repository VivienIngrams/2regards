import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";
import Link from "next/link";

export default function Card({
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
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(id);

  return (
    <div
      key={id}
      className="flex flex-col justify-between w-[400px] h-full p-2 select-none"
      tabIndex={0}
    >
      <div className="relative h-1/3 w-auto shadow-md group hover:bg-gradient-to-r from-[black] to-neutral-600">
        <Image
          className="object-fill group-hover:opacity-20"
          src={img}
          alt={title}
          height={500}
          width={width || 300}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Link href={url}>
            <p className="py-3 text-white text-lg cursor-pointer text-center">
              {title}
            </p>
          </Link>
        </div>
      </div>
      <div className="relative h-1/3 w-auto shadow-md group hover:bg-gradient-to-r from-[black] to-neutral-600">
        <Image
          className="object-fill group-hover:opacity-20"
          src={img}
          alt={title}
          height={500}
          width={width || 300}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Link href={url}>
            <p className="py-3 text-white text-lg cursor-pointer text-center">
              {title}
            </p>
          </Link>
        </div>
      </div>
      <div className="relative h-1/3 w-auto shadow-md group hover:bg-gradient-to-r from-[black] to-neutral-600">
        <Image
          className="object-fill group-hover:opacity-20"
          src={img}
          alt={title}
          height={500}
          width={width || 300}
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

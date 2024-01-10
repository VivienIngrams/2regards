import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";

export default function Card({
  img,
  title,
  id,
  width,
}: {
  img: string;
  title: string;
  id: string;
  width?: number;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(id);

  return (
    <div
      key={id}
      className="flex flex-col justify-between w-[400px] h-full p-2 select-none"
      tabIndex={0}
    >
      <div className="h-1/2 w-auto relative">
        <Image
          className="shadow-md"
          src={img}
          height={200}
          width={width || 300}
          alt={title}
        />
      </div>
      <div className="h-1/2 w-auto relative ">
        <Image
          className="shadow-md"
          src={img}
          height={200}
          width={200}
          alt={title}
        />
      </div>
    </div>
  );
}

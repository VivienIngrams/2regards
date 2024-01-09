import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";

export default function Card({
  img,
  title,
  id,
}: {
  img: string;
  title: string;
  id: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(id);

  return (
    <div
      key={id}
      className="flex-col justify-between w-[400px] h-full m-2 select-none"
      tabIndex={0}
    >
      <div className="h-1/2 w-auto relative">
        <Image className="" src={img} height={300} width={300} alt={title} />
      </div>
      <div className="h-1/2 w-auto relative">
        <Image
          className=""
          src={img}
          height={300}
          width={300}
          alt={title}
        />
      </div>
    </div>
  );
}

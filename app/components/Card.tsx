
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";

export default function Card({ img, title, id }: { img: string;
  title: string;
  id: string; }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(id);

  return (
    <div
    key={id}
    className='inline-block w-40 m-2 select-none'
           tabIndex={0}
      >
      <Image src={img} height={200} width={500} alt={title} />
    </div>
  );
}

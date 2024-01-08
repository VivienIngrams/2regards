
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";

export default function Card({ img, title, id, width }: { img: string;
  title: string;
  id: string;
  width?: number; }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(id);

  return (
    <div
    key={id}
    // className='flex justify-center items-center'
      style={{
       
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      <Image src={img} height={500} width={500} alt={title} />
    </div>
  );
}

// const Card = ({ card }: { card: CardType }) => {
//   return (
//     <div className={` relative h-[400px] w-[800px] overflow-hidden inset-0`}>
//       <Image
//         // className="object-fill"
//         src={card.img}
//         fill
//         // height={600}
//         // width={card.width || 600}
//         alt=""
//         // sizes="33vw sm:50vw md:75vw lg:100vw"
//       />
//     </div>
//   );
// };
type CardType = {
  img: string;
  title: string;
  id: string;
  width?: number;
};
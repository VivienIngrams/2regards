'use client'

import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { LeftArrow, RightArrow } from "./components/Arrows";
import Card from "./components/Card";
import usePreventBodyScroll from "./components/usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

const Arrows = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}
  >
    Some other content
    <div style={{ marginLeft: "10px", display: "flex" }}>
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);

function Home() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      {/* <Header /> */}
      <div className="example" style={{ paddingTop: "100px", height: "150vh" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            // or on top
            // Header={Arrows}
            Footer={Arrows}
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default Home;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}




// import Image from "next/image";
// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import Header from "./components/Header";

// export default function Home() {
//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//   return (
//     <main className="font-italiana max-h-screen">
//       <section ref={targetRef} className="relative h-[300vh] bg-stone-200">
//         <div className="sticky top-0 ml-16 flex h-screen items-center overflow-hidden">
//           <Header/>
//           <motion.div style={{ x }} className="flex w-full gap-5 overflow-hidden">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

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

// type CardType = {
//   img: string;
//   title: string;
//   id: number;
//   width?: number;
// };

// const cards: CardType[] = [
//   {
//     img: "/images/2regards.png",
//     title: "Title 1",
//     id: 1,
//     width: 300,
//   },
//   {
//     img: "/images/lights.png",
//     title: "Title 2",
//     id: 2,
//     width: 100,
//   },
//   {
//     img: "/images/waves.png",
//     title: "Title 3",
//     id: 3,
//     width: 200,
//   },
//   {
//     img: "/images/2regards.png",
//     title: "Title 1",
//     id: 4,
//     width: 500,
//   },
//   {
//     img: "/images/bottles.png",
//     title: "Title 2",
//     id: 5,
//     width: 500,
//   },
//   {
//     img: "/images/2regards.png",
//     title: "Title 3",
//     id: 6,
//     width: 800,
//   },
//   {
//     img: "/images/waves.png",
//     title: "Title 1",
//     id: 7,
//     width: 500,
//   },
//   {
//     img: "/images/2regards.png",
//     title: "Title 2",
//     id: 8,

//   },
//   {
//     img: "/images/waves.png",
//     title: "Title 1",
//     id: 7,
//     width: 500,
//   },
//   {
//     img: "/images/2regards.png",
//     title: "Title 2",
//     id: 8,

//   },
 
// ];

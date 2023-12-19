"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <main className="font-italiana max-h-screen">
      <section
        ref={targetRef}
        className="relative h-[300vh] bg-stone-200 font-italiana"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex-col gap-2">
            <div className="flex h-[28%]">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </div>
            <div className="flex h-[28%]">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </div>
            <div className="flex h-[28%]">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      
      className="group relative h-[250px] w-[250px] overflow-hidden"
    >
      <Image key={card.id}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        src={card.img}
        width={400}
        height={200}
        alt=""
        layout="responsive"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  img: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: 1,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: 2,
  },
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: 3,
  },
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: 4,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: 5,
  },
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: 6,
  },
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: 7,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: 8,
  },
  {
    img: "/images/2regards.png",
    title: "Title 9",
    id: 9,
  },
];

//   return (
//     <main className="font-italiana w-screen max-h-screen">
//       <div className="w-[50px] h-screen left-0 top-0  bg-stone-200 ">
//         <div className="left-0 top-0 fixed min-h-screen border-r-black border-2"/>
//         <div className="left-[10px] top-[50%] bg-stone-200 fixed origin-top-left -rotate-90 text-black text-2xl ">
//           2regards
//         </div>
//       </div>
//       <div className=" h-[85%] left-[76px] top-[70px] flex-col absolute">
//         <div className="h-[28%]  justify-start gap-5 inline-flex">
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         </div>
//         <div className="h-[28%]  justify-start items-end gap-5 inline-flex">
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         </div>
//         <div className="h-[28%] justify-start items-end gap-5 inline-flex">
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         <Image src="/images/2regards.png" width={400} height={200} alt=""/>
//         </div>
//       </div>
//       <div className="absolute left-[100px] bottom-0 justify-start items-start gap-14 inline-flex">
//         <div className="text-black text-[17px] font-normal leading-loose">
//           Products
//         </div>
//         <div className="text-black text-[17px] font-normal leading-loose">
//           Studio
//         </div>
//         <div className="text-black text-[17px] font-normal leading-loose">
//           Gallery
//         </div>
//         <div className="text-black text-[17px] font-normal leading-loose">
//           About
//         </div>
//         <div className="text-black text-[17px] font-normal leading-loose">
//           Contact
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <main className="font-italiana max-h-screen">
      <section
        ref={targetRef}
        className="relative h-[300vh] bg-stone-200"
      >
        <div className="sticky top-0 ml-16 flex h-screen items-center overflow-hidden">
        <header className="z-999 fixed  top-0 left-0 right-0">
      <div className=" left-0 top-0 w-screen h-[50px] ">
        <div className="w-screen h-[50px]  border-b-black border-2" />
      </div>
      <div className="w-[50px] z-999 fixed h-screen left-0 top-0">
        <div className="left-0 top-0 relative min-h-screen border-r-black border-2 bg-stone-200" />
        <div className="left-[10px] absolute top-[50%] bg-stone-200 origin-top-left -rotate-90 text-black text-2xl">
          2regards
        </div>
      </div>
    </header>
          <motion.div style={{ x }} className="flex gap-5 overflow-hiddeny">
          
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            
          </motion.div>
        </div>
      </section>
      </main>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className={`relative h-[200px]`}>
      <Image
      className="object-cover"
        src={card.img}
        height={600}
        width={800}
        alt=""
        sizes="33vw sm:50vw md:75vw lg:100vw"
      />
    </div>
  );
};


type CardType = {
  img: string;
  title: string;
  id: number;
  width?: string;
};

const cards: CardType[] = [
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: 1,
    width: "300px"
  },
  {
    img: "/images/lights.png",
    title: "Title 2",
    id: 2,
      width: "100px"},
  {
    img: "/images/waves.png",
    title: "Title 3",
    id: 3,
      width: "600px"},
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: 4,
      width: "600px"},
  {
    img: "/images/bottles.png",
    title: "Title 2",
    id: 5,
    width: "600px"},
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: 6,
    width: "600px" },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: 7,
      width: "600px"},
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: 8,
      width: "600px"},
  {
    img: "/images/bottles.png",
    title: "Title 9",
    id: 9,
      width: "600px"},
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: 7,
      width: "600px"},
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: 8,
      width: "600px"},
  {
    img: "/images/bottles.png",
    title: "Title 9",
    id: 9,
      width: "600px"},
];

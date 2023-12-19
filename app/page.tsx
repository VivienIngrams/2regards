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
      
      className="group h-[225px] w-[350px] relative overflow-hidden"
   
    >
      <Image key={card.id}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        src={card.img}
        fill
        alt=""
        sizes="100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
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

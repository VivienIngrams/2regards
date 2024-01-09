"use client";

import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import Card from "./components/Card";
import usePreventBodyScroll from "./components/usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function Home() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const isMobileScreen = window.innerWidth <= 768;

  return (
    <>
        <div onMouseEnter={disableScroll} className="h-full">
          <ScrollMenu onWheel={onWheel} transitionBehavior="smooth" transitionDuration={isMobileScreen ? 500 : 3000}>
           
                {cards.map(({ img, title, id, width }) => (
                  <Card
                    img={img}
                    title={title}
                    id={id} // NOTE: itemId is required for track items
                    key={id}
                    width={width || 300}
                  />
                ))}
             
          </ScrollMenu>
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

type CardType = {
  img: string;
  title: string;
  id: string;
  width?: number;
};

const cards: CardType[] = [
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "1",
    width: 300,
  },
  {
    img: "/images/lights.png",
    title: "Title 2",
    id: "2",
    width: 100,
  },
  {
    img: "/images/waves.png",
    title: "Title 3",
    id: "3",
    width: 200,
  },
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "4",
    width: 500,
  },
  {
    img: "/images/bottles.png",
    title: "Title 2",
    id: "5",
    width: 500,
  },
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: "6",
    width: 800,
  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
  },
];

const cards2: CardType[] = [
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "1",
    width: 300,
  },
  {
    img: "/images/lights.png",
    title: "Title 2",
    id: "2",
    width: 100,
  },
  {
    img: "/images/waves.png",
    title: "Title 3",
    id: "3",
    width: 200,
  },
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "4",
    width: 500,
  },
  {
    img: "/images/bottles.png",
    title: "Title 2",
    id: "5",
    width: 500,
  },
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: "6",
    width: 800,
  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
  },
];

"use client";

import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import Card from "./components/Card";
import usePreventBodyScroll from "./components/usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: getId(ind) }));

function Home() {
  // const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="pl-8 pt-1 h-150vh">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            // or on top
            // Header={Arrows}
            // Footer={Arrows}
            onWheel={onWheel}
          >
            {cards.map(({ img, title, id }) => (
              <Card
                img={img}
                title={title}
                id={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
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

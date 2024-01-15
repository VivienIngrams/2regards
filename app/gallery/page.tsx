"use client";

import React, { useEffect, useState } from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import Card from "../components/Card";
import usePreventBodyScroll from "../components/usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function Gallery() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileScreen = window.innerWidth <= 768;
      setIsMobileScreen(newIsMobileScreen);
      console.log("isMobileScreen", newIsMobileScreen);
    };

    // Set initial value
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
        <div onMouseEnter={disableScroll} className="h-full">
          <ScrollMenu onWheel={onWheel} transitionBehavior="smooth" transitionDuration={isMobileScreen ? 500 : 4000}>
           
                {cards.map(({ img, title, id, width, url }) => (
                  <Card
                    img={img}
                    title={title}
                    id={id} // NOTE: itemId is required for track items
                    key={id}
                    width={width || 300}
                    url={url}
                  />
                ))}
             
          </ScrollMenu>
        </div>
    </>
  );
}
export default Gallery;

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
  url: string
};

const cards: CardType[] = [
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "1",
    width: 300,
    url: "/product"
  },
  {
    img: "/images/lights.png",
    title: "Title 2",
    id: "2",
    width: 100,
    url: "/product"

  },
  {
    img: "/images/waves.png",
    title: "Title 3",
    id: "3",
    width: 200,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "4",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/bottles.png",
    title: "Title 2",
    id: "5",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: "6",
    width: 800,
    url: "/product"

  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
    url: "/product"

  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
    url: "/product"

  },
];

const cards2: CardType[] = [
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "1",
    width: 300,
    url: "/product"
  },
  {
    img: "/images/lights.png",
    title: "Title 2",
    id: "2",
    width: 100,
    url: "/product"

  },
  {
    img: "/images/waves.png",
    title: "Title 3",
    id: "3",
    width: 200,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 1",
    id: "4",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/bottles.png",
    title: "Title 2",
    id: "5",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 3",
    id: "6",
    width: 800,
    url: "/product"

  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
    url: "/product"

  },
  {
    img: "/images/waves.png",
    title: "Title 1",
    id: "7",
    width: 500,
    url: "/product"

  },
  {
    img: "/images/2regards.png",
    title: "Title 2",
    id: "8",
    url: "/product"

  },
];
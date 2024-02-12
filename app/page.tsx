"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import ProductCards from "./components/ProductCards";
import usePreventBodyScroll from "./components/usePreventBodyScroll";
import { productData } from "./data";
import { RightArrow } from "./components/Arrows";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function Home() {
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

  // Split the productData array into two halves
  const halfLength = Math.ceil(productData.length / 2);
  const firstHalf = productData.slice(0, halfLength);
  const secondHalf = productData.slice(halfLength);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        onMouseEnter={disableScroll}
        className="h-full products-container"
      >
        <ScrollMenu
          onWheel={onWheel}
          RightArrow={RightArrow}
          transitionBehavior="smooth"
          transitionDuration={isMobileScreen ? 500 : 5000}
        >
          {firstHalf.map(({ title, id, url, images }) => (
            <ProductCards
              img={images.image1.url}
              title={title}
              id={id}
              key={id}
              width={images.image1.width}
              url={url}
            />
          ))}
        </ScrollMenu>
        <ScrollMenu
          onWheel={onWheel}
          RightArrow={RightArrow}
          transitionBehavior="smooth"
          transitionDuration={isMobileScreen ? 500 : 5000}
        >
          {secondHalf.map(({ title, id, url, images }) => (
            <ProductCards
              img={images.image1.url}
              title={title}
              id={id}
              key={id}
              width={images.image1.width}
              url={url}
            />
          ))}
        </ScrollMenu>
      </motion.div>
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

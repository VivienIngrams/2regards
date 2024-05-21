
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import ProductCards from "./ProductCards";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { RightArrow } from "./Arrows";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface Product {
  title: string;
  subtitle: string;
  slug: string;
  videoLink: string;
  images: { imageUrl: string; position: string; size: string; mainImage: boolean }[];
}

interface HomeClientProps {
  productData: Product[];
}

const HomeClient: React.FC<HomeClientProps> = ({ productData }) => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileScreen = window.innerWidth <= 768;
      setIsMobileScreen(newIsMobileScreen);
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
          {firstHalf.map(({ title, images }, index) => {
            let mainImage = images.find((image) => image.mainImage);
            if (!mainImage) {
                mainImage = images[0];}
            return (
              <ProductCards
                img={mainImage.imageUrl}
                title={title}
                id={index.toString()}
                key={index}
                width={mainImage?.size}
                url={mainImage?.imageUrl}
              />
            );
          })}
        </ScrollMenu>
        <ScrollMenu
          onWheel={onWheel}
          RightArrow={RightArrow}
          transitionBehavior="smooth"
          transitionDuration={isMobileScreen ? 500 : 5000}
        >
          {secondHalf.map(({ title, images }, index) => {
            let mainImage = images.find((image) => image.mainImage);
            if (!mainImage) {
                mainImage = images[0];}
            return (
              <ProductCards
                img={mainImage?.imageUrl}
                title={title}
                id={(halfLength + index).toString()}
                key={halfLength + index}
                width={mainImage?.size}
                url={mainImage?.imageUrl}
              />
            );
          })}
        </ScrollMenu>
      </motion.div>
    </>
  );
};

export default HomeClient;

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

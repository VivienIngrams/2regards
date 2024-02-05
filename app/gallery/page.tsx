"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import GalleryCards from "../components/GalleryCards";
import usePreventBodyScroll from "../components/usePreventBodyScroll";
import { galleryData } from "../data";

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
       <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{duration: 1}}
        onMouseEnter={disableScroll}
        className="h-full"
      >
          <ScrollMenu onWheel={onWheel} transitionBehavior="smooth" transitionDuration={isMobileScreen ? 500 : 4000}>
           
                {galleryData.map(({ images, title, id, url }) => (
                  <GalleryCards
                    img={images.image1}
                    title={title}
                    id={id} 
                    key={id}
                    url={url}
                  />
                ))}
             
          </ScrollMenu>
        </motion.div>
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

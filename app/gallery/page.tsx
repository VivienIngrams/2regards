"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import GalleryCards from "../components/GalleryCards";
import usePreventBodyScroll from "../components/usePreventBodyScroll";
import { RightArrow } from "../components/Arrows";
import { GalleryData as fetchGalleryData } from "../components/HomeServer";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface GalleryDataItem {
  title: string;
  subtitle: string;
  descritpion: string;
  poster: string;
  slug: string;
  videoLink: string;
  images: {
    imageUrl: string;
    position: string;
    size: string;
  }[];
}

const Gallery: React.FC = () => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [galleryData, setGalleryData] = useState<GalleryDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGalleryData();
      setGalleryData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileScreen = window.innerWidth <= 768;
      setIsMobileScreen(newIsMobileScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

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
        className="h-full gallery-container -ml-6"
        
      >
          <ScrollMenu onWheel={onWheel}    RightArrow={RightArrow} transitionBehavior="smooth" transitionDuration={isMobileScreen ? 500 : 4000}>
           
                {galleryData.map(({ poster, title, slug, }) => (
                  <GalleryCards
                    img={poster}
                    title={title}
                    id={slug}
                    key={slug}
                    url={`/gallery/${slug}`}
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

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowBack from "/public/ArrowBack.svg";
import ArrowForward from "/public/ArrowForward.svg";
import { urlForImage } from "../../sanity/lib/image";

type ImageType = {
  imageUrl: URL;
  position: string;
  size: string;
  mainImage: boolean;
};

type ProductDataType = {
  title: string;
  subtitle?: string;
  slug: string;
  videoLink?: string;
  images: ImageType[];
};

type ProductClientProps = {
  productData: ProductDataType;
  productSlugs: string[];
};

const ProductClient: React.FC<ProductClientProps> = ({
  productData,
  productSlugs,
}) => {
  const { title, subtitle, videoLink, images, slug } = productData;
  const currentIndex = productSlugs.indexOf(slug);
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : productSlugs.length - 1;
  const nextIndex =
    currentIndex < productSlugs.length - 1 ? currentIndex + 1 : 0;

  return (
    <div className="relative top-2 mr-8 lg:mr-16 text-neutral-500 text-base md:text-xl h-full">
      {/* Nav buttons */}
      <div className="fixed md:hidden h-12 w-full top-4 left-5 z-50 bg-stone-200" />
      <div className="fixed z-50 top-6 left-6 md:left-10 md:top-10 cursor-pointer">
        <Link className="text-center m-2 text-black font-italiana" href="/">
          Back
        </Link>
      </div>
      <div className="fixed z-50 right-6 top-6 md:right-10 md:top-10">
        <div className="flex justify-between">
          <div className="flex cursor-pointer">
            <Link href={`/product/${productSlugs[prevIndex]}`} className="p-1">
              <Image
                priority
                src={ArrowBack}
                height={20}
                alt="Previous product"
              />
            </Link>
          </div>
          <div className="flex flex-col w-4 md:w-10 h-10">
            <div className="h-1/2"> </div>
            <div className="border-t-[1px] border-black h-1/2"></div>
          </div>
          <div className="flex items-end cursor-pointer">
            <Link href={`/product/${productSlugs[nextIndex]}`} className="p-1">
              <Image
                priority
                src={ArrowForward}
                height={20}
                alt="Next product"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>

      {/* Title */}
      <div className="z-25 flex flex-col absolute -top-10 md:top-0 w-full items-center justify-center text-black">
        <div className="max-w-[300px]">
          <h1 className="text-3xl lg:text-6xl xl:text-[80px] font-italiana text-center lg:leading-[26px] xl:leading-[40px] tracking-tighter">
            {title}
          </h1>
        </div>
        <div className="pt-1 lg:ml-[250px]">
          <h2 className="text-xl xl:text-3xl leading-[0.8em] font-italiana text-center tracking-tighter">
            {subtitle}
          </h2>
        </div>
      </div>
      <div
        className={`md:grid md:grid-cols-5 z-400 pl-1 w-full min-h-full md:h-[75vh] mt-[15vh] md:mt-[2vh] `}
      >
        {images.map((image, index) => {
          // Default values for each image based on the provided configurations
          const defaultConfigurations = [
            {
              position: " justify-start md:items-center ",
              size: "mt-[5vh] h-[45vh] xs:h-[55vh] sm:h-[70vh] md:w-[20vw] md:h-[50vh] 2xl:w-[20vw] 2xl:h-[60vh] md:-mr-[6vw]",
            },
            {
              position: "justify-end md:items-start md:mr-[4vw]",
              size: "max-w-[50vw] h-[30vh] xs:h-[50vh] sm:h-[50vh] md:w-[15vw] md:h-[40vh] 2xl:w-[15vw]  md:-ml-[2vw]",
            },
            {
              position: " justify-start md:items-end",
              size: "max-w-[50vw] h-[30vh] xs:h-[40vh]  md:w-[15vw] md:h-[40vh] 2xl:w-[15vw] md:-ml-[8vw] md:mr-[8vw] md:mb-2",
            },
            {
              position: "justify-end md:items-center ",
              size: "mt-[6vh] md:mt-0 h-[25vh] xs:w-[75vw] xs:h-[30vh] md:w-[70vw] md:h-[45vh] 2xl:w-[40vw] 2xl:h-[50vh] md:-ml-[15vw] md:-mr-[2vw] xl:-mr-[5vw]",
            },
            {
              position:
                "pb-12 md:mt-10 justify-start md:items-start md:justify-end ",
              size: "h-[45vh] xs:h-[55vh] md:w-[18vw] md:h-[40vh] xl:w-[15vw] ",
            },
          ];

          // Assign default values if the current values are empty strings or null
          const position =
            image.position || defaultConfigurations[index].position;
          const size = image.size || defaultConfigurations[index].size;

          return (
            <div
              key={index}
              className={`flex flex-row ${position} -mt-[2vh] md:mt-0 z-400`}
              style={{ zIndex: 10 - index }}
            >
              <div
                className={`relative ${size} w-[70vw] xs:w-[75vw] sm:w-[60vw] `}
              >
                <Image
                  className="absolute object-cover overflow-hidden border-[1px] border-black shadow-md shadow-neutral-500"
                  src={urlForImage(image.imageUrl as any)}
                  alt={title}
                  fill
                  sizes="90vw sm:60vw md:30vw"
                />
              </div>
            </div>
          );
        })}

        {videoLink && (
          <div className="z-500 md:fixed md:bottom-10 md:right-10 relative flex flex-col items-end justify-center m-2">
            <Link
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white font-italiana text-xl text-black h-8 px-4 rounded "
            >
              Watch video
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductClient;
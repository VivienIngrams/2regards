import React from "react";

import Image from "next/image";
import Link from "next/link";
import ArrowBack from "/public/ArrowBack.svg";
import ArrowForward from "/public/ArrowForward.svg";
import exhibitionData from "../../data";

const Exhibition = ({ params }: { params: { exhibitionId: string } }) => {
  const currentIndex = exhibitionData.findIndex(
    (exhibition) => exhibition.id === params.exhibitionId
  );

  // If the exhibition is not found, you can handle it accordingly
  if (currentIndex === -1) {
    return <p>exhibition not found</p>;
  }

  const { title, subtitle, description, videoLink, images } =
    exhibitionData[currentIndex];

  // Calculate indices for previous and next exhibitions
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : exhibitionData.length - 1;
  const nextIndex =
    currentIndex < exhibitionData.length - 1 ? currentIndex + 1 : 0;

  return (
    <div className="relative mr-8 lg:mr-16 text-neutral-500 text-base md:text-xl h-full">
      {/* Nav buttons */}
      <div className="fixed z-100 top-6 left-6 md:left-10 md:top-10  cursor-pointer">
        <Link className="text-center m-2 text-black font-italiana" href="/gallery">
          Back
        </Link>
      </div>
      <div className=" fixed right-6 top-6 md:right-12 md:top-12">
        <div className="flex justify-between">
          <div className="flex cursor-pointer">
            <Link
              href={`/gallery/${exhibitionData[prevIndex].id}`}
              className="p-1"
            >
              <Image
                priority
                src={ArrowBack}
                height={20}
                alt="Previous exhibition"
              />
            </Link>
          </div>
          <div className="flex flex-col w-4 md:w-10 h-10">
            <div className=" h-1/2"> </div>
            <div className="border-t-[1px] border-black h-1/2"></div>
          </div>
          <div className="flex items-end cursor-pointer">
            <Link
              href={`/gallery/${exhibitionData[nextIndex].id}`}
              className="p-1"
            >
              <Image
                priority
                src={ArrowForward}
                height={20}
                alt="Next exhibition"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-100" />
      </div>

      {/* Title */}
      <div className="hidden z-10 lg:flex lg:absolute py-2 lg:m-12 w-full  items-center justify-center  text-neutral-400">
        <div className="max-w-[200px]">
          <h1 className="lg:text-6xl xl:text-[80px] font-normal font-italiana text-center lg:leading-[26px] xl:leading-[38px] tracking-tighter">
           Exhibition
            {params.exhibitionId}
          </h1>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 min-h-full md:max-h-[86vh]">
        {/* Left/top side of page */}
        <div className="grid grid-rows-3 w-full h-[65vh] md:h-[50vh] lg:h-[90vh]">
          <div className="z-1 mt-8 lg:pl-12 flex relative h-full ">
            <Image
              className="object-fill overflow-visible absolute"
              src={images.image1}
              height={100}
              width={200}
              alt={title}
            />
          </div>
          <div className="z-30 md:z-2 flex relative h-full justify-end">
            <Image
              className=" absolute"
              src={images.image2}
              width={200}
              height={200}
              alt={title}
            />
          </div>
          <div className="z-1 md:z-3 md:pl-28 flex justify-center h-full relative">
            <Image
              className=" absolute bottom-0"
              src={images.image3}
              width={200}
              height={200}
              alt={title}
            />
          </div>
        </div>

        {/* Right/bottom side of page */}
        <div className="flex md:flex-col items-center justify-center md:h-[40vh] lg:h-[50vh] xl:h-[70vh] lg:mt-[20vh] lg:ml-[10vw] xl:ml-[15vw] xl:mr-[5vw]">
          <div className="mx-auto max-w-sm">
            <h1 className="font-italiana py-4 text-4xl text-black leading-1 tracking-tight">
              {subtitle}
            </h1>
            <p className="text-justify lg:text-left text-sm xl:text-base mt-2 md:leading-tight">
              {description}
            </p>
            <div className="py-4"></div>
            <Link
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white font-italiana text-xl text-black h-8 px-4 border border-black rounded "
            >
              Watch video
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;

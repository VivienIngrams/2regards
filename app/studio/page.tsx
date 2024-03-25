"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Studio = () => {
  return (
    <div className="relative mr-8 md:mr-12 lg:mr-16 text-neutral-500 text-base md:text-xl h-full">
      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>

      {/* Title */}
      <div className="pt-4 lg:pt-6 pr-5 xs:pr-0 z-25 flex absolute max-w-[80vw] md:max-w-[90vw] w-full  items-center justify-center  text-black">
        <div className="">
          <h1 className="text-3xl lg:text-6xl xl:text-[80px] font-normal font-italiana text-center lg:leading-[26px] xl:leading-[38px] tracking-tighter">
            Studio
          </h1>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-5 min-h-full lg:max-h-[86vh]">
        {/* Left/top side of page */}
        <div
          className={` col-span-3 w-full min-h-full lg:h-[90vh] lg:grid lg:grid-rows-3 mt-[10vh] mb-4 lg:mt-[2vh]`}
        >
          {/* 1st section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row justify-start -mt-[3vh] lg:mt-0 "
          >
            <div className="relative mt-[10vh] lg:mt-[2vh] h-[25vh] xs:h-[35vh] md:h-[30vh] lg:h-[30vh] lg:w-[30vw] xl:w-[27vw] xl:h-[38vh] w-[70vw] xs:w-[75vw] sm:w-[60vw]">
              <Image
                className="object-cover overflow-hidden absolute border-[1px] border-black shadow-md shadow-neutral-500"
                
                src="/images/studio/ProductStudio.jpg"
                fill
                alt="Product Studio"
                sizes="90vw sm:60vw md:30vw"
              />
            </div>
          </motion.div>

          {/* 2nd section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row justify-end lg:items-center lg:justify-end -mt-[3vh] lg:mb-[14vh] "
          >
            <div className="relative w-[70vw] xs:w-[75vw] sm:w-[60vw] h-[25vh] xs:h-[35vh] md:w-[50vw] md:h-[48vh] lg:w-[25vw] lg:h-[50vh] xl:w-[25vw] xl:h-[40vh] ">

              <Image
                className="object-cover overflow-hidden absolute border-[1px] border-black shadow-md shadow-neutral-500"
                src="/images/studio/AnalogLab.jpg"
                fill
                alt="Analog laboratory"
                sizes="90vw sm:60vw md:30vw"
              />
            </div>
          </motion.div>

          {/* 3rd section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row lg:items-end lg:justify-center -mt-4 lg:mb-16"
          >
            <div className="relative  w-[70vw] xs:w-[75vw] sm:w-[60vw] h-[22vh] xs:h-[30vh] md:w-[20vw] lg:w-[22vw] xl:h-[32vh]">

              <Image
                className="object-cover overflow-hidden absolute border-[1px] border-black shadow-md shadow-neutral-500"
                src="/images/studio/Workshops.jpg"
                fill
                alt="Paulo Bastos"
                sizes="90vw sm:60vw md:30vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Right/bottom side of page */}
        <div className="col-span-2 flex flex-col items-end justify-center h-full">
          <motion.div className="px-24  lg:flex flex-col justify-center items-start">
            <div className="flex justify-center items-center ">
              <h1 className="font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                Analog Laboratory
              </h1>
            </div>
            <p className="">
              Also 2regards atelier features an analog photography lab for
              development and printing. It is also possible to rent this space
              by the hour or day. Click here to discover our rates.
            </p>
            <div className="flex flex-col justify-end items-end">
              <Link
                href="https://www.youtube.com/shorts/U5_XJuAa-tk"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-1 m-1 bg-white  text-md text-black h-6 px-2  rounded "
              >
                Teaser
              </Link>
            </div>
          </motion.div>
          <div className="px-24 col-span-3 lg:flex flex-col justify-center items-start">
            <div className="flex justify-center items-center ">
              <h1 className="font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                Product Studios
              </h1>
            </div>
            <p className="">
              2regards atelier offers professional quality photographic services
              to meet all your needs. We capture your studio shots for
              e-commerce, ranging from simple cutout packshots on a white
              background to creatively staged ambient photos. Our team of
              professional photographers welcomes you to their fully equipped
              studio in Porto.
            </p>
          </div>
          <div className="px-24 col-span-3 lg:flex flex-col justify-center items-start">
            <div className="flex justify-center items-center ">
              <h1 className="font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                Workshops
              </h1>
            </div>
            <p className="">
              Throughout the year, we organize workshops for participants to
              explore or deepen their knowledge in analog photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;

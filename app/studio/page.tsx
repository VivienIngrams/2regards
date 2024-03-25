"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Studio = () => {
  return (
    <div className=" lg:mr-12 lg:max-h-[92vh]  text-neutral-500 text-sm leading-tight text-justify lg:text-left">
      {/* Border right */}
      <div className="w-4 lg:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 lg:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>

      {/* Title */}
      <div className="pt-4 lg:pt-12 pr-5 xs:pr-0 z-25 flex absolute max-w-[80vw] md:max-w-[90vw] w-full  items-center justify-center  text-black">
        <div className="">
          <h1 className="text-3xl lg:text-6xl xl:text-[80px] font-normal font-italiana text-center lg:leading-[26px] xl:leading-[38px] tracking-tighter">
            Studio
          </h1>
        </div>
      </div>

      {/* Grid 3 rows */}
      <div className="pt-24 pr-9 lg:pr-0 min-h-[92vh] flex flex-col justify-around lg:max-h-[85vh] lg:grid lg:grid-rows-3">
        {/* 1st section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-2 "
        >
          <div className=" relative flex flex-col md:flex-row -my-8">
            <div className="relative flex w-full h-[25vh] xs:h-[30vh] md:w-[300px] md:h-[35vh] lg:w-[370px]  xl:w-[400px]  2xl:w-[340px] 2xl:h-[210px] 3xl:w-[380px] 3xl:h-[250px]">
              <Image
                className="border-[1px] border-black shadow-md shadow-neutral-500"
                src="/images/studio/AnalogLab.jpg"
                fill
                alt="Analog laboratory"
              />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="py-2 xs:py-6 md:pl-12 font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                Analog Laboratory
              </h1>
            </div>
          </div>
          <div className="lg:flex flex-col justify-center items-end">
            <p className="mb-2 md:my-4">
              Also 2regards atelier features an analog photography lab for
              development and printing. It is also possible to rent this space
              by the hour or day. Click here to discover our rates.
            </p>
            <div className="flex flex-col justify-center items-center">
              <Link
                href="https://www.youtube.com/shorts/U5_XJuAa-tk"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-1 m-1 bg-white  text-md text-black h-6 px-2  rounded "
              >
                Teaser
              </Link>
            </div>
          </div>
        </motion.div>

        {/*2nd section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-2 "
        >
          <div className="lg:flex flex-col justify-center items-end">
            <p className="mt-2">
              2regards atelier offers professional quality photographic services
              to meet all your needs. We capture your studio shots for
              e-commerce, ranging from simple cutout packshots on a white
              background to creatively staged ambient photos. Our team of
              professional photographers welcomes you to their fully equipped
              studio in Porto.
            </p>
          </div>
          <div className="flex justify-end lg:justify-start ">
            <div className="flex items-center">
              <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                Product Studios
              </h1>
            </div>
            <div className="relative flex w-full h-[25vh] xs:h-[30vh] md:w-[300px] md:h-[35vh] lg:w-[370px]  xl:w-[400px]  2xl:w-[340px] 2xl:h-[210px] 3xl:w-[380px] 3xl:h-[250px]">
              <Image
                className="border-[1px] border-black shadow-md shadow-neutral-500"
                src="/images/studio/ProductStudio.jpg"
                fill
                alt="Product Studio"
              />
            </div>
          </div>
        </motion.div>

        {/*3rd section */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-2 "
        >
          <div className=" relative flex flex-col md:flex-row -my-8">
            <div className="relative flex w-full h-[25vh] xs:h-[30vh] md:w-[300px] md:h-[35vh] lg:w-[370px]  xl:w-[400px]  2xl:w-[340px] 2xl:h-[210px] 3xl:w-[380px] 3xl:h-[250px]">
              <Image
                className="border-[1px] border-black shadow-md shadow-neutral-500"
                src="/images/studio/Workshops.jpg"
                fill
                alt="Paulo Bastos"
              />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="py-2 xs:py-6 md:pl-12 font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                Workshops
              </h1>
            </div>
          </div>
          <div className="lg:flex flex-col justify-center items-end">
            <p className="mb-2 md:my-4">
              Throughout the year, we organize workshops for participants to
              explore or deepen their knowledge in analog photography.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Studio;

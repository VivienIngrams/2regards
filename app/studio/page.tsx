"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Studio = () => {
  return (
    <div className="mr-8 lg:mr-16 lg:max-h-[92vh]  text-neutral-500 text-sm leading-tight text-justify lg:text-left">
      {/* Border right */}
      <div className="w-4 lg:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 lg:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>
      <div className="min-h-[92vh] flex flex-col justify-around lg:max-h-[90vh]">
        {/* Top section */}
        <div className=" lg:grid lg:grid-cols-2">
          {/* Title */}
          <div className="m-16 lg:m-2 text-center flex justify-center items-center text-black">
            <div className="">
              <h1 className="text-5xl sm:text-[80px] font-normal font-italiana leading-[38px] tracking-tighter">
                Studio
              </h1>
            </div>
          </div>

          {/* 1st, Top right section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="py-8 md:py-4 lg:-ml-4 lg:mr-10 lg:max-w-[30vw]"
          >
            <div className="flex border-b-2 border-black ">
              <div className="flex min-w-[70px] lg:min-w-[200px]">
                <Image
                  className="border-[1px] border-black"
                  src="/images/studio/AnalogLab.jpg"
                  width={250}
                  height={220}
                  alt="Paulo Bastos"
                />
              </div>
              <div className="flex items-center">
                <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                  Analog Laboratory
                </h1>
              </div>
            </div>
            <p className="mt-2">
              Also 2regards atelier features an analog photography lab for
              development and printing. It is also possible to rent this space
              by the hour or day. Click here to discover our rates.
            </p>
          </motion.div>
        </div>

        {/*2nd, Left section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8 md:py-0 lg:grid lg:grid-cols-2"
        >
          <div className="mt-6 lg:-mt-4 lg:ml-14 lg:mr-10 lg:max-w-[30vw]">
            <div className="flex justify-end lg:justify-start border-b-2 border-black ">
              <div className="flex lg:hidden items-center">
                <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-right text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                  Product Studios
                </h1>
              </div>
              <div className="flex min-w-[70px] lg:min-w-[200px]">
                <Image
                  className="border-[1px] border-black"
                  src="/images/studio/ProductStudio.jpg"
                  width={250}
                  height={200}
                  alt="Paulo Bastos"
                />
              </div>
              <div className="hidden lg:flex items-center">
                <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                  Product Studios
                </h1>
              </div>
            </div>
            <p className="mt-2">
              2regards atelier offers professional quality photographic services
              to meet all your needs. We capture your studio shots for
              e-commerce, ranging from simple cutout packshots on a white
              background to creatively staged ambient photos. Our team of
              professional photographers welcomes you to their fully equipped
              studio in Porto.
            </p>
          </div>
          <div className="ml-14 mr-10"></div>
        </motion.div>

        {/*3rd, Bottom right section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8 md:-pt-8 lg:-mt-24 lg:grid lg:grid-cols-2"
        >
          <div className="mt-6 lg:ml-16 lg:mr-10"></div>
          <div className="lg:ml-32 lg:-mt-6 lg:max-w-[30vw]">
            <div className="flex border-b-2 border-black ">
              <div className="flex min-w-[70px] lg:min-w-[200px]">
                <Image
                  className="border-[1px] border-black"
                  src="/images/studio/Workshops.jpg"
                  width={230}
                  height={200}
                  alt="Paulo Bastos"
                />
              </div>
              <div className="flex items-center">
                <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                  Workshops
                </h1>
              </div>
            </div>
            <p className="mt-2">
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

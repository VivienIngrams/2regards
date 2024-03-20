"use client";

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const Studio = () => {
  return (
    <div className="mr-8 lg:mr-12 lg:max-h-[92vh]  text-neutral-500 text-sm leading-tight text-justify lg:text-left">
      {/* Border right */}
      <div className="w-4 lg:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 lg:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      <div className="w-4 lg:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 lg:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>
      <div className="min-h-[92vh] flex flex-col justify-around md:max-h-[85vh] lg:grid lg:grid-rows-3 min-w-full">
        {/* Top section */}
        <div className=" lg:grid lg:grid-cols-2 lg:max-h-[33vh] 2xl:pt-4">
          {/* Title */}
          <div className="m-16 text-center flex justify-center items-center text-black lg:w-[45vw] lg:mb-32">
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
            className=" "
          >
            <div className=" relative flex border-b-2 border-black lg:max-w-[35vw]">
                <Link
                  href="https://www.youtube.com/shorts/U5_XJuAa-tk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block absolute bottom-0 right-0 p-1 m-1 bg-white font-italiana text-md text-black h-6 px-2 border border-black rounded "
                >
                  Teaser
                </Link>
                <div className="relative flex w-[175px] h-[100px] xs:w-[200px] xs:h-[130px] md:w-[260px] md:h-[170px] lg:w-[270px]  xl:w-[320px] xl:h-[200px] 2xl:w-[350px] 2xl:h-[220px] 3xl:w-[380px] 3xl:h-[250px]">
                <Image
                  className="border-[1px] border-black"
                  src="/images/studio/AnalogLab.jpg"
                  fill
                  alt="Paulo Bastos"
                />
              </div>
              <div className="flex items-center">
                <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                  Analog Laboratory
                </h1>{" "}
              </div>
            </div>
            <div className="min-w-[50vw]">
              <p className="my-2 lg:max-w-[30vw]">
                Also 2regards atelier features an analog photography lab for
                development and printing. It is also possible to rent this space
                by the hour or day. Click here to discover our rates.
              </p>
            </div>
          </motion.div>
          <Link
            href="https://www.youtube.com/shorts/U5_XJuAa-tk"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden bottom-0 right-0 p-1 m-1 bg-white font-italiana text-md text-black h-6 px-2 border border-black rounded "
          >
            Teaser
          </Link>
        </div>

        {/*2nd, Left section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 lg:pt-0 lg:grid lg:grid-cols-2 lg:max-h-[33vh]"
        >
          <div className=" lg:mx-4 lg:max-w-[35vw]">
            <div className="flex justify-end lg:justify-start border-b-2 border-black ">
              <div className="flex lg:hidden items-center">
                <h1 className="p-1 xs:p-6 max-w-[160px] font-italiana text-right text-xl xs:text-2xl sm:text-3xl text-black leading-1">
                  Product Studios
                </h1>
              </div>
              <div className="relative flex w-[175px] h-[100px] xs:w-[200px] xs:h-[130px] md:w-[260px] md:h-[170px] lg:w-[270px]  xl:w-[320px] xl:h-[200px] 2xl:w-[350px] 2xl:h-[220px] 3xl:w-[380px] 3xl:h-[250px]">
                <Image
                  className="border-[1px] border-black"
                  src="/images/studio/ProductStudio.jpg"
                  fill
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
          <div className=""></div>
        </motion.div>

        {/*3rd, Bottom right section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-12 lg:mb-12 lg:grid lg:grid-cols-2 lg:max-h-[33vh]"
        >
          <div className=""></div>
          <div className="lg:ml-16 lg:-mt-16  lg:max-w-[35vw]">
            <div className="flex border-b-2 border-black ">
            <div className="relative flex w-[175px] h-[100px] xs:w-[200px] xs:h-[130px] md:w-[260px] md:h-[170px] lg:w-[270px]  xl:w-[320px] xl:h-[200px] 2xl:w-[350px] 2xl:h-[220px] 3xl:w-[380px] 3xl:h-[250px]">
                <Image
                  className="border-[1px] border-black"
                  src="/images/studio/Workshops.jpg"
                  fill
                  alt="Paulo Bastos"
                />
              </div>
              <div className="flex items-center ">
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
    </div>
  );
};

export default Studio;

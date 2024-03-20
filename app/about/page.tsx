"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

const About = () => {
  return (
    <div className="sm:p-6 lg:p-12 mr-8 h-full lg:h-auto text-neutral-500 text-sm sm:text-base lg:text-md xl:text-lg leading-tight lg:leading-[22px] 2xl:leading-tight">
      {/* Border right */}
      <div className="w-4 lg:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 lg:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>

      {/* Main content */}
      <div className="h-[95vh] max-h-screen lg:h-[40vh] 2xl:h-[40vh] flex flex-col grow justify-around">
        <div className=" lg:grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="my-[2vh] ml-[25%] xs:ml-[45%] lg:mx-auto text-right leading-[1.2em] lg:text-left lg:max-w-[30vw]"
          >
            <p>
              <span className="text-3xl leading-none lg:leading-[22px]">D</span>edicated to
              creation and visual arts, 2regards Atelier was founded in Porto by
              the photographer Mathilde Cudeville and videographer Paulo Bastos.
              With a focus on advertising, they transform products into
              captivating visual stories that encapsulate the essence of a brand
              through photography, video and graphic design.
            </p>
          </motion.div>

          {/* Title desktop */}
          <div className="hidden lg:flex justify-center items-center m-4 ">
            {/* <div>
              <h1 className=" hidden lg:block text-6xl lg:text-[80px] font-normal font-italiana leading-[30px] lg:leading-[42px] tracking-tighter">
                2regards{" "}
              </h1>
              <h1 className="hidden lg:block text-6xl lg:text-[80px] font-normal font-italiana leading-[30px] lg:leading-[42px] tracking-tighter">
                Atelier
              </h1>
            </div> */}
            <Image
              src="/2regards-black.png"
              alt="2regards"
              width={300}
              height={200} />
          </div>

          {/* Title mobile */}
        </div>
        <div className="lg:hidden flex justify-center  m-4">
        <Image
              src="/2regards-black.png"
              alt="2regards"
              width={200}
              height={100} />
          {/* <div className="lg:hidden m-4 text-center text-black">
            <h1 className="lg:hidden text-4xl xs:text-6xl  font-normal font-italiana leading-[20px] xs:leading-[30px]  tracking-tighter">
              2regards{" "}
            </h1>
            <h1 className="lg:hidden text-5xl xs:text-6xl  font-normal font-italiana leading-[20px] xs:leading-[30px] tracking-tighter">
              Atelier
            </h1>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-[2vh] mr-[25%] xs:mr-[45%] lg:m-auto leading-[1.2em] text-left lg:max-w-[30vw]"
          >
            <p>
              <span className="text-3xl tracking-tighter leading-none lg:leading-[22px]">
                T
              </span>
              <span className="tracking-tighter leading-none">h</span>e Atelier features an
              art gallery welcoming local and international artists throughout
              the year. The space includes a commercial photography studio, an
              analog laboratory and post-production offices, where training
              sessions for analogue capture and development are facilitated.
            </p>
          </motion.div>
          <div className="lg:hidden flex justify-center pb-4">
            <div className=" p-2 cursor-pointer  m-2">
              <HiOutlineChevronDoubleDown />
            </div>
          </div>
        </div>
      </div>

      {/* Mat and Paulo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-28 lg:grid lg:grid-cols-2 leading-normal text-sm  text-justify lg:text-left"
      >
        {/* Mathilde */}
        <div className="sm:mr-8 lg:mr-20">
          <div className="flex border-b-2 border-black ">
            <div className="flex min-w-[85px]">
              <Image
                className="border-[1px] border-black"
                src="/images/Mathilde.jpeg"
                width={140}
                height={200}
                alt="Mathilde Cudeville"
              />
            </div>
            <div className="flex items-center ">
              <h1 className="p-3 lg:p-6 max-w-[160px] font-italiana text-3xl lg:text-4xl text-black leading-1">
                Mathilde Cudeville
              </h1>
            </div>
          </div>
          <p className="mt-2 pb-2 ">
            Mathilde Cudeville&rsquo;s artistic practice revolves around the
            photographic medium and silver printing, with her works oscillating
            between ambient photography and plastic photography.
          </p>
          <p className="pb-2">
            Mathilde absorbs the world around her and reflects it back with a
            highly personal poetic touch. She dissolves into the surroundings
            before revealing the most unusual elements, which are often the most
            expressive.{" "}
          </p>
          <p className="pb-2 ">
            Initially delving into insularity and isolated territories, notably
            through a documentary on the Saint-Pierre-et-Miquelon archipelago
            (&quot;Les onze mille vierges&quot;), she then engaged in a
            correspondence book, playing the exquisite corpse game with a writer
            in Paris. Subsequently, she embarked on a series of self-portraits
            (&quot;Rêverie Odisseia&quot;), baring herself both literally and
            figuratively. &quot;En suspension (S)&quot; follows a similarly
            liberated dual approach, using otherness as a vehicle, without
            artifice or mask.{" "}
          </p>
          <p> MICHEL LE ROUX, Poet and friend</p>
        </div>
        {/* Paulo */}
        <div className="py-10 sm:mr-6 lg:ml-12 lg:mr-10">
          <div className="flex border-b-2 border-black ">
            <div className="flex">
              <Image
                className="border-[1px] border-black  "
                src="/images/Paulo.jpeg"
                width={140}
                height={200}
                alt="Paulo Bastos"
              />
            </div>
            <div className="flex items-center">
              <h1 className="p-3 lg:p-6 max-w-[160px] font-italiana text-3xl lg:text-4xl text-black leading-1">
                Paulo Bastos
              </h1>
            </div>
          </div>
          <p className="mt-2">
            Paulo Bastos is a Portuguese video director based in Porto. After
            completing his higher education at HEI Lille in France, he worked as
            a civil engineering engineer. He expatriated to the USA, Central
            America, and the Nordic countries. His extensive travels fueled his
            passion for visual storytelling. In 2017, he embarked on a career as
            a video director. Currently, he collaborates with various clients in
            advertising, communication, and documentary projects through the
            company 2regards, which he co-founded with his partner Mathilde
            Cudeville.
          </p>
        
        </div>
      </motion.div>
        <div
          className="flex justify-center pb-12"
        >
          <Link
            href="https://www.youtube.com/shorts/_8F3bTh_rkg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-white font-italiana text-2xl text-black h-10 px-4 border border-black rounded "
          >
            2regards Atelier
          </Link>
        </div>
    </div>
  );
};

export default About;

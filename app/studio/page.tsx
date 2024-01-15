import React from "react";

import Image from "next/image";

const Studio = () => {
  return (
    <div className="md:py-12 mr-16 text-neutral-500 text-sm ">
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-100" />
      </div>
      <div className=" grid md:grid-cols-2">
        <div className="m-2 text-center text-black">
          <p className=" text-[80px] font-normal font-italiana leading-[38px] tracking-tighter">
            Studio
          </p>
        </div>
        <div className="-mt-10 -ml-8 mr-10">
          <div className="flex border-b-2 border-black ">
            <div className="flex">
              <Image
                className=""
                src="/images/Paulo2.jpeg"
                width={100}
                height={200}
                alt="Paulo Bastos"
              />
            </div>
            <div className="flex items-center">
              <h1 className="p-6 max-w-[160px] font-italiana text-4xl text-black leading-1">
                Analogic Studios
              </h1>
            </div>
          </div>
          <p className="mt-2">
            Paulo Bastos is a Portuguese video director based in Porto. After
            completing his higher education at HEI Lille in France, he worked as
            a civil engineering engineer. His extensive travels fueled his
            passion for visual storytelling. In 2017, he embarked on a career as
            a video director.
          </p>
        </div>
      </div>

     
      <div className="grid md:grid-cols-2 leading-normal text-sm">
        <div className="ml-14 mr-10">
          <div className="flex border-b-2 border-black ">
            <div className="flex">
              <Image
                className=""
                src="/images/Paulo2.jpeg"
                width={100}
                height={200}
                alt="Paulo Bastos"
              />
            </div>
            <div className="flex items-center">
              <h1 className="p-6 max-w-[160px] font-italiana text-4xl text-black leading-1">
                Workshops
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
        <div className="ml-14 mr-10"></div>
      </div>

      <div className="-mt-20 grid md:grid-cols-2 leading-normal text-sm">
        <div className="ml-14 mr-10"></div>
        <div className="ml-14 mr-10">
          <div className="flex border-b-2 border-black ">
            <div className="flex">
              <Image
                className=""
                src="/images/Paulo2.jpeg"
                width={100}
                height={200}
                alt="Paulo Bastos"
              />
            </div>
            <div className="flex items-center">
              <h1 className="p-6 max-w-[160px] font-italiana text-4xl text-black leading-1">
                Laboratory
              </h1>
            </div>
          </div>
          <p className="mt-2">
          He expatriated to the USA, Central
            America, and the Nordic countries. His extensive travels fueled his
            passion for visual storytelling. In 2017, he embarked on a career as
            a video director. Currently, he collaborates with various clients in
            advertising, communication, and documentary projects through the
            company 2regards, which he co-founded with his partner Mathilde
            Cudeville.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studio;

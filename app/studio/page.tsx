import React from "react";

import Image from "next/image";

const Studio = () => {
  return (
    <div className="mr-8 md:py-12 md:mr-16 md:max-h-[92vh]  text-neutral-500 text-sm text-justify md:text-left">
      {/* Border right */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-100" />
      </div>
      <div className="min-h-[92vh] md:flex flex-col justify-around">
        {/* Top section */}
        <div className=" md:grid md:grid-cols-2">
          {/* Title */}
          <div className="m-16 md:m-2 text-center flex justify-center items-center text-black">
            <div className="">
              <h1 className="text-5xl sm:text-[80px] font-normal font-italiana leading-[38px] tracking-tighter">
                Studio
              </h1>
            </div>
          </div>

          {/* 1st, Top right section */}
          <div className=" md:-ml-4 md:mr-10">
            <div className="flex border-b-2 border-black ">
              <div className="flex min-w-[70px]">
                <Image
                  className=""
                  src="/images/Paulo2.jpeg"
                  width={100}
                  height={200}
                  alt="Paulo Bastos"
                />
              </div>
              <div className="flex items-center">
                <h1 className="p-6 max-w-[160px] font-italiana text-2xl sm:4xl text-black leading-1">
                  Workshops
                </h1>
              </div>
            </div>
            <p className="mt-2">
              Throughout the year, we organize workshops for participants to
              explore or deepen their knowledge in analog photography.
            </p>
          </div>
        </div>

        {/*2nd, Left section */}
        <div className="mt-6 md:grid md:grid-cols-2 leading-normal text-sm">
          <div className="md:ml-14 md:mr-10">
            <div className="flex justify-end md:justify-start border-b-2 border-black ">
              <div className="flex md:hidden items-center">
                <h1 className="p-6 max-w-[160px] font-italiana text-right text-2xl sm:4xl text-black leading-1">
                  Product Studios
                </h1>
              </div>
              <div className="flex min-w-[70px]">
                <Image
                  className=""
                  src="/images/Paulo2.jpeg"
                  width={100}
                  height={200}
                  alt="Paulo Bastos"
                />
              </div>
              <div className="hidden md:flex items-center">
                <h1 className="p-6 max-w-[160px] font-italiana text-2xl sm:4xl text-black leading-1">
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
        </div>

        {/*3rd, Bottom right section */}
        <div className="mt-6 pb-10 md:-mt-16 md:grid md:grid-cols-2 leading-normal text-sm">
          <div className="md:ml-16 md:mr-10"></div>
          <div className="md:ml-14 md:mr-10">
            <div className="flex border-b-2 border-black ">
              <div className="flex min-w-[70px]">
                <Image
                  className=""
                  src="/images/Paulo2.jpeg"
                  width={100}
                  height={200}
                  alt="Paulo Bastos"
                />
              </div>
              <div className="flex items-center">
                <h1 className="p-6 max-w-[160px] font-italiana text-2xl sm:4xl text-black leading-1">
                  Analog Laboratory
                </h1>
              </div>
            </div>
            <p className="mt-2">
              Also 2regards atelier features an analog photography lab for
              development and printing. It is also possible to rent this space
              by the hour or day. Click here to discover our rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;

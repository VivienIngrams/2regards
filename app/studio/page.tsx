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
        <div className=" -ml-4 mr-10">
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
            Throughout the year, we organize workshops for participants to
            explore or deepen their knowledge in analog photography.
          </p>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 leading-normal text-sm">
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
                Product Studios
              </h1>
            </div>
          </div>
          <p className="mt-2">
            2regards atelier offers professional quality photographic services
            to meet all your needs. We capture your studio shots for e-commerce,
            ranging from simple cutout packshots on a white background to
            creatively staged ambient photos. Our team of professional
            photographers welcomes you to their fully equipped studio in Porto.
          </p>
        </div>
        <div className="ml-14 mr-10"></div>
      </div>

      <div className="-mt-16 grid md:grid-cols-2 leading-normal text-sm">
        <div className="ml-16 mr-10"></div>
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
                Analog Laboratory
              </h1>
            </div>
          </div>
          <p className="mt-2">
            Also 2regards atelier features an analog photography lab for
            development and printing. It is also possible to rent this space by
            the hour or day. Click here to discover our rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studio;

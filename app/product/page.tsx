import React from "react";

import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Product = () => {
  return (
    <div className="relative mr-8 md:mr-16 text-neutral-500 text-base h-full">
      {/* Nav buttons */}
      <div className="fixed md:hidden top-6 left-6 w-10  ">
          <Link href="/">
            <div className="text-center text-black font-italiana">Back</div>
          </Link>
        </div>
      <div className=" fixed right-6 top-6 md:right-10 md:top-10">
        <div className="hidden md:block">
          <Link href="/">
            <div className="text-center text-black text-xl  font-italiana">Back</div>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-end">
            <Link href="">
              <MdArrowBackIosNew color="gray" size={20} />
            </Link>
          </div>
          <div className="flex flex-col w-4 md:w-10 h-10">
            <div className="border-b-[1px] border-gray h-1/2"> </div>
            <div className="border-t-[1px] border-black h-1/2"></div>
          </div>
          <div className="flex items-end">
            <Link href="">
              <MdArrowForwardIos color="gray" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-100" />
      </div>

      {/* Title */}
      <div className="hidden md:flex md:absolute py-2 md:p-12 w-full  items-center justify-center  text-neutral-400">
        <div className="max-w-[160px]">
          <h1 className="text-[80px] font-normal font-italiana text-center leading-[38px] tracking-tighter">
            Title of product
          </h1>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 min-h-full md:max-h-[90vh]">
        {/* Left/top side of page */}
        <div className="grid grid-rows-3 w-full h-[50vh] md:h-[90vh]">
          <div className="z-1 pl-12 flex relative h-full ">
            <Image
              className="object-fill overflow-visible absolute"
              src="/images/wave.png"
              height={200}
              width={300}
              alt="Paulo Bastos"
            />
          </div>
          <div className="z-2 flex relative h-full justify-end">
            <Image
              className=" absolute"
              src="/images/Paul.jpeg"
              width={200}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
          <div className="z-3 pl-28 flex justify-center h-full relative">
            <Image
              className=" absolute bottom-0"
              src="/images/lights.png"
              width={200}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
        </div>

        {/* Right/bottom side of page */}
        <div className="flex items-center justify-center mt-10 md:mt-[20vh] md:ml-[15vw]">
          <div className="mx-auto max-w-sm">
            <h1 className="font-italiana md:text-4xl text-black leading-1">
              Subtitle of product
            </h1>
            <p className="mt-2">
              Beaucoup de text sur le project de photographie pour un produit.
              Beaucoup de text sur le project de photographie pour un produit.
              Beaucoup de text sur le project de photographie pour un produit.
              Beaucoup de text sur le project de photographie pour un produit.
              Beaucoup de text sur le project de photographie pour un produit.
              Beaucoup de text sur le project de photographie pour un produit
              nfez. Beaucoup de text sur le project de photographie pour un
              produit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React from "react";

import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="relative md:mr-16 text-neutral-500 text-sm h-full">
      {/* Nav buttons */}
      <div className="w-24 fixed right-8 top-16">
        <Link href="/">
          <div className="">Back</div>
        </Link>
        <div>
          <Link href=""></Link>
          <div className="">--</div>
          <Link href=""></Link>
        </div>
      </div>

      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-100" />
      </div>

      {/* Title */}
      <div className="absolute p-12 w-full flex items-center justify-center text-center text-neutral-400">
        <div className="max-w-[160px]">
          <p className=" text-[80px] font-normal font-italiana leading-[38px] tracking-tighter">
            Title of product
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 min-h-full max-h-[90vh]">
        {/* Left side of page */}
        <div className="md:grid md:grid-rows-3 md:w-full max-h-[90vh]">
          <div className="z-1 pl-12 flex relative h-full ">
            <Image
              className="object-fill overflow-visible absolute"
              src="/images/lights.png"
              height={400}
              width={400}
              alt="Paulo Bastos"
            />
          </div>
          <div className="z-2 flex relative h-full justify-end">
            <Image
              className=" absolute"
              src="/images/Paulo2.jpeg"
              width={200}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
          <div className="z-3 pl-28 flex justify-center h-full relative">
            <Image
              className=" absolute bottom-0"
              src="/images/Paulo2.jpeg"
              width={200}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
        </div>

        {/* Right side of page */}
        <div className="flex items-center justify-center mt-32 ml-32">
          <div className="mx-auto max-w-sm">
            <h1 className="font-italiana text-4xl text-black leading-1">
              Workshops
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

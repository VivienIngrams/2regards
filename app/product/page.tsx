import React from "react";

import Image from "next/image";

const Product = () => {
  return (
    <div className="md:py-12 mr-16 text-neutral-500 text-sm ">

      {/* Nav buttons */}
      <div className="w-24 fixed right-8 top-16">
        <div className="">Back</div>
        <div className="">--</div>
      </div>

      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-100" />
      </div>

      {/* Header */}
      <div className="m-2 flex items-center justify-center text-center text-neutral-400">
        <div className="max-w-[160px]">
        <p className=" text-[80px] font-normal font-italiana leading-[38px] tracking-tighter">
          Title of product
        </p></div>
      </div>
     
      <div className=" grid md:grid-cols-2">
        {/* Left side of page */}
        <div>
          <div className="flex">
            <Image
              className=""
              src="/images/Paulo2.jpeg"
              width={100}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
          <div className="flex">
            <Image
              className=""
              src="/images/Paulo2.jpeg"
              width={100}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
          <div className="flex">
            <Image
              className=""
              src="/images/Paulo2.jpeg"
              width={100}
              height={200}
              alt="Paulo Bastos"
            />
          </div>
        </div>

        {/* Right side of page */}
        <div className="flex items-center justify-center ml-24">
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

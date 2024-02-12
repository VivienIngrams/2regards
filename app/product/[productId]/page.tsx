import React from "react";

import Image from "next/image";
import Link from "next/link";
import ArrowBack from "/public/ArrowBack.svg";
import ArrowForward from "/public/ArrowForward.svg";
import { productData } from "../../data";

const Product = ({ params }: { params: { productId: string } }) => {
  const currentIndex = productData.findIndex(
    (product) => product.id === params.productId
  );

  // If the product is not found, you can handle it accordingly
  if (currentIndex === -1) {
    return <p>Product not found</p>;
  }

  const { title, videoLink, images } = productData[currentIndex];

  // Calculate indices for previous and next products
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : productData.length - 1;
  const nextIndex =
    currentIndex < productData.length - 1 ? currentIndex + 1 : 0;

  return (
    <div className="relative mr-8 lg:mr-16 text-neutral-500 text-base md:text-xl h-full">
      {/* Nav buttons */}
      <div className="fixed z-100 top-6 left-6 md:left-10 md:top-10  cursor-pointer">
        <Link className="text-center m-2 text-black font-italiana" href="/">
          Back
        </Link>
      </div>
      <div className=" fixed right-6 top-6 md:right-12 md:top-12">
        <div className="flex justify-between">
          <div className="flex cursor-pointer">
            <Link
              href={`/product/${productData[prevIndex].id}`}
              className="p-1"
            >
              <Image
                priority
                src={ArrowBack}
                height={20}
                alt="Previous product"
              />
            </Link>
          </div>
          <div className="flex flex-col w-4 md:w-10 h-10">
            <div className=" h-1/2"> </div>
            <div className="border-t-[1px] border-black h-1/2"></div>
          </div>
          <div className="flex items-end cursor-pointer">
            <Link
              href={`/product/${productData[nextIndex].id}`}
              className="p-1"
            >
              <Image
                priority
                src={ArrowForward}
                height={20}
                alt="Next product"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>

      {/* Title */}
      <div className="hidden z-10 lg:flex lg:absolute py-2 lg:m-12 w-full  items-center justify-center  text-neutral-400">
        <div className="max-w-[160px]">
          <h1 className="lg:text-6xl xl:text-[80px] font-normal font-italiana text-center lg:leading-[26px] xl:leading-[38px] tracking-tighter">
            {/* {title} */}
            {params.productId}
          </h1>
        </div>
      </div>

      <div className="min-h-full md:min-h-[80vh] md:max-h-[85vh]">
        <div className={`flex flex-col md:grid md:grid-cols-${Object.keys(images).length} h-[65vh] lg:h-[90vh]`}>
         
         <div className="col-span-1"></div>
         <div className="col-span-1"></div>
         <div className="col-span-1"></div>
         <div className="col-span-1"></div>
         <div className="col-span-1"></div>
         <div className="col-span-1"></div>
         <div className="col-span-1"></div>
          {/* {Object.values(images).map((image, index) => (
            <div key={index} className="h-full relative ">
              <div  className={`${image.position} relative`}>
                <Image
                  className="object-contain overflow-hidden md:overflow-visible absolute"
                  src={image.url}
                  fill
                  sizes="30vw"
                  alt={title}
                  layout="fill"
                />
              </div>
            </div>
          ))} */}
        </div>
        {videoLink && (
          <div className="fixed bottom-10 right-10 flex flex-col items-end justify-center m-2">
            <Link
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white font-italiana text-xl text-black h-8 px-4 border border-black rounded "
            >
              Watch video
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;

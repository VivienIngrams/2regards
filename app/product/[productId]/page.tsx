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

    const arrayLength = Object.keys(images).length.toString();
    const columns = `md:grid md:grid-cols-${arrayLength} w-full min-h-full md:min-h-[80vh] md:max-h-[80vh] mt-[5vh]`;
  
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
      <div className="z-10 flex absolute -top-12 lg:m-12 w-full  items-center justify-center  text-neutral-400">
        <div className="max-w-[160px]">
          <h1 className="text-3xl lg:text-6xl xl:text-[80px] font-normal font-italiana text-center lg:leading-[26px] xl:leading-[38px] tracking-tighter">
            {/* {title} */}
            {params.productId}
          </h1>
        </div>
      </div>
<div className={`md:grid md:grid-cols-6 md:grid-rows-3 w-full min-h-full md:min-h-[80vh] md:max-h-[80vh] mt-[10vh]`}>
    
          {Object.values(images).map((image, index) => (
            <div
              key={index}
              className={` col-span-${image.position} h-full`}
            >
              <div className="m-2 h-[90%] flex items-center">
              <div className="relative   group hover:bg-gradient-to-r from-[black] to-neutral-600">
                <Image
                  className="object-contain overflow-hidden shadow-md group-hover:opacity-30 border-[1px] border-black"
                  src={image.url}
                  alt={title}
                  height={400}
                  width={500}
                  sizes="50vw lg:25vw"
                />
              </div>
              </div>
            </div>
          ))}
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
  );
};

export default Product;

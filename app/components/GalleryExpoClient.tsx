'use  client';

import Image from "next/image";
import Link from "next/link";
import ArrowBack from "/public/ArrowBack.svg";
import ArrowForward from "/public/ArrowForward.svg";

interface GalleryDataItem {
    title: string;
    subtitle: string;
    description: string;
    poster: string;
    slug: string;
    videoLink: string;
    images: {
      imageUrl: string;
      position: string;
      size: string;
    }[];
  }

  
  
  const GalleryExpo: React.FC<{ galleryExpoData: GalleryDataItem; gallerySlugs: string[] }> = ({galleryExpoData, gallerySlugs}) => {    

    const { title, subtitle, description, videoLink, images, slug } = galleryExpoData;
 
    // const currentIndex = gallerySlugs.indexOf(slug);
    // const prevSlug = gallerySlugs[(currentIndex - 1 + gallerySlugs.length) % gallerySlugs.length];
    // const nextSlug = gallerySlugs[(currentIndex + 1) % gallerySlugs.length];

    const currentIndex = gallerySlugs.findIndex(
        (gallerySlug) => gallerySlug === slug
      );
    
//  Calculate indices for previous and next gallerys
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : gallerySlugs.length - 1;
      const nextIndex =
        currentIndex < gallerySlugs.length - 1 ? currentIndex + 1 : 0;

return (
    <div className="relative mr-8 md:mr-12 lg:mr-16 text-neutral-500 text-sm h-full">
        {/* Nav buttons */}
        <div className="fixed md:hidden h-12 w-full top-4 left-5 z-50 bg-stone-200" />
        <div className="fixed z-50 top-6 left-6 md:left-10 md:top-10  cursor-pointer">
            <Link
                className="text-center m-2 text-black font-italiana"
                href="/gallery"
            >
                Back
            </Link>
        </div>
        <div className=" fixed z-50 right-6 top-6 md:right-10 md:top-10">
            <div className="flex justify-between">
                <div className="flex cursor-pointer">
                    <Link
                        href={`/gallery/${gallerySlugs[prevIndex]}`}
                        className="p-1"
                    >
                        <Image
                            priority
                            src={ArrowBack}
                            height={20}
                            alt="Previous gallery"
                        />
                    </Link>
                </div>
                <div className="flex flex-col w-4 md:w-10 h-10">
                    <div className=" h-1/2"> </div>
                    <div className="border-t-[1px] border-black h-1/2"></div>
                </div>
                <div className="flex items-end cursor-pointer">
                    <Link
                        href={`/gallery/${gallerySlugs[nextIndex]}`}
                        className="p-1"
                    >
              <Image
                priority
                src={ArrowForward}
                height={20}
                alt="Next gallery"
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
      <div className="z-10 flex absolute py-4 mb-2 lg:m-12 w-full  items-center justify-center ">
        <div className="max-w-[300px] lg:max-w-[400px]">
          <h1 className="text-black  text-4xl lg:text-6xl xl:text-[80px] font-normal font-italiana text-center lg:leading-[26px] xl:leading-[38px] tracking-tighter">
            {title}
          </h1>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-5 min-h-full lg:max-h-[86vh]">
        {/* Left/top side of page */}

        <div
          className={` col-span-3 w-full min-h-full lg:h-[90vh] lg:grid lg:grid-rows-3 mt-[10vh] mb-4 lg:mt-[2vh]`}
        >
          {Object.values(images).map((image, index) => (
            <div
              key={index}
              className={`flex flex-row ${image.position} -mt-[3vh] lg:mt-0 `}
              style={{ zIndex: 10 + index }}
            >
              <div
                className={`relative ${image.size} w-[70vw] xs:w-[75vw] sm:w-[60vw] `}
              >
                <Image
                  className="object-cover overflow-hidden absolute border-[1px] border-black  shadow-md shadow-neutral-500 "
                  src={image.imageUrl}
                  fill
                  alt={title}
                  sizes="90vw sm:60vw md:30vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right/bottom side of page */}
        <div className="col-span-2 flex flex-col items-end justify-center h-full">
          <div className="flex flex-col justify-end xl:h-[70vh] md:mt-[8vh] md:m-[5vw] lg:ml-[10vw] xl:mr-[5vw]">
            <h1 className="font-italiana py-4 text-4xl text-black leading-1 tracking-tight">
              {subtitle}
            </h1>
            <p className="text-justify lg:text-left text-sm mt-2 md:leading-none">
              {description}
            </p>
            <div className="py-4"></div>
            {videoLink && (
              <div className=" relative pb-10 flex flex-col items-start justify-center m-2">
                <Link
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 bg-white font-italiana text-xl text-black h-8 px-4  rounded "
                >
                  Watch video
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryExpo;

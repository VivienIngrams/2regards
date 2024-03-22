"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import facebookIcon from "/public/Facebook.svg";
import instagramIcon from "/public/Instagram.svg";
import youtubeIcon from "/public/Youtube.svg";
import googlemapsIcon from "/public/Googlemaps.svg";
import NewsLetterSignUpForm from "../components/NewsletterSignUpForm";

const Contact = () => {
  return (
    <motion.div className="relative h-full mr-8 md:mr-12 font-light text-sm md:text-base">
      {/* Right border */}
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>
      <NewsLetterSignUpForm />
      <div className="flex flex-col justify-around md:grid grid-cols-2 h-[80vh] ">
        {/* Gallery Information */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-2 sm:mt-[10vh] lg:mx-28 lg:w-[30vw]"
        >
          <div>
            <div className="flex justify-between  border-black border-b-[1px]">
              {/* <div className="text-black text-2xl xs:text-3xl  :text-5xl font-normal font-italiana pb-1 :pb-4">
                2regards atelier
              </div> */}
              <div className="relative h-10 w-24">
              <Image
              src="/2regards-black-title.png"
              alt="2regards Atelier"
              fill /></div>
              <div className="relative h-5 xs:h-6 xl:h-10 w-6 xs:w-10 xl:w-12 xl:mb-1 xl:mt-2">
                <Link
                  href="https://www.google.com/maps/place/2regards+atelier+photos+films/@41.1472147,-8.6012507,17z/data=!3m1!4b1!4m6!3m5!1s0xd2465a5d3873983:0xbfff3607a844ac77!8m2!3d41.1472147!4d-8.5986758!16s%2Fg%2F11p_1z0qdh?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    priority
                    src={googlemapsIcon}
                    fill
                    alt="Google Maps"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex relative h-[200px] w-[300px] lg:h-[270px] lg:w-[380px] xl:h-[350px] xl:w-[500px] my-4">
              <Image
                className="border-[1px] border-black shadow-md"
                src="/images/gallery/MathildePaulo/sentiment_oceanique (3).jpg"
                fill
                alt="Gallery in Bomfin, Porto, Portugal"
              />
            </div>
            <div className="mt-4 text-neutral-500 leading-tight">
              <div className="pb-4">
                <p>Rua do Duque da Terceira 358</p>
                <p>4300-096 Porto</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-2 sm:mt-[8vh] lg:mr-28 lg:ml-auto md:mb-24 flex items-end  lg:w-[30vw]"
        >
          <div className="w-full">
            <div className="flex justify-between border-black border-b-[1px]">
              <div className="flex mt-1 xl:mt-4">
              <div className="relative h-4 xs:h-6 xl:h-7 w-4 xs:w-8 xl:w-9 xl:mb-1 mr-2 xl:mr-4">
                  <Link
                    href="https://www.facebook.com/2regards.photosfilms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      priority
                      src={facebookIcon}
                      alt="Facebook"
fill                    />
                  </Link>
                </div>
                <div className="relative h-4 xs:h-6 xl:h-7 w-4 xs:w-8 xl:w-9 xl:mb-1 mr-[9px] xl:mr-5">
                  <Link
                    href="https://www.youtube.com/channel/UChl2gxRgunj929SvG_D8vyA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      priority
                      src={youtubeIcon}
                      alt="Youtube"
                      fill
                    />
                  </Link>
                </div>
                <div className="relative h-4 xs:h-6 xl:h-7 w-4 xs:w-8 xl:w-9 xl:mb-1 mr-2 xl:mr-4">
                  <Link
                    href="https://www.instagram.com/2regards.photosfilms/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      priority
                      src={instagramIcon}
                      alt="Instagram"
                      fill
                    />
                  </Link>
                </div>
              </div>

              <div className="text-black text-2xl xs:text-3xl :text-5xl font-normal text-right font-italiana pb-1 :pb-4">
                contact
              </div>
            </div>
            <div className="mt-4 text-right text-neutral-500 leading-tight">
              <div className="pb-4">
                <p>
                  Mathilde Cudeville:{" "}
                  <a href="mailto:mathilde@2regards.com">
                    mathilde@2regards.com
                  </a>
                </p>
                <p>+33 6 79 76 14 88</p>
              </div>
              <div className="pb-4">
                <p>
                  Paulo Bastos:{" "}
                  <a href="mailto:paulo@2regards.com">paulo@2regards.com</a>
                </p>
                <p>+33 7 87 38 36 32</p>
              </div>
              <div className="pb-4">
                <p>
                  Info:{" "}
                  <a href="mailto:atelier@2regards.com">atelier@2regards.com</a>
                </p>
                <p>+351 933 119 390</p>
              </div>
              <div>
                <p>
                  <a
                    href="https://www.2regards.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.2regards.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

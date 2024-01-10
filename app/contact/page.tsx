import React from "react";

import Image from "next/image";
import facebookIcon from "/public/Facebook.svg";
import instagramIcon from "/public/Instagram.svg";
import youtubeIcon from "/public/Youtube.svg";
import googlemapsIcon from "/public/Googlemaps.svg";

const Contact = () => {
  return (
    <div className="relative h-full mr-12 font-light">
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>
      {/* Newsletter Subscription Form */}
      <div className="relative flex flex-col items-end">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email here"
          className="w-[400px] h-8 p-2 border border-black rounded my-2"
        />
        <button
          type="submit"
          className="bg-neutral-500 text-white h-8 px-4 border border-black rounded "
        >
          Subscribe to our newsletter
        </button>
      </div>

      {/* Gallery Information */}
      <div className="absolute left-28 top-24 w-2/5">
        <div className="right-0 top-2 absolute">
          <Image priority src={googlemapsIcon} height={35} alt="Google Maps" />
        </div>
        <div className="text-black text-5xl font-normal font-italiana pb-4 border-black border-b-[1px]">
          gallery.
        </div>

        <div className="mt-4 text-neutral-500 leading-tight">
          <div className="pb-4">
            <p>Rua do Duque da Terceira 358</p>
            <p>4300-096 Porto</p>
          </div>
          <div className="pb-4">
            <p>
              Wednesday to Saturday <span>2p.m - 7p.m.</span>
            </p>
          </div>
          <div>
            <p>atelier@2regards.com</p>
            <p>+351 933 119 390</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="absolute right-32 bottom-28 w-2/5">
        <div className="flex -mb-10">
          <div className="pr-4">
            <Image priority src={facebookIcon} alt="Facebook" />
          </div>
          <div className="pr-5">
            <Image priority src={youtubeIcon} alt="Youtube" />
          </div>
          <div className="">
            <Image priority src={instagramIcon} alt="Instagram" />
          </div>
        </div>
        <div className="text-black text-5xl font-normal text-right font-italiana pb-4 border-black border-b-[1px]">
          contact.
        </div>
        <div className="mt-4 text-right text-neutral-500 leading-tight">
          <div className="pb-4">
            <p>Mathilde Cudeville</p>
            <p>mathilde@2regards.com</p>
            <p>+33 6 79 76 14 88</p>
          </div>
          <div className="pb-4">
            <p>Paulo Bastos</p>
            <p>paulo@2regards.com</p>
            <p>+33 7 87 38 36 32</p>
          </div>
          <div>
            <p>www.2regards.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

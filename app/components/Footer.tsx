import React from "react";

const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-screen h-6 bg-stone-200">
      <div className="relative min-w-screen border-t-black border-2">
        <div className="absolute ml-20 -bottom-5 font-italiana justify-start items-start gap-10 inline-flex">
          <div className="text-black text-xl p-1 font-normal leading-loose bg-stone-200">
            Products
          </div>
          <div className="text-black text-xl p-1 font-normal leading-loose bg-stone-200">
            Studio
          </div>
          <div className="text-black text-xl p-1 font-normal leading-loose bg-stone-200">
            Gallery
          </div>
          <div className="text-black text-xl p-1 font-normal leading-loose bg-stone-200">
            About
          </div>
          <div className="text-black text-xl p-1 font-normal leading-loose bg-stone-200">
            Contact
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

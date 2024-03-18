import React from "react";
import Image from "next/image";

// Header.js
const Header = () => {
  return (
    <header>
      <div className="z-50 fixed w-full top-0 flex justify-center border-b-[1px] border-black h-4 md:h-6 bg-stone-200" />
      <div className=" w-4 md:w-6 z-999 fixed h-screen left-0 top-4">
        <div className="left-0 top-0 relative min-h-screen border-r-black border-[1px] bg-stone-200" />
        <div className="-left-1 md:left-1 absolute  top-[55%] origin-top-left -rotate-90 h-16 w-28 p-1 bg-stone-200">
          <Image
          src="/2regards.png"
          alt="2regards"
          width={200}
          height={100}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

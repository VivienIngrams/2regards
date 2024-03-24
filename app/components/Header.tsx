import React from "react";
import Image from "next/image";
import Link from "next/link";

// Header.js
const Header = () => {
  return (
    <header>
      <div className="z-100 fixed w-full top-0 flex justify-center border-b-[1px] border-black h-4 md:h-6 bg-stone-200" />
      <div className=" w-5 md:w-6 z-999 fixed min-h-screen h-full left-0 top-4">
        <div className="left-0 top-0 relative min-h-screen h-full border-r-black border-[1px] bg-stone-200" />
        <Link 
        href="/">
          <div className="-left-[2px] md:left-1 absolute  top-[55%] origin-top-left -rotate-90 h-8 md:h-12 w-28 p-1 bg-stone-200">
            <Image
              src="/2regards.png"
              alt="2regards"
              width={200}
              height={100}
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

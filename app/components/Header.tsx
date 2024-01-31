import React from "react";

// Header.js
const Header = () => {
  return (
    <header >
     <div className="flex justify-center border-b-[1px] border-black h-4 md:h-6"/>
      <div className="w-4 md:w-6 z-999 fixed h-screen left-0 top-0">
        <div className="left-0 top-0 relative min-h-screen border-r-black border-[1px] bg-stone-200" />
        <div className="-left-1 md:left-1 p-1 absolute font-italiana top-[50%] bg-stone-200 origin-top-left -rotate-90 text-black text-xl md:text-2xl">
          2regards
        </div>
      </div>
    </header>
  );
};

export default Header;

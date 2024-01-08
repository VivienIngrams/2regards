import React from "react";

// Header.js
const Header = () => {
  return (
    <header >
     <div className="flex justify-center border-b-2 border-black h-6"/>
      <div className="w-6 z-999 fixed h-screen left-0 top-0">
        <div className="left-0 top-0 relative min-h-screen border-r-black border-2 bg-stone-200" />
        <div className="left-1 p-1 absolute font-italiana top-[50%] bg-stone-200 origin-top-left -rotate-90 text-black text-xl">
          2regards
        </div>
      </div>
    </header>
  );
};

export default Header;

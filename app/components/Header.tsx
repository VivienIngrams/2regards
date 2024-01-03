import React from "react";

// Header.js
const Header = () => {
  return (
    <header className="z-999 fixed w- top-0 left-0 right-0">
      <div className=" left-0 top-0 w-screen h-[50px] ">
        <div className="w-screen h-[50px]  border-b-black border-2 bg-black" />
      </div>
      <div className="w-[50px] z-999 fixed h-screen left-0 top-0">
        <div className="left-0 top-0 relative min-h-screen border-r-black border-2 bg-stone-200" />
        <div className="left-[10px] absolute top-[50%] bg-stone-200 origin-top-left -rotate-90 text-black text-2xl">
          2regards
        </div>
      </div>
    </header>
  );
};

export default Header;

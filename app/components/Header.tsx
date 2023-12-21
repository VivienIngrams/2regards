import React from "react";

// TopBorder.js
const TopBorder = () => {
  return (
    <div className=" left-0 top-0 w-screen h-[50px] ">
      <div className="w-screen h-[50px]  border-b-black border-2 bg-stone-200" />
    </div>
  );
};

// LeftBorder.js
const LeftBorder = () => {
  return (
    <div className="w-[50px] h-screen left-0 top-0">
      <div className="left-0 top-0 relative min-h-screen border-r-black border-2 bg-stone-200" />
      <div className="left-[10px] absolute top-[50%] bg-stone-200 origin-top-left -rotate-90 text-black text-2xl">
        2regards
      </div>
    </div>
  );
};

// Header.js
const Header = () => {
  return (
    <header className="z-999 fixed top-0 left-0">
      <TopBorder />
      <LeftBorder />
    </header>
  );
};

export default Header;

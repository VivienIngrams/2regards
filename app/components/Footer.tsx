import React from "react";
import Link from "next/link";

const Footer = () => {
  const menuItems = [
    { text: "Products", href: "/" },
    { text: "Studio", href: "/studio" },
    { text: "Gallery", href: "/gallery" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <footer className="fixed left-0 bottom-0 w-screen h-4 md:h-6 bg-stone-200 z-30">
      <div className="relative min-w-screen z-25 border-t-black border-[1px]">
        <div className="absolute bottom-[2px] mx-6 bg-stone-200 h-3 md:h-6" />
        <div className="absolute text-md md:text-xl ml-6 md:ml-10 z-20 leading-loose -bottom-5  font-italiana gap-2 md:gap-10 flex">
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} className="bg-stone-200 p-1">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



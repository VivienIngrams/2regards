"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "Products", href: "/" },
  { text: "Studio", href: "/studio" },
  { text: "Gallery", href: "/gallery" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="fixed left-0 bottom-0 w-screen h-4 md:h-6 bg-stone-100 z-30">
      <div className="relative min-w-screen z-25 border-t-black border-[1px]">
        <div className="absolute bottom-[2px] mx-6 w-full bg-stone-100 h-[18px]" />
        <div className="absolute text-md md:text-xl ml-6 md:ml-10 z-20 leading-loose -bottom-3  font-italiana gap-2 md:gap-10 flex">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="bg-stone-100 px-1 relative"
            >
              {item.href === pathname && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-[5px] bottom-[2px] block h-[0.8px] w-[85%] bg-black"
                />
              )}
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [revealWidth, setRevealWidth] = useState(0);

  useEffect(() => {
    const revealInterval = setInterval(() => {
      setRevealWidth((prevWidth) => Math.min(prevWidth + 0.3, 100));
    }, 1); // Adjust interval for smoother/faster animation

    setTimeout(() => {
      clearInterval(revealInterval);
      finishLoading();
    }, 3000); // Finish loading after 3 seconds

    return () => clearInterval(revealInterval);
  }, [finishLoading]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-60 h-40 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, 0) ${revealWidth}%, rgba(0, 0, 0, 1))`,
          }}
        />
        <Image
          src="/2regards-black-white.png"
          alt="2regards Atelier"
          width={220}
          height={220}
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;

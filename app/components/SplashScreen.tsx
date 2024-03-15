"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypingText } from "./TypingText";
import Image from "next/image";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 6500);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          className="flex justify-center items-center h-screen w-screen bg-black"
        >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.8, 1, 1, 0.8, 0.5, 0.2], x: 0 }}
          // exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.7, delay: 0.2}}
          className=""
        >
          <Image
          src="/2regards-black-white.png" 
          alt="2regards Atelier"
          width={600}
          height={600}/>
          {/* <motion.div
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.8 }}
          >
            <TypingText title="2 Regards Atelier" textStyles="text-center" />
          </motion.div> */}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;

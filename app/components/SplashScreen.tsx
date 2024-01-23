"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";


interface SplashScreenProps {
    finishLoading: () => void;
  }

  const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {

  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 2000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div >
      <motion.div
     
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center items-center h-screen w-screen bg-black"
      >
        <TypingText title="| Sobre Nós" textStyles="text-center" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;

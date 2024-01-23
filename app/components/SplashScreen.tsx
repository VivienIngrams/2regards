"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";


interface SplashScreenProps {
    finishLoading: () => void;
  }

  const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
    // const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(),  3000);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=""
      >
        <TypingText title="| Sobre Nós" textStyles="text-center" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;

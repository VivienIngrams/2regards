"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypingText } from "./TypingText";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 2500);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center h-screen w-screen bg-black"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.8 }}
          >
            <TypingText title="2 Regards Atelier" textStyles="text-center" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;

"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import confettiAnimation from "../../../../public/animations/confetti_animation";
import dogAnimation from "../../../../public/animations/dog_animation_weird";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { Bubblegum_Sans } from "next/font/google";
import { motion } from "framer-motion";

// Importing Bubblegum Sans font
const bubblegumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"], // Bubblegum Sans only has one weight
});




const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [hide, setHide] = useState(false);

  const handleAnimationComplete = () => {
    setShowMessage(true);
    setHide(true);
  };

  // Variants for animations
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay: 0.6, duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };

  const revealVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      {/* Confetti Animation */}
      <div className="absolute">
        <Lottie
          animationData={confettiAnimation}
          loop={false}
          autoplay={true}
          onComplete={handleAnimationComplete}
          className={hide ? "hidden" : "visible"}
        />
      </div>

      {/* Dog Animation shifted to the rightmost end */}

      <div
        className={`absolute bottom-4 right-4 w-40 h-40 animate-fadeIn ${
          !hide ? "hidden" : "visible"
        }`}
      >
        <Lottie animationData={dogAnimation} loop={true} autoplay={true} />
      </div>

      {showMessage && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`bg-white p-8 rounded-lg shadow-2xl ${bubblegumSans.className}`}
        >
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-center text-gray-800 mb-4"
          >
            🎉 Happy Birthday My Sweet Watermelon! 🎂
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-xl text-center text-gray-600 mb-6"
          >
            Wishing you a day filled with love, laughter, and joy! May all your
            dreams come true. 🎈
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="relative bg-blue-500 text-white px-6 py-2 rounded-full overflow-hidden"
            >
              <motion.span
                variants={revealVariants}
                initial="hidden"
                whileHover="visible"
                className="absolute inset-0 bg-blue-600 rounded-full"
              />
               <a href="/memories"><span className="relative z-10">Lets go!</span></a>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BirthdayCard;

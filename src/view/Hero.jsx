import React from "react";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="heros" className="relative -mt-10">
      <SlidingText />
      <img src="/img/hero.jpg" alt="" className="h-[100vh]x w-full" />
    </section>
  );
};

export default Hero;

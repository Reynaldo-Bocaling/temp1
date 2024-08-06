import React from "react";
import { hwoToBuy } from "../constant/indedx";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <section id="howtobuy" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="max-w-[80%] mx-auto py-4"
      >
        <div className="">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [-100, 0],
              rotate: ["-150deg", 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 1.2, delay: 1.7 }}
            className="gradient-text font-title text-[1.5em]  md:text-[3em] mb-3 py-5"
          >
            I LOST MY LIFE SAVINGS AGAIN
          </motion.h1>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="text-white text-sm md:text-2xl py-3"
          >
            ETH Token :{" "}
            <span className="text-[#0dffef] font-semibold">
              0x344CV8SHS88SS666SBMSFFG
            </span>
          </motion.p>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="text-white text-sm md:text-2xl py-3"
          >
            BITCOIN on BASE:{" "}
            <span className="text-[#0dffef] font-semibold">
              0x2XSD7DD8999DD7SSS8SS88CCNSSKSSS7
            </span>
          </motion.p>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.7 }}
            className="text-lg md:text-2xl text-white py-2"
          >
            <span className="text-[#0dffef]">*</span>𝚃𝚑𝚒𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝚗𝚎𝚠 𝚝𝚘𝚔𝚎𝚗,
            𝚓𝚞𝚜𝚝 𝚠𝚛𝚊𝚙𝚙𝚎𝚍 𝙱𝙸𝚃𝙲𝙾𝙸𝙽 𝚘𝚗 𝙱𝙰𝚂𝙴 𝚌𝚑𝚊𝚒𝚗.
          </motion.p>
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 3 }}
            className="text-3xl md:text-4xl text-white font-bold py-5 pb-7"
          >
            RoadMap to $100bn ( + ∞% )
          </motion.h1>
        </div>
        <motion.img
          initial={{ y: 0, opacity: 0 }}
          whileInView={{
            y: [-750, 0],
            rotate: ["350deg", 0],
            scale: [0, 1],
            opacity: [0.5, 1],
          }}
          transition={{ duration: 1.5 }}
          src="/img/hero_Bg.jpg"
          className="w-full md:h-[35rem] border-[2px] border-red-500"
          alt=""
        ></motion.img>
        <ul className="mt-5 max-w-2xl ">
          {hwoToBuy.map((item, index) => (
            <motion.li
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5, delay: 2.8 }}
              key={index}
              className="md:text-2xl text-white py-3"
            >
              {`${index + 1}. ${item}`}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div className="neon-line"></div>
    </section>
  );
};

export default HowToBuy;

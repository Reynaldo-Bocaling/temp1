import React from "react";
import { tokenomics } from "../constant/indedx";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between py-7 px-7">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [-100, 0],
              rotate: ["-150deg", 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 1.5 }}
            className="gradient-text font-title text-[1.5em] md:text-[3em] text-4xl text-white font-bold py-7"
          >
            TOKENOMICS
          </motion.h1>
          <ul className="flex flex-col gap-4">
            {tokenomics.map((item, index) => (
              <motion.li
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                key={index}
                className="text-2xl text-white"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-1/3"> s</div>
      </div>
    </section>
  );
};

export default Tokenomics;

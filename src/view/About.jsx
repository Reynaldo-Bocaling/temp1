import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="relative max-w-[80%] mx-auto py-4">
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="gradient-text text-[1.5em] md:text-[3em] font-title text-4xl text-white font-bold py-7 text-center"
        >
          ABOUT THE TOKEN
        </motion.h1>
        <div className="about max-w-7xl mx-auto">
          <motion.img
            initial={{ y: 0, opacity: 0 }}
            whileInView={{
              y: [-250, 0],
              rotate: ["550deg", 0],
              scale: [0, 1],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 1.5 }}
            src="/img/hero.png"
            alt=""
            className="float-left w-[350px]"
          ></motion.img>
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            whileInView={{
              x: [100, 0],

              opacity: [0, 1],
            }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-xl m-auto"
          >
            In today's volatile financial landscape, the allure of meme coins
            can be irresistible. These cryptocurrencies, often born from
            internet culture and hype, promise quick gains but come with
            significant risks. Many investors, driven by the excitement of
            potential profits, find themselves losing their life savings when
            these speculative assets fail to deliver. <br /> <br /> Our platform
            delves into the harsh realities of investing in meme coins. We
            provide insights into the pitfalls of such investments and share
            real-life stories from those who have experienced substantial
            losses. Learn how to safeguard your investments, avoid common traps,
            and make informed financial decisions. <br />
            <br />
            Don't let the excitement of meme coins lead you to financial ruin.
            Equip yourself with knowledge and strategies to navigate the crypto
            market safely.
            <span className="text-[#72ff0d] text-2xl font-bold">
              If we listen, we can understand that it is a store of value.
            </span>
          </motion.p>
        </div>
        <Marquee direction="right" className="absolute bottom-7">
          {Array.from({ length: 100 }, (_, i) => (
            <p
              key={i}
              className="title-font mx-10 text-red-100 text-lg font-bold"
            >
              Buy Now
            </p>
          ))}
        </Marquee>
        <img src="/img/bg1.jpg" className="w-[320px] ml-auto -mt-12" alt="" />
      </div>
      <div className="neon-line"></div>
    </section>
  );
};

export default About;

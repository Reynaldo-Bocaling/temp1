import React from "react";
import { hwoToBuy } from "../constant/indedx";
import Marquee from "react-fast-marquee";
const HowToBuy = () => {
  return (
    <section id="howtobuy" className="relative">
      <div className="max-w-[80%] mx-auto py-4">
        <Marquee direction="right">
          <p className="title title-font mx-10 text-red-100 text-lg font-bold flex items-center gap-5 my-4">
            <img src="/img/cross.png" className="w-[40px]" alt="" />
            I LOST MY LIFE SAVINGS AGAIN
            <img src="/img/cross.png" className="w-[40px]" alt="" />
          </p>
        </Marquee>
        <div className="">
          <h1 className="gradient-text font-title text-[1.5em]  md:text-[3em] mb-3">
            The Harry Potter Obama Sonic 10 Inu (Ticker:BITCOIN) Project
          </h1>
          <p className="text-white text-sm md:text-2xl py-3">
            ETH Token :{" "}
            <span className="text-[#0dffef] font-semibold">
              0x72e4f9f808c49a2a61de9c5896298920dc4eeea9
            </span>
          </p>
          <p className="text-white text-sm md:text-2xl py-3">
            BITCOIN on BASE:{" "}
            <span className="text-[#0dffef] font-semibold">
              0x2a06A17CBC6d0032Cac2c6696DA90f29D39a1a29
            </span>
          </p>
          <p className="text-lg md:text-2xl text-white py-2">
            <span className="text-[#0dffef]">*</span>𝚃𝚑𝚒𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝚗𝚎𝚠 𝚝𝚘𝚔𝚎𝚗,
            𝚓𝚞𝚜𝚝 𝚠𝚛𝚊𝚙𝚙𝚎𝚍 𝙱𝙸𝚃𝙲𝙾𝙸𝙽 𝚘𝚗 𝙱𝙰𝚂𝙴 𝚌𝚑𝚊𝚒𝚗.
          </p>
          <h1 className="text-3xl md:text-4xl text-white font-bold py-5 pb-7">
            RoadMap to $100bn ( + ∞% )
          </h1>
        </div>
        <img
          src="/img/hero_Bg.jpg"
          className="w-full h-[35rem] border-[2px] border-red-500"
          alt=""
        />
        <ul className="mt-5 max-w-2xl ">
          {hwoToBuy.map((item, index) => (
            <li key={index} className="md:text-2xl text-white py-3">
              {`${index + 1}. ${item}`}
            </li>
          ))}
        </ul>
      </div>
      <div className="neon-line"></div>
    </section>
  );
};

export default HowToBuy;

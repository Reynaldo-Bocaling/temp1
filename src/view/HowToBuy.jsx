import React from "react";
import { hwoToBuy } from "../constant/indedx";
import Marquee from "react-fast-marquee";
const HowToBuy = () => {
  return (
    <section id="howtobuy" className="relative">
      <div className="max-w-[80%] mx-auto py-4">
        <div className="">
          <h1 className="gradient-text font-title text-[1.5em]  md:text-[3em] mb-3 py-5">
            I LOST MY LIFE SAVINGS AGAIN
          </h1>
          <p className="text-white text-sm md:text-2xl py-3">
            ETH Token :{" "}
            <span className="text-[#0dffef] font-semibold">
              0x344CV8SHS88SS666SBMSFFG
            </span>
          </p>
          <p className="text-white text-sm md:text-2xl py-3">
            BITCOIN on BASE:{" "}
            <span className="text-[#0dffef] font-semibold">
              0x2XSD7DD8999DD7SSS8SS88CCNSSKSSS7
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
          className="w-full md:h-[35rem] border-[2px] border-red-500"
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

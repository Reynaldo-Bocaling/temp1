import React from "react";
import { tokenomics } from "../constant/indedx";

const Tokenomics = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between py-7 px-7">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="gradient-text font-title text-[1.5em] md:text-[3em] text-4xl text-white font-bold py-7">
            TOKENOMICS
          </h1>
          <ul className="flex flex-col gap-4">
            {tokenomics.map((item, index) => (
              <li key={index} className="text-2xl text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3"> s</div>
      </div>
    </section>
  );
};

export default Tokenomics;

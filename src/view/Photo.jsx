import React from "react";
import { gallery } from "../constant/indedx";

const Photo = () => {
  return (
    <section id="gallery" className="w-full relative my-12">
      <div className="relative max-w-6xl mx-auto flexColCenter gap-9 z-[998]">
        <img src="/img/p1.jpg" className="w-full" alt="" />
        <img src="/img/p2.jpg" alt="" />
        <div className="w-full columns-2 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mt-12">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-ms cursor-cell z-[99]"
            >
              <img
                src={item}
                alt=""
                className="hover:scale-[1.1] duration-500 transition-all ease-in-out border-[2px] border-red-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photo;

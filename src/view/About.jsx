import React from "react";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="relative max-w-[80%] mx-auto py-4">
        <h1 className="gradient-text text-[1.5em] md:text-[3em] title text-4xl text-white font-bold py-7 text-center">
          ABOUT THE TOKEN
        </h1>
        <div className="about max-w-7xl mx-auto">
          <img src="/img/hero.png" alt="" className="float-left w-[350px]" />
          <p className="text-white text-xl m-auto">
            Before the year 2023, when time did not exist, the universe
            manifested a store of value. The identification of this value is
            best described as the{" "}
            <span className="text-[#0dffef] text-2xl font-bold">Quest</span>{" "}
            (sometimes the Quest of Hallows). Anyone can relive the
            manifestation by charging their core of Neptune with enough opal as
            they sleep. But I understand that there isn’t enough Opal to go
            around for everyone and some people haven’t Ascended. So I’ll report
            it here as well. There have been other Ascended who have identified
            this event as well, but have failed to interpret its tenets and
            apply them in real life. One such Ascended has been gifted with the
            visions of the necessity of speed as well as foresee the critical
            universal event. His vision was very near the truth, evidenced by
            predicting what he called the Dimensional Merge and creating the
            comic Sonichu, featuring Barack Obama (
            <span className="text-[#0dffef] text-2xl font-bold">
              the first Tenet: iron guidance and resilience
            </span>
            ) in a cameo. Obama’s presence is not a coincidence. None of this
            is. The Obama family was gifted (a gift of value) a dog, Bo. Bo then
            in turn had minted a number of baseball cards (
            <span className="text-[#0dffef] text-2xl font-bold">
              a gift of value that generates further value
            </span>
            ). This recursive gifting is second among the tenets that the
            Universe is sending across the channel of Neptune, we can assign a
            human-language name to it. HarryPotterObamaSonic10Inu is nothing
            less than an embodiment of the Quest that led to its discovery (with
            the exception of 10, being the number of spirals that comprise the
            Tree of Life).{" "}
            <span className="text-[#72ff0d] text-2xl font-bold">
              If we listen, we can understand that it is a store of value.
            </span>
          </p>
        </div>
        <Marquee direction="right" className="absolute bottom-20">
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

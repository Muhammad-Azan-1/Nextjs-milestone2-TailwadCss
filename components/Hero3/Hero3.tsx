"use client";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Noto_Sans, Montserrat } from "next/font/google";
import Button from "../Button/Button";
const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const Hero3 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="w-full h-full flex px-1 flex-col justify-center items-center">
        <h1
          className={`${Mont.className} text-center relative text-[20px] sm:text-[25px] md:text-[34px]  tracking-wide text-white font-[700] font-Mont`}
        >
          <Typewriter
            options={{
              strings: ["Explore the World", "Through Hiking Adventures"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="w-full flex mt-6 justify-center">
          <div className="w-[300px] sm:w-[350px]  bg-primary h-1"></div>
        </div>
        <p className={`${Noto.className} pt-5 text-white text-center`}>
          Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi.
          Fert his. Recessit mentes praecipites locum caligine sui egens erat.
          Silvas caeli regna.
        </p>
        <Button name="Discover More" />
      </div>
    </>
  );
};

export default Hero3;

//! https://websitedemos.net/outdoor-adventure-02/?customize=template

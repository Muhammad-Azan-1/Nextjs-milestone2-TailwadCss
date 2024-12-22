"use client";
import { Montserrat } from "next/font/google";
const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
const Mainheading = (prop: { name: string; name2: string; name3: string }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <h1
        className={`${Mont.className} relative text-[22px] ${
          prop.name === "Explore the Colourful World"
            ? "text-center"
            : "text-start"
        } sm:text-[28px] md:text-[38px]  tracking-wide text-white font-[600] font-Mont`}
      >
        <Typewriter
          options={{
            strings: [`${prop.name}`, `${prop.name2}`],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="w-full text-center flex mt-6 justify-center">
        <div className="w-[300px] sm:w-[350px]  bg-primary h-1"></div>
      </div>
      <h1
        className={`${Mont.className} text-[30px] sm:text-[50px] md:text-[65px]  font-[700] mt-[25px] text-white tracking-wide font-Mont`}
      >
        {prop.name3}
      </h1>
    </>
  );
};

export default Mainheading;

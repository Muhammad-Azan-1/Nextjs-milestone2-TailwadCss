"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for animations
import Button from "@/components/Button/Button";
import Mainheading from "../Mainheading/Mainheading";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start items-center h-[500px]  mt-[80px]">
        <div className="w-full h-full flex flex-col items-center  justify-start mt-20 md:mt-14">
          <Mainheading
            name="Explore the Colourful World"
            name2="With Outdoor Adventures"
            name3="A WonderFul Gift"
          />

          <Button name="Learn More" />
        </div>
      </div>
    </>
  );
};

export default Hero;

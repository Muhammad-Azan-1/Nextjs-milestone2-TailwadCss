"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for animations
import { useEffect } from "react";
import { Noto_Sans, Montserrat } from "next/font/google";

const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const Hero2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="pt-10 md:pt-10 w-full flex justify-center">
        <Image
          src="/box2Image.png"
          alt="box2"
          width={80}
          height={360}
          className="w-[70px] md:w-[80px]"
        ></Image>
      </div>

      {/* box1 */}
      <div>
        <div className="flex w-full justify-center pt-[40px]">
          <h2
            className={`${Noto.className} text-[22px] text-[#404040] font-[500] text-center`}
          >
            &ldquo;Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris.&ldquo;
          </h2>
        </div>
        <div className="flex justify-center pt-[15px] font-[500]">
          <h3 className={`${Noto.className} text-[16px] text-[#191919]`}>
            - Muhammad Azan
          </h3>
        </div>
      </div>

      {/* box2 */}

      <div className="h-[100%] w-full pt-[70px] sm:pt-[100px]">
        <h1
          className={`${Mont.className} text-center relative text-[20px] sm:text-[25px] md:text-[34px]  tracking-wide text-[#191919] font-[700] font-Mont`}
        >
          <Typewriter
            options={{
              strings: ["Get Ready For", "Upcoming Events"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="w-full text-center flex mt-2 justify-center">
          <div className="w-[210px] sm:w-[350px]  bg-primary h-1"></div>
        </div>

        <div className="w-full pl-[15px] pr-[15px] md:pl-20 md:pr-20 mt-[60px] gap-y-10 grid justify-center gird-cols-[(1,1fr)] md:grid-cols-[repeat(2,52%)]  min2:grid-cols-[repeat(2,480px)] md:gap-y-0  gap-x-20 ">
          {/* imagebox1 */}
          <div className="">
            <Image
              src="/event1.jpg"
              alt="Event hiking"
              width={480}
              height={200}
              className="rounded-md  w-full md:w-[480px]"
            />

            <div className="text-center w-full mt-8">
              <h2
                className={`${Mont.className} text-[#191919] font-[700] text-[18px]`}
              >
                Everest Camp Trek
              </h2>
              <p
                className={`${Noto.className} mt-[10px] font-[17px] text-[#404040] leading-[30px]`}
              >
                Fuerat aestu carentem habentia spectent tonitrua mutastis
                locavit liberioris inistra possedit.
              </p>
              <button
                className={`${Mont.className} px-8 sm:px-12 mt-6  text-[10px] sm:text-[14px] font-[700] font-sans py-[10px] sm:py-[14px] rounded-[30px] tracking-wide uppercase bg-primary text-[#F5F5F5]`}
              >
                &rarr; Learn more
              </button>
            </div>
          </div>

          {/* imagebox2 */}
          <div className="">
            <Image
              src="/event2.jpg"
              alt="Event running"
              width={480}
              height={200}
              className="rounded-md w-full md:w-[480px] "
            />

            <div className="text-center w-full mt-8">
              <h2
                className={`${Mont.className} text-[#191919] font-[700] text-[18px]`}
              >
                Walking Holidays
              </h2>
              <p
                className={`${Noto.className} mt-[10px] font-[17px] text-[#404040] leading-[30px]`}
              >
                Fuerat aestu carentem habentia spectent tonitrua mutastis
                locavit liberioris inistra possedit.
              </p>
              <button
                className={`${Mont.className} px-8 sm:px-12 mt-6  text-[10px] sm:text-[14px] font-[700] font-sans py-[10px] sm:py-[14px] rounded-[30px] tracking-wide uppercase bg-primary text-[#F5F5F5]`}
              >
                &rarr; Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

// max-md2:grid-cols-[repeat(1,100%)]

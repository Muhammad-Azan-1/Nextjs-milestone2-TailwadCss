"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import { Noto_Sans, Montserrat } from "next/font/google";
import Button from "@/components/Button/Button";
import Mainheading from "@/components/Mainheading/Mainheading";

const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});
function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="w-full h-[85vh] md:h-screen   bg-Services-background-Image  bg-cover bg-center bg-no-repeat bg-fixed ">
        <Header />

        <div className="w-full h-[80%]  pt-22 flex flex-col justify-center items-center">
          <Mainheading
            name="Explore the Colourful World"
            name2="With Outdoor Adventures"
            name3="Our Services"
          />
          <Button name="Learn More" />
        </div>
      </div>

      {/* content page */}
      <div className="w-full bg-[#F5F5F5] h-auto">
        <div className="h-[100%] w-full pt-[70px]">
          <h1
            className={`${Mont.className} text-center relative text-[20px] sm:text-[25px] md:text-[34px]  tracking-wide text-[#191919] font-[700] font-Mont`}
          >
            <Typewriter
              options={{
                strings: [
                  ` It's Time to Start Your Adventures`,
                  "With Outdoor Adventures",
                ],
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
                src="/service1.jpg"
                alt="Event hiking"
                width={480}
                height={200}
                className="rounded-md  w-full md:w-[480px]"
              />

              <div className="text-center w-full mt-8">
                <h2
                  className={`${Mont.className} text-[#191919] font-[700] text-[18px]`}
                >
                  Backpacking Trips
                </h2>
                <p
                  className={`${Noto.className} mt-[10px] font-[17px] text-[#404040] leading-[30px]`}
                >
                  Fuerat aestu carentem habentia spectent tonitrua mutastis
                  locavit liberioris inistra possedit.
                </p>
                <Button name="Learn More" />
              </div>
            </div>

            {/* imagebox2 */}
            <div className="">
              <Image
                src="/service2.jpg"
                alt="Event running"
                width={480}
                height={200}
                className="rounded-md w-full md:w-[480px] "
              />

              <div className="text-center w-full mt-8">
                <h2
                  className={`${Mont.className} text-[#191919] font-[700] text-[18px]`}
                >
                  Family Hiking Trips
                </h2>
                <p
                  className={`${Noto.className} mt-[10px] font-[17px] text-[#404040] leading-[30px]`}
                >
                  Fuerat aestu carentem habentia spectent tonitrua mutastis
                  locavit liberioris inistra possedit.
                </p>
                <Button name="Learn More" />
              </div>
            </div>
          </div>

          {/* //? box2 of images */}

          <div className="w-full pl-[15px] pr-[15px] md:pl-20 md:pr-20 mt-[60px] gap-y-10 grid justify-center gird-cols-[(1,1fr)] md:grid-cols-[repeat(2,52%)]  min2:grid-cols-[repeat(2,480px)] md:gap-y-0  gap-x-20 ">
            {/* imagebox1 */}
            <div className="">
              <Image
                src="/service3.jpg"
                alt="Event hiking"
                width={480}
                height={200}
                className="rounded-md  w-full md:w-[480px]"
              />

              <div className="text-center w-full mt-8">
                <h2
                  className={`${Mont.className} text-[#191919] font-[700] text-[18px]`}
                >
                  Water Sports
                </h2>
                <p
                  className={`${Noto.className} mt-[10px] font-[17px] text-[#404040] leading-[30px]`}
                >
                  Fuerat aestu carentem habentia spectent tonitrua mutastis
                  locavit liberioris inistra possedit.
                </p>
                <Button name="Learn More" />
              </div>
            </div>

            {/* imagebox2 */}
            <div className="">
              <Image
                src="/hiking1.jpg"
                alt="Event running"
                width={480}
                height={200}
                className="rounded-md w-full md:w-[480px] "
              />

              <div className="text-center w-full mt-8">
                <h2
                  className={`${Mont.className} text-[#191919] font-[700] text-[18px]`}
                >
                  Winter Sports
                </h2>
                <p
                  className={`${Noto.className} mt-[10px] font-[17px] text-[#404040] leading-[30px]`}
                >
                  Fuerat aestu carentem habentia spectent tonitrua mutastis
                  locavit liberioris inistra possedit.
                </p>
                <Button name="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content box 2 */}
      <div
        id="aboutcontentbox"
        className="w-full h-auto pt-32  flex flex-col md:items-start items-center md:flex-row lg:items-start justify-center px-2 lg:px-1 gap-x-8 min0:gap-x-28 max-md3:mt-8 max-md:mt-0  mt-8  lg:mt-20  "
      >
        <div className="flex flex-col  items-center lg:items-start justify-start  w-full md:w-[470px] h-auto md:h-[350px] ">
          <div className="relative">
            <h1
              className={`${Mont.className} after:absolute after:content[''] after:bottom-[-10px] md:after:bottom-[-20px] after:left-0 font-[700]  after:h-[4px] after:w-full lg:after:w-[75px] after:bg-primary min-max:text-[22px] max2:text-[24px] text-[34px] md:text-[24px] min0:text-[34px] text-[#191919]`}
            >
              Why Outdoor Adventure
            </h1>
          </div>
          <p
            className={`${Noto.className}   text-[#404040] pt-14 text-center text-[16px] md:text-[14px] lg:text-[16px]  lg:text-start`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex flex-col mt-8 lg:mt-6">
            <div className="relative">
              <p
                className={` ${Mont.className} pl-8 after:absolute after:content[''] text-[16px] md:text-[14px] lg:text-[16px]  after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary`}
              >
                Experience: Locavit liberioris possedit
              </p>
            </div>
            <div className="relative mt-3">
              <p
                className={`${Mont.className} pl-8 after:absolute after:content[''] text-[16px] md:text-[14px] lg:text-[16px]  after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary`}
              >
                Reputation: Diremit mundi mare undae
              </p>
            </div>
            <div className="relative mt-3">
              <p
                id="P"
                className={` ${Mont.className} pl-8 after:absolute  after:content[''] text-[16px] md:text-[14px] lg:text-[16px]  after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary`}
              >
                Guide Experience: Spectent tonitrua mutastis
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  items-center lg:items-start justify-start mt-14 md:mt-0  w-full md:w-[520px] h-auto md:h-[350px] ">
          <div className="relative">
            <h1
              className={`${Mont.className} after:absolute after:content[''] after:bottom-[-10px] md:after:bottom-[-20px] after:left-0 font-[700] after:h-[4px] after:w-full lg:after:w-[75px] after:bg-primary  max2:text-[24px] text-[34px] md:text-[24px] min0:text-[34px] text-[#191919]`}
            >
              What You Get
            </h1>
          </div>
          <p
            className={`p1 ${Noto.className} text-[#404040] pt-14 text-[16px] md:text-[14px] lg:text-[16px]   text-center lg:text-start`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex flex-col mt-8 lg:mt-6">
            <div className="relative">
              <p
                className={` ${Mont.className} pl-8 after:absolute  after:content[''] text-[16px] md:text-[14px] lg:text-[16px]  after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary`}
              >
                Private Hike: Locavit liberioris possedit
              </p>
            </div>
            <div className="relative mt-3">
              <p
                id="PT"
                className={` ${Mont.className} pl-8 after:absolute  after:content[''] text-[16px] md:text-[14px] lg:text-[16px]  after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary`}
              >
                Transportation: Diremit mundi mare undae
              </p>
            </div>
            <div className="relative mt-3">
              <p
                id="PTI"
                className={` ${Mont.className} pl-8 after:absolute  after:content[''] text-[16px] md:text-[14px] lg:text-[16px]  after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary`}
              >
                Great Facilities: Spectent tonitrua mutastis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

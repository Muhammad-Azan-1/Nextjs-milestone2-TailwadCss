import Image from "next/image";
import Header from "@/components/Header/Header";
import { Noto_Sans, Montserrat } from "next/font/google";
import Mainheading from "@/components/Mainheading/Mainheading";
import Button from "@/components/Button/Button";
const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});
const About = () => {
  return (
    <>
      <div className="w-full h-[85vh] md:h-screen  bg-About-background-Image  bg-cover bg-center  bg-fixed ">
        <Header />

        <div className="w-full h-full flex flex-col items-center pt-24  justify-start mt-20 md:mt-14">
          <Mainheading
            name="Explore the Colourful World"
            name2="With Outdoor Adventures"
            name3="Who We Are ?"
          />
          <Button name="Learn More" />
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] h-auto lg:pt-0 flex flex-col md:items-start items-center md:flex-row justify-center  lg:px-1 gap-x-8 px-2  min0:gap-x-28 pt-10  md:pt-20">
        <div className="flex flex-col pt-3 lg:pt-0 items-center md:items-start justify-start lg:justify-center w-full md:w-[470px] h-auto md:h-[350px] ">
          <div className="relative">
            <h1
              className={`${Mont.className} after:absolute after:content[''] after:bottom-[-10px] md:after:bottom-[-20px] after:left-0 font-[700] after:h-[4px] after:w-full md:after:w-[75px] after:bg-primary  text-[34px] text-[#191919]`}
            >
              Our MissioN
            </h1>
          </div>
          <p
            className={`${Noto.className} text-[#404040] pt-8 min-md:pt-14 text-center md:text-start`}
          >
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            adipiscing elit.
          </p>
          <p
            className={`${Noto.className} text-center md:text-start text-[#404040] pt-4 md:pt-6 min-md:pt-6 `}
          >
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="mt-14 md:mt-0">
          <Image
            src="/aboutus.jpg"
            alt="ABout us"
            width={520}
            height={350}
            className="rounded-md w-[600px] h-auto md:w-[450px] lg:w-[520px]"
          ></Image>
        </div>
      </div>

      {/*//? box two */}

      <div className="w-full bg-[#F5F5F5] h-auto pt-4 lg:pt-0 flex flex-col md:items-start items-center md:flex-row lg:items-start justify-center px-2 lg:px-1 gap-x-8 min0:gap-x-28 max-md3:mt-8 max-md:mt-0  mt-8  lg:mt-20  ">
        <div className="flex flex-col  items-center lg:items-start justify-start  w-full md:w-[470px] h-auto md:h-[350px] ">
          <div className="relative">
            <h1
              className={`${Mont.className} after:absolute after:content[''] after:bottom-[-10px] md:after:bottom-[-20px] after:left-0 font-[700]  after:h-[4px] after:w-full lg:after:w-[75px] after:bg-primary min-max:text-[22px] max2:text-[24px] text-[34px] md:text-[24px] min0:text-[34px] text-[#191919]`}
            >
              Extraordinary Experiences
            </h1>
          </div>
          <p
            className={`${Noto.className}   text-[#404040] pt-14 text-center text-[16px] md:text-[14px] lg:text-[16px]  lg:text-start`}
          >
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            adipiscing elit.
          </p>
          <p
            className={`${Noto.className}  text-center lg:text-start text-[#404040] text-[16px] md:text-[14px] lg:text-[16px] pt-8 lg:pt-6 `}
          >
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="flex flex-col  items-center lg:items-start justify-start mt-14 md:mt-0  w-full md:w-[520px] h-auto md:h-[350px] ">
          <div className="relative">
            <h1
              className={`${Mont.className} after:absolute after:content[''] after:bottom-[-10px] md:after:bottom-[-20px] after:left-0 font-[700] after:h-[4px] after:w-full lg:after:w-[75px] after:bg-primary  max2:text-[24px] text-[34px] md:text-[24px] min0:text-[34px] text-[#191919]`}
            >
              Our Core Values
            </h1>
          </div>
          <p
            className={`${Noto.className} text-[#404040] pt-14 text-[16px] md:text-[14px] lg:text-[16px]   text-center lg:text-start`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex flex-col mt-8 lg:mt-6">
            <div className="relative">
              <p
                className={`${Noto.className} pl-8 after:absolute after:content[''] text-[#404040]    after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary `}
              >
                Locavit liberioris possedit
              </p>
            </div>
            <div className="relative mt-3">
              <p
                className={`${Noto.className} pl-8 after:absolute after:content[''] text-[#404040]    after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary `}
              >
                Diremit mundi mare undae
              </p>
            </div>
            <div className="relative mt-3">
              <p
                className={`${Noto.className} pl-8 after:absolute after:content[''] text-[#404040]    after:bottom-[8px] after:left-[0px]  after:h-[4px]  after:w-[20px] after:bg-primary `}
              >
                {" "}
                Spectent tonitrua mutastis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

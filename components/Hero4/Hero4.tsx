import Button from "../Button/Button";
import Image from "next/image";
import { Noto_Sans, Montserrat } from "next/font/google";

const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});
const Hero4 = () => {
  return (
    <>
      <div className="w-full h-auto lg:h-full items-center  lg:items-start flex-col lg:flex-row px-1 flex justify-center gap-x-6 min1:px-0 min1:gap-x-8 pt-20">
        <div className="w-full lg:w-[350px] h-auto lg:h-[630px] items-center lg:items-start flex flex-col justify-start gap-y-8 lg:gap-y-12">
          <div className="relative">
            <h1
              className={`${Mont.className} mb-2 text-center sm:text-start after:absolute after:content[''] text-[#191919] font-[700] min-max:text-[20px]  text-[25px] md:text-[35px] min1:text-[40px] after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full lg:after:w-[75px] after:bg-primary`}
            >
              Upcoming Tours & Destination
            </h1>
          </div>
          <p
            className={`text-[#404040] ${Noto.className} text-center lg:text-start`}
          >
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris. Sinistra possedit litora ut nabataeaque. Setucant
            coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque
            constaque cepit sublime flexi nullus.
          </p>
          <div className="gap-y-0">
            <Button name="Learn More" noMargin="mt-0" />
          </div>
        </div>

        <div className="flex flex-col w-full h-auto  px-3  sm:w-auto sm:flex-row gap-y-6 sm:gap-y-0 gap-x-5  pt-16 lg:pt-0">
          <div className="flex-col flex gap-y-5 sm:gap-y-0  justify-between w-[100%] lg:w-[320px] min1:w-[360px] h-auto sm:h-[612px] ">
            <div className="w-full flex sm:inline-block justify-center">
              <Image
                src="/hiking1.jpg"
                alt="hiking on snowy mountains"
                width={360}
                height={225}
                className=" max2:w-[380px] w-[80%] sm:w-[360px] h-[300px] sm:h-[225px] rounded-md"
              ></Image>
            </div>

            <div className="w-full flex sm:inline-block justify-center">
              <Image
                src="/hiking3.jpg"
                alt="cycling on mountains"
                width={360}
                height={368}
                className="max2:w-[380px] w-[80%] sm:w-[360px] h-[450px] sm:h-[368px] rounded-md"
              ></Image>
            </div>
          </div>

          <div className="flex-col flex gap-y-5 sm:gap-y-0  justify-between w-[100%] lg:w-[300px] min1:w-[360px] h-auto sm:h-[612px] ">
            <div className="w-full flex sm:inline-block justify-center">
              <Image
                src="/hiking2.jpg"
                alt="hiking on snowy mountains"
                width={360}
                height={368}
                className="max2:w-[380px] w-[80%] sm:w-[360px] h-[450px] sm:h-[368px] rounded-md"
              ></Image>
            </div>

            <div className="w-full flex sm:inline-block justify-center">
              <Image
                src="/hiking4.jpg"
                alt="cycling on mountains"
                width={360}
                height={225}
                className="max2:w-[380px] w-[80%] sm:w-[360px] h-[300px] sm:h-[225px] rounded-md"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;

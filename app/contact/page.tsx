import Header from "@/components/Header/Header";
import { Noto_Sans, Montserrat } from "next/font/google";
import Button from "@/components/Button/Button";
import Mainheading from "@/components/Mainheading/Mainheading";
import Link from "next/link";
const Mont = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
const page = () => {
  return (
    <>
      <div className="w-full h-[85vh] md:h-screen bg-contact-background-Image  bg-cover  md:bg-center bg-no-repeat bg-fixed ">
        <Header />

        <div className="w-full h-[80%]  pt-22 flex flex-col justify-center items-center">
          <Mainheading
            name="Explore the Colourful World"
            name2="With Outdoor Adventures"
            name3="Contact Us"
          />
          <Button name="Learn More" />
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] h-auto pt-20 md:pt-28 flex flex-col gap-y-14 sm:gap-y-16 md:gap-y-0 md:flex-row justify-center gap-x-12 lg:gap-x-16 px-2 pb-16 md:pb-20 items-center">
        <div className="w-full sm:w-[565px] h-[470px]   flex flex-col">
          <div>
            <h1
              className={`text-[#191919] font-[700] text-center md:text-start max2:text-[25px] text-[30px] sm:text-[34px] md:text-[28px] lg:text-[34px] ${Mont.className} `}
            >
              We&#39;re Ready, Let&#39;s Talk.
            </h1>
          </div>

          <div className="pt-8 flex flex-col items-center md:items-start justify-evenly h-[330px]">
            <input
              className="border-[1px] pl-3 w-[95%] h-[50px] md:w-full border-[#dddddd]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border-[1px] pl-3 w-[95%] h-[50px] md:w-full border-[#dddddd]"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="border-[1px] pl-3 pt-3 w-[95%] md:w-full  border-[#dddddd]"
              placeholder="Message"
              rows={5}
              cols={40}
            ></textarea>
          </div>

          <div className="text-center md:text-start">
            <Button name="Send Message" />
          </div>
        </div>

        <div className="w-full sm:w-[400px] h-[470px]">
          <div>
            <h1
              className={`text-[#191919] inline-block w-full font-[700] text-[30px] sm:text-[34px] text-center md:text-start md:text-[28px] lg:text-[34px] ${Mont.className} `}
            >
              Contact Info
            </h1>
          </div>

          <div className="flex pt-[40px] justify-between items-center md:items-start  flex-col h-[240px]">
            <div>
              <h1
                className={`${Mont.className} text-center md:text-start text-[18px] text-[#191919] font-[700]`}
              >
                Address​
              </h1>
              <p className={`${Noto.className} text-center text-[#404040]`}>
                123 Fifth Avenue, NY 10160, New York, USA
              </p>
            </div>

            <div>
              <h1
                className={`${Mont.className} text-center md:text-start text-[18px] text-[#191919] font-[700]`}
              >
                Email Us​
              </h1>
              <p className={`${Noto.className} text-[#404040]`}>
                muhammad.azan18@icloud.com​
              </p>
            </div>

            <div>
              <h1
                className={`${Mont.className} text-[18px] text-center md:text-start text-[#191919] font-[700]`}
              >
                Call Us​
              </h1>
              <Link
                className={`${Noto.className} text-[#404040]`}
                href="tel:+923101285239"
              >
                0310-128523-9
              </Link>
            </div>
          </div>

          <div className="pt-8 md:pt-6">
            <h1
              className={`text-[#191919] inline-block w-full text-center md:text-start font-[700] text-[18px] ${Mont.className} `}
            >
              Follow Us
            </h1>

            <div className="flex w-full  justify-center md:justify-start pt-4">
              <div className="w-10 h-10 rounded-[50%] flex justify-center items-center bg-primary">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white text-[18px]"
                />
              </div>

              <div className="w-10 h-10 ml-4 md:ml-3 rounded-[50%] flex justify-center items-center bg-primary">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-[18px]"
                />
              </div>

              <div className="w-10 h-10 ml-4 md:ml-3 rounded-[50%] flex justify-center items-center bg-primary">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

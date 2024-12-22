"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Noto_Sans } from "next/font/google";

export const Noto = Noto_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});
const Header = () => {
  const [Menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((menu: boolean) => !menu);
  }

  return (
    <>
      <div className="w-full md:h-28  h-[80px] flex items-center justify-around max-md:px-2 px-5 bg-[#F5F5F5] md:bg-transparent ">
        {/* LOGO */}
        <div className=" w-[100%] md:w-auto hidden md:inline-block">
          <Image src="/logo.png" alt="Logo" width={150} height={80} />
        </div>

        {/* Logo2  visiblw for small screen*/}

        <div className=" w-[100%] inline-block md:hidden">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={130}
            height={80}
            className="min-max:w-[110px]"
          />
        </div>

        <div className="inline-block md:hidden h-[41px] w-[41px] p-[10px] rounded-sm text-center md:bg-none bg-primary border-[1px] border-primary">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="text-white text-[20px] absolute top-[31px] right-[20px]"
            icon={faBars}
          />
        </div>

        {/* MENU BAR */}

        <div
          className={`${
            Noto.className
          } pl-8 text-black md:text-[#F5F5F5] md:static absolute  bg-[#F5F5F5] 
    text-[18px] z-[10000]  md:w-[80%] w-full h-screen  md:h-0  flex flex-col justify-start 
    items-center md:flex-row md:justify-end md:items-center transform transition-transform duration-1000 ease-in-out
    ${Menu ? "top-[0px] translate-y-0 " : "translate-y-[-100%] "}`}
        >
          <Link href="/">
            <div className=" left-3 absolute top-8 inline-block md:hidden">
              <Image
                src="/logo2.png"
                alt="Logo"
                width={130}
                height={80}
                className="max2:w-[90px] w-[110px]"
              />
            </div>
          </Link>
          <Link
            className='relative mt-[80px] md:mt-0  md:mr-10 max-md:mr-8 tracking-wider text-[18px] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
        after:bg-primary after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700 font-[600] md:font-[400]'
            href="/"
          >
            {" "}
            Home
          </Link>
          <Link
            className='relative mt-[40px]  md:mt-0   md:mr-10   max-md:mr-8  tracking-wider text-[18px] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-primary after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700 font-[600] md:font-[400]'
            href="/about"
          >
            {" "}
            About
          </Link>
          <Link
            className='relative mt-[40px]  md:mt-0   md:mr-10 max-md:mr-8  tracking-wider text-[18px]  after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-primary after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700 font-[600] md:font-[400]'
            href="/services"
          >
            Services
          </Link>

          <Link
            className='relative mt-[40px] md:mt-0    md:mr-10 max-md:mr-8  tracking-wider text-[18px]  after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-primary after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700 font-[600] md:font-[400]'
            href="/contact"
          >
            Contact
          </Link>

          <Link href="/">
            {" "}
            <button
              className={`${Noto.className} px-9 mt-[40px] md:mt-0  ml-[-14px] md:ml-0 text-[14px] font-[700] font-sans py-[10px] rounded-[30px] tracking-wide uppercase bg-primary text-[#F5F5F5]`}
            >
              Take Action
            </button>
          </Link>

          {/* cros icon initally hidden */}
          <div className="inline-block md:hidden">
            <FontAwesomeIcon
              onClick={toggleMenu}
              className="text-black text-[25px] absolute top-8 right-6"
              icon={faTimes}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;


import Image from "next/image"
import Link from "next/link"
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Manually import the CSS
config.autoAddCss = false;
import { faPhone, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
        <div  className="w-full text-white  bg-[#404040] h-auto  pt-12"> 
            <div className="pb-6 w-full flex justify-center gap-x-16 px-2 gap-y-12 lg:gap-y-0 lg:px-0 lg:gap-x-0 lg:justify-evenly flex-wrap h-full items-start">
            <ul className={` leading-7`}>
            <li className="mb-3 logo">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={100}
                id="logo"
              />
            </li>
            <li className="mb-3 mt-2">Moving Pakistan Forward</li>
            <li className="mb-3">
              <Link href="tel:+923101285239">
                <FontAwesomeIcon icon={faPhone}  />{" "}
                0310-1285239
              </Link>
            </li>
            <li>
              {" "}
              <Link href="https://www.linkedin.com/in/muhammad-azan-/">
                <FontAwesomeIcon icon={faMailForward} /> info@OutdoorAdventure.com
              </Link>
            </li>
          </ul>


          
          <ul className=''>
            <li className="mb-3  font-bold text-[18px]">About</li>
            <li>Company</li>
            <li>Team</li>
            <li> Mission, Vision & Values</li>
            <li> Social Impact</li>
            <li>Press & Media</li>
            <li>Careers</li>
            <li>Franchise</li>
            <li>Security</li>
          </ul>

          <ul className=''>
            <li className="mb-3 font-bold text-[18px]">Products</li>
            <li>Ride</li>
            <li>Insurance</li>
            <li>Shops</li>
            <li>Delivery</li>
            <li>RevUp Scooter For Bussiness</li>
          </ul>

          
          <ul className='ul4'>
            <li className="mb-3 font-bold text-[18px]">Outdoor Adventure</li>
            <li>About Partner</li>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact us</li>
          </ul>
            </div>


            <div className="border-solid border-[2px] border-[#222d2e] "></div>

        <div
          className={` max2:flex-col max2:pt-3 flex justify-between max2:h-auto h-[10vh] px-2  items-center`}
        >
          <div className={`  ml-3`}>
            <p className={` text-white font-semibold  `}>
            Copyright © 2024 Outdoor Adventure
            </p>
          </div>


          <div
            className={` w-[180px]  max2:pt-3  text-[20px] flex justify-between text-white pr-4 `}
          >
            <Link className="text-[#1877F2]" href="">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link className="text-[#DD2A7B]" href="">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link className="text-[#0077B5]" href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link className="text-[#1DA1F2]" href="">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
        </div>
    </>
  )
}

export default Footer
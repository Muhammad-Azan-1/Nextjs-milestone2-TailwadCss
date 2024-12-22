"use client"
import {Montserrat} from 'next/font/google'
export const Mont = Montserrat({
  weight: [ "400", "600","700","900"],
  subsets: ["latin"],
});
 const Button = (prop:{name:string , noMargin?:string}) => {
  return (
    <button className={`${Mont.className} px-8 sm:px-12 ${prop.noMargin ?  'mt-0' : 'mt-6'}  text-[10px] sm:text-[14px] font-[700] font-sans py-[10px] sm:py-[14px] rounded-[30px] tracking-wide uppercase bg-primary cursor-pointer  hover:bg-[rgba(251,32,86,0.8)] text-[#F5F5F5]`}>
            &rarr; {prop.name}
    </button>
  )
}

export default Button;
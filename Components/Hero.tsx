import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="pt-[4rem] pb-[5rem] md:pt-[8rem] bg-[url('/images/banner.jpg')] bg-[#121721] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] gird-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I AM <span className="text-yellow-400">PATRICIA!</span>
          </h1>
          <TextEffect />
          <p className="text-[#ffffff92] mt-[1.5rem] text-[18px]">
            Experienced Frontend Software Developer with a demonstrated history
            of working in the computer networking industry. Skilled in Angular,
            Typescript, React, Nextjs, JavaScript, WordPress, and HTML, Css,
            Tailwind, Bootstrap and Search Engine Optimization.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white">
                Whatch the Video
              </p>
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[500px] bg-[#55e6a5] relative lg:flex items-center rounded-full md:hidden">
          <Image
            src="/images/image2.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

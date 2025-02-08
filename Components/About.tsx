import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[4rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/image6.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] top-[-2rem] left-[-2rem] bg-[#55e6a5]"></div>
        </div>
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            About me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            {/* <span className="w-[100px] h-[5px] hidden md:block bg-slate-400 rounded-sm"></span> */}
            <p className="text-[18px] text-slate-300 w-[80%] text-center">
             As a Frontend Developer, I transform
              creative visions into intuitive, interactive, and visually
              captivating interfaces. My mission is to bridge the gap between
              design and technology, crafting seamless user experiences that
              leave a lasting impact. Through continuous learning, embracing
              innovation, and leveraging the latest tools, I’m committed to
              pushing boundaries and setting new standards in modern web
              development.
            </p>
          </div>
          <button className="w-[80%] px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center text-center justify-center space-x-2">
            <p>Download Cv</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] pb-[5rem] md:pt-[8rem]">
    <p className="heading text-center text-[24px] md:text-[32px]">
      My <span className="text-yellow-400">Services</span>
    </p>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] sm:w-[80%] mx-auto items-center gap-[2rem] 
      mt-[2rem] sm:mt-[4rem] text-white"
    >
      <div>
        <div
          className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-center p-[1.5rem] sm:p-[2rem]"
        >
          <CodeBracketSquareIcon className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] mt-[1rem] sm:mt-[1.5rem] mb-[1rem] sm:mb-[1.5rem]">
            Frontend
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#d3d2d2] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus
            perferendis nesciunt fugit blanditiis id, voluptatum odit eveniet veritatis ab?
          </p>
        </div>
      </div>
      <div>
        <div
          className="bg-orange-700 hover:scale-110 transform transition-all duration-300 
          uppercase font-semibold text-center p-[1.5rem] sm:p-[2rem]"
        >
          <RocketLaunchIcon className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] mt-[1rem] sm:mt-[1.5rem] mb-[1rem] sm:mb-[1.5rem]">
            Wordpress
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#d3d2d2] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus
            perferendis nesciunt fugit blanditiis id, voluptatum odit eveniet veritatis ab?
          </p>
        </div>
      </div>
      <div>
        <div
          className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 
          uppercase font-semibold text-center p-[1.5rem] sm:p-[2rem]"
        >
          <CommandLineIcon className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] mt-[1rem] sm:mt-[1.5rem] mb-[1rem] sm:mb-[1.5rem]">
            Fullstack
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#d3d2d2] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus
            perferendis nesciunt fugit blanditiis id, voluptatum odit eveniet veritatis ab?
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Services;

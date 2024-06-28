import React from "react";
import banner1 from "../assets/Banner/Vector.png";
import banner3 from "../assets/Banner/Vector (1).png";
import banner5 from "../assets/Banner/Vector (3).png";
import banner6 from "../assets/Banner/Vector (4).png";
import banner7 from "../assets/Banner/Vector (5).png";
import banner8 from "../assets/Banner/Vector (6).png";

const Banner = () => {
  return (
    <div className="bg-[#3E40C3] pt-10 rounded-3xl relative h-[400px] lg:h-[730px] overflow-hidden group w-full">
      {/*cloud1  */}
      <img
        src={banner1}
        className="top-1 absolute -left-10 group-hover:left-5 sm:left-4 sm:group-hover:left-10  lg:group-hover:left-28 duration-1000 scale-[0.25] sm:scale-50 lg:scale-100  "
      />

      {/* cloud 2 */}
      <img
        src={banner1}
        className=" translate-x-20 group-hover:translate-x-24  sm:translate-x-80 sm:group-hover:translate-x-96  translate-y-8 sm:-translate-y-8 lg:translate-y-24 lg:group-hover:translate-x-96 duration-1000 scale-[0.25] lg:scale-75 z-20 "
      />

      {/* sky */}
      <img
        src={banner6}
        className="absolute bottom-0 lg:bottom-10 group-hover:bottom-[20px] sm:group-hover:bottom-[40px] lg:group-hover:bottom-[70px] duration-500  w-full  "
      />

      <div className="absolute bottom-0  w-full  ">
        {/* border line */}
        <img src={banner5} className=" w-full z-30 " />
        <div className="relative w-full h-full z-0 ">
          {/* bridge */}
          <img
            src={banner7}
            className="absolute -right-5 bottom-4 sm:bottom-11
             lg:bottom-[70px] group-hover:right-0 duration-700  z-20   w-4/5 "
          />
          {/* building */}
          <img
            src={banner3}
            className="absolute bottom-5 sm:bottom-12  lg:bottom-[70px] left-0 group-hover:left-4 duration-500 h-fit w-full"
          />
          {/* statue */}
          <img
            src={banner8}
            className="absolute -bottom-64  sm:-bottom-48 group-hover:-bottom-56 sm:group-hover:-bottom-32  lg:-bottom-10 lg:group-hover:bottom-2  duration-500 -left-5 sm:left-16 lg:left-[190px] scale-[0.25] sm:scale-50 lg:scale-110 z-20 "
          />
        </div>
      </div>

      {/* banner text */}
      <div className="container mx-auto flex justify-end -mt-0 sm:-mt-16 px-4">
        <div className="w-fit text-center z-50">
          <h1 className="font-bold text-4xl lg:text-6xl text-white mb-0 sm:mb-5">
            Study in the USA
          </h1>
          <p className="font-medium text-base  lg:text-lg text-[#88F3D0] max-w-sm mx-auto">
            Here’s a comprehensive guide for all students who want to study in
            the USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

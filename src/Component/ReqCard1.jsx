import React from "react";
import req1 from "../assets//Requirement/49 a 1.png";
import req5 from "../assets//Requirement/Right.svg";

const ReqCard1 = () => {
  return (
    <div className="bg-[#59C3CF] pt-14 px-10  rounded-3xl transition-transform ease-in-out  duration-1000 group">
      <div className="text-white ">
        <h1 className="font-semibold text-2xl lg:text-4xl mb-3 ">Diploma</h1>
        <p className="font-light lg:text-base text-sm ">
          Students usually need to have completed their secondary education,
          such as SSC or O-levels, with satisfactory grades. The specific grade
          requirements may vary depending on the university and program.
        </p>
        <br />
        <div className="font-light h-0 group-hover:h-auto   opacity-0 group-hover:opacity-100  transition duration-1000 lg:text-base text-sm ">
          Students usually need to have completed their secondary education,
          such as SSC or O-levels, with satisfactory grades. The specific grade
          requirements may vary depending on the university and program.
        </div>
      </div>

      <div className="flex justify-between items-end ">
        <img
          src={req5}
          className="relative bottom-8 left-0 scale-50 md:scale-75 lg:scale-100 group-hover:opacity-0 opacity-100 duration-1000 "
        />
        <img
          src={req1}
          className="z-20 lg:w-auto w-2/3 group-hover:w-2/3   lg:group-hover:w-full mt-5 group-hover:mt-12 duration-700"
        />
      </div>
    </div>
  );
};

export default ReqCard1;

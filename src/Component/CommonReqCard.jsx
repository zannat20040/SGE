import React from "react";
import req5 from "../assets//Requirement/Right.svg";


const CommonReqCard = ({ heading, details, img, style }) => {
  return (
    <div
      className={`${style} pt-14 px-10  rounded-3xl transition-transform ease-in-out  duration-1000 group`}
    >
      <div className="text-white ">
        <h1 className="font-semibold text-2xl lg:text-4xl mb-3 ">{heading}</h1>
        <p className="font-light h-full group-hover:h-0  opacity-100 group-hover:opacity-0  ">
          {details}
        </p>
        <div className=" h-0 group-hover:h-auto  opacity-0 group-hover:opacity-100   duration-1000">
          <p className="font-light lg:text-base text-sm ">
            Students usually need to have completed their secondary education,
            such as SSC or O-levels, with satisfactory grades. The specific
            grade requirements may vary depending on the university and program.
          </p>
          <br />
          <p className="font-light lg:text-base text-sm ">
            Students usually need to have completed their secondary education,
            such as SSC or O-levels, with satisfactory grades. The specific
            grade requirements may vary depending on the university and program.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end ">
        <img
          src={req5}
          className="relative bottom-8 left-0 scale-50 md:scale-75 lg:scale-100 group-hover:opacity-0 opacity-100 duration-1000 "
        />
        <img
          src={img}
          className="z-20 lg:w-auto w-2/3 group-hover:w-2/3   lg:group-hover:w-full mt-5 group-hover:mt-12 duration-700"
        />
      </div>
    </div>
  );
};

export default CommonReqCard;

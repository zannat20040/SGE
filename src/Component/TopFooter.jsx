import React from "react";
import Button from "./Button";
import footer1 from "../assets/Footer/5.png";
import footer2 from "../assets/Footer/Expert USA 1.png";

const TopFooter = () => {
  return (
    <>
      {/* 1st column  */}
      <div className="py-10">
        <h1 className="font-semibold text-white lg:text-5xl md:text-3xl text-2xl mb-8 text-center lg:text-left">
          Talk to Our Expert USA Counselor
        </h1>

        <button className="btn w-full lg:btn-wide bg-white rounded-full btn-md lg:btn-lg font-bold text-base lg:text-lg shadow hover:border-blue-600 border border-transparent  text-black hover:text-blue-500 hover:bg-white ">
          Contact Now
        </button>
      </div>
      {/* 2nd column */}
      <div
        className="relative lg:bg-auto bg-no-repeat bg-center h-96  w-full   "
        style={{ backgroundImage: `url(${footer1})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-center w-full md:w-3/4 lg:w-full mx-auto">
          <img
            src={footer2}
            className="mx-auto w-full h-full"
            alt="Footer Image"
          />
        </div>
      </div>
    </>
  );
};

export default TopFooter;

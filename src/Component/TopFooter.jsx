import React from "react";
import Button from "./Button";
import footer1 from "../assets/Footer/5.png";
import footer2 from "../assets/Footer/Expert USA 1.png";

const TopFooter = () => {
  return (
    <>
      {/* 1st column  */}
      <div className="py-10">
        <h1 className="font-semibold text-white text-5xl mb-8">
          Talk to Our Expert USA Counselor
        </h1>
        <button className="btn w-full lg:btn-wide bg-white rounded-full btn-lg font-bold text-lg shadow hover:border-blue-600 border border-transparent  text-black hover:text-blue-500 hover:bg-white ">
          Contact Now
        </button>
      </div>
      {/* 2nd column */}
      <div
        className="relative bg-auto bg-no-repeat bg-center h-96 "
        style={{ backgroundImage: `url(${footer1})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <img
            src={footer2}
            className="w-full md:w-3/4 mx-auto lg:w-full"
            alt="Footer Image"
          />
        </div>
      </div>
    </>
  );
};

export default TopFooter;

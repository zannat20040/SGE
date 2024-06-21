import React from "react";
import logo from "../assets//Footer/SGE Logo V 2 1.png";

const Logo = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center border-b border-white pb-5">
      <h1 className="text-2xl font-semibold text-white">Our Students are Our Reference</h1>
      <img src={logo} alt="" srcset="" />
      
    </div>
  );
};

export default Logo;

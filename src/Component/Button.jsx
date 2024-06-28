import React from "react";

const Button = ({label}) => {
  return (
    <button className="btn md:btn-wide bg-white rounded-full btn-md lg:btn-lg font-bold text-base lg:text-lg shadow hover:border-blue-600 border border-transparent  text-black hover:text-blue-500 hover:bg-white ">{label}</button>
  );
};

export default Button;

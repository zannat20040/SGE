import React from "react";

const Button = ({label}) => {
  return (
    <button className="btn sm:btn-wide bg-white rounded-full btn-lg font-bold text-lg shadow hover:border-blue-600 border border-transparent  text-black hover:text-blue-500 hover:bg-white ">{label}</button>
  );
};

export default Button;

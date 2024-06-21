import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const BottomFooter = () => {
  return (
    <footer className=" items-center pb-4 px-4 text-white justify-between container mx-auto grid-cols-1 grid md:grid-cols-3  gap-5 ">
      <nav className="flex gap-4 col-span-1 justify-center md:justify-start">
        <FaFacebookF  className="text-lg"/>
        <FaInstagram  className="text-lg"/>
        <FaLinkedinIn  className="text-lg"/>
        <FaYoutubeSquare className="text-lg" />
      </nav>

      <aside className="flex flex-wrap md:flex-nowrap gap-3 items-center justify-start md:justify-end col-span-2">
        <p className="inline font-light">
          Copyright © 2024 - All right reserved{" "}
          <p className="inline underline font-light">Sobuj Global Education</p>
        </p>
        <p className=" font-light">Terms & Conditions</p>
        <p className=" font-light">Privacy Policy</p>
      </aside>
    </footer>
  );
};

export default BottomFooter;

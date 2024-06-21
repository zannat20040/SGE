import React from "react";
import img1 from "../assets/Document/Vector.png";
import img2 from "../assets/Document/freepik--Ladder--inject-1--inject-24.png";
import img3 from "../assets/Document/freepik--Plant--inject-1--inject-24.png";
import img4 from "../assets/Document/freepik--background-simple--inject-1--inject-24.png";
import img5 from "../assets/Document/freepik--character-1--inject-1--inject-24.png";
import img6 from "../assets/Document/freepik--character-2--inject-1--inject-24.png";

const AtaGlanceImg = () => {
  return (
    <div className="relative w-fit h-fit">
      <img src={img5} alt="" className="mx-auto z-20 relative agAnimation1" />
      <div className=" w-full  text-center z-20 ">
        <img src={img1} alt="mx-auto w-inherit " />
      </div>
      <div className="absolute  right-20  bottom-24 z-10 agAnimation2">
        <img src={img2} alt="" />
      </div>
      <div className="absolute  top-44 z-10 agAnimation3">
        <img src={img3} alt="" />
      </div>
      <div className="absolute  top-40 right-0  z-30 agAnimation4">
        <img src={img6} alt="" />
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto  ">
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default AtaGlanceImg;

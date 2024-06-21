import React from "react";
import state1 from "../assets/Statement/Vector.png";
import state2 from "../assets/Statement/freepik--Documents--inject-22.png";
import state3 from "../assets/Statement/freepik--Plants--inject-22.png";
import state4 from "../assets/Statement/freepik--filing-cabinets--inject-22.png";
import state5 from "../assets/Statement/freepik--folder-1--inject-22.png";
import state6 from "../assets/Statement/freepik--folder-2--inject-22.png";
const StatementImg = () => {
  return (
    <div className="pt-20 lg:p-0">
      <div className="relative">
        <img src={state1} alt="" />
        <div className="absolute left-5 right-0 mx-auto  stateAnimation1">
          <img src={state4} alt="" className="  " />
        </div>
        <div className="absolute left-32  w-1/3 z-10  stateAnimation2 ">
          <img src={state5} alt="" />
        </div>
        <div className="absolute left-40 -top-14  w-1/3 z-20">
          <img src={state6} alt="" />
        </div>{" "}
        <div className="absolute left-60 -top-16   w-1/3 z-30 stateAnimation3">
          <img src={state2} alt="" />
        </div>
        <div className="absolute  left-24 w-2/3  stateAnimation4 ">
          <img src={state3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StatementImg;

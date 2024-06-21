import React from "react";
import docu1 from "../assets/Docu/freepik--Character--inject-23.png";
import docu2 from "../assets/Docu/freepik--Documents--inject-23.png";
import docu3 from "../assets/Docu/freepik--background-complete--inject-23.png";
import docu4 from "../assets/Docu/freepik--Shadow--inject-23.png";

const DocumentImg = () => {
  return (
    <div>
      <div className="relative">
        <img src={docu3} alt="" className="docuAnimation1 " />
        <div className="absolute -bottom-6 left-0 right-0 mx-auto docuAnimation2">
          <img src={docu4} alt="" />
        </div>
        <div className="absolute bottom-0   w-1/3  docuAnimation3">
          <img src={docu1} alt="" />
        </div>
        <div className="absolute -bottom-2 left-10 w-2/3 docuAnimation4">
        <img src={docu2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DocumentImg;

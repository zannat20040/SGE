import React from "react";
import faq1 from "../assets/FAQimg/freepik--Character--inject-163.png";
import faq3 from "../assets/FAQimg/freepik--Floor--inject-163.png";
import faq4 from "../assets/FAQimg/freepik--Plant--inject-163.svg";
import faq7 from "../assets/FAQimg/freepik--background-complete--inject-163.png";
import faq8 from "../assets/FAQimg/freepik--question-mark--inject-163.png";
import faq9 from "../assets/FAQimg/freepik--speech-bubble--inject-163.svg";

const FAQImg = () => {
  return (
    <div className="relative w-fit h-fit">
      <img src={faq7} alt="" className=" mx-auto  faqAnimation1" />
      <div className=" mx-auto faqAnimation2">
        <img src={faq3} alt="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-2/3 faqAnimation3 ">
        <img src={faq8} alt=" mx-auto" />
      </div>
      <div className="absolute bottom-0  faqAnimation4">
        <img src={faq1} alt="" />
      </div>{" "}
      <div className="absolute     faqAnimation5">
        <img src={faq9} alt="" />
      </div>
      <div className="absolute bottom-0 left-10 faqAnimation6">
        <img src={faq4} alt="" />
      </div>
    </div>
  );
};

export default FAQImg;

import React from "react";
import statue1 from "../assets/WhyUs/Group.svg";
import statue2 from "../assets/WhyUs/Group (1).svg";
import statue3 from "../assets/WhyUs/Vector.svg";

const WhyUs = () => {
  return (
    <div className="bg-[#EFF6FF] rounded-3xl py-16 md:px-10 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-10 container mx-auto bg-[#BF0C3D] rounded-3xl px-4 h-[650px] duration-150 md:h-auto why-us">
        {/* left text section  */}
        <div className="col-span-1 md:col-span-6 lg:col-span-8 text-center text-white p-6 md:p-14  md:pr-0">
          <h1 className="text-2xl sm:text-4xl font-semibold mb-7 mt-5 md:mt-0">
            Why Study in The USA?
          </h1>
          <p className="font-light text-justify sm:text-base text-sm">
            The USA is a prime destination for higher education for several
            reasons. It hosts many globally ranked universities, with 16 of the
            top 50 according to the QS World University Rankings 2024. There is
            a wide variety of popular courses to choose from, and excellent job
            prospects thanks to the presence of numerous Fortune 500 companies,
            including those in Silicon Valley. US universities offer world-class
            research opportunities and renowned faculty, along with the most
            scholarships and financial aid options available.
          </p>
        </div>

        {/* right statue section */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2 relative statue w-full ">
          <div className="absolute bottom-0 md:left-16 right-0  md:mx-auto w-fit  mr-0 lg:w-full">
            <img src={statue1} className="relative statue1-animation " />
            <img src={statue2} />
            <img src={statue3} className="statue3-animation2 relative left-0" />
            <img src={statue3} className="statue3-animation relative left-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

import React from "react";
import req2 from "../assets/Requirement/49 a 1 (1).png";
import req3 from "../assets/Requirement/49 a 1 (2).png";
import req4 from "../assets/Requirement/49 a 1 (3).png";
import ReqCard1 from "../Component/ReqCard1";
import CommonReqCard from "../Component/CommonReqCard";
import SectionHeading from "../Component/SectionHeading";

const Requirement = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      {/* heading */}
      <SectionHeading label={"Requirements for Studying in the US"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt">
        {/* First Column */}
        <div className="flex flex-col gap-6">
          <ReqCard1 />
          <CommonReqCard
            heading={"Master’s"}
            details={
              "Hold a relevant Bachelor's degree or an equivalent qualification from a recognized institution."
            }
            img={req3}
            style={"bg-[#A881F3] "}
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-6">
          <CommonReqCard
            heading={"Bachelor’s"}
            details={
              "Students need to have completed their higher secondary education, such as HSC or A-levels, with satisfactory grades."
            }
            img={req2}
            style={"bg-[#E2635E] "}
          />
          <CommonReqCard
            heading={"Doctorate"}
            details={
              "Hold a relevant Master's degree or an equivalent qualification from a recognised institution."
            }
            img={req4}
            style={"bg-[#58B1EA] "}
          />
        </div>
      </div>
    </div>
  );
};

export default Requirement;

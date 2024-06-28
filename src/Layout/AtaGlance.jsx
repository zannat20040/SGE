import React from "react";
import SectionHeading from "../Component/SectionHeading";
import AtaGlanceImg from "../Component/AtaGlanceImg";

const AtaGlance = () => {
  const requiredDocuments = [
    "Birth certificate",
    "Valid passport",
    "All academic transcripts",
    "English proficiency test scorecard",
    "Subject-specific test scorecard (if applicable)",
    "Health insurance",
    "Proof of sufficient funds in the home country",
    "Letter of acceptance from a recognized US university",
    "Work experience certificate (if applicable)",
  ];

  return (
    <div className="bg-[#EFF6FF] px-4 p-16  md:py-32">
      <div className="container mx-auto">
        {/* heading */}
        <SectionHeading
          label={"Documents Required to apply for the USA Study Visa"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center">
          {/* 1st column */}
          <div className="flex flex-col gap-6 justify-between font-medium text-sm sm:text-base md:text-lg">
            <ul className="list-disc ml-14 ">
              {requiredDocuments.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* 2nd column */}
          <div className="flex justify-center ">
            <AtaGlanceImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtaGlance;

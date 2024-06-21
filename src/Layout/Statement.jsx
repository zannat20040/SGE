import React from "react";
import SectionHeading from "../Component/SectionHeading";
import StatementImg from "../Component/StatementImg";

const Statement = () => {
  const statementOfPurposeComponents = [
    "Introduction",
    "Academic Background",
    "Research or Professional Experience",
    "Motivation and Objectives",
    "Future Plans and Contributions",
    "Conclusion",
  ];

  return (
    <div className="bg-[#FAFAFA] px-4 p-16 md:py-32">
      <div className="container mx-auto">
        {/* Heading */}
        <SectionHeading label={"Statement of Purpose for USA"} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-5 justify-between items-center">
          {/* 1st column */}
          <div className="flex justify-center">
            <StatementImg />
          </div>
          {/* 2nd column */}
          <div className="flex flex-col gap-6 justify-between font-medium text-base md:text-lg py-5">
            <p>
              The Statement of Purpose (SOP) is a crucial document for students
              who want to study abroad. It is typically 1000–1200 words long and
              serves as an essay that showcases your identity and outlines the
              value you will bring to the university. It is important to follow
              a specific format and stick to the word limit to create an
              impressive SOP. If you need detailed guidance on how to structure
              a compelling Statement of Purpose, you can seek assistance from
              Shabuj Global Educations's counselors.
            </p>

            <h1>A typical SOP generally follows the following structure:</h1>
            <ul className="list-disc ml-8 ">
              {statementOfPurposeComponents.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;

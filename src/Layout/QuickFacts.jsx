import React from "react";
import tick from "../assets/Tick-Circle.svg";

const QuickFacts = () => {
  const facts = [
    {
      text: "Over 25% of the world’s top 100 universities are in the USA",
    },
    {
      text: "Post-study stay back visas (OPT) up to 3 years for STEM programs",
    },
    {
      text: "Internships (CPT) up to 12 months while studying",
    },
    {
      text: "Over 4500 accredited universities & institutions to choose from",
    },
    {
      text: "12 of the best student cities in the world (QS Best Student Cities 2023)",
    },
    {
      text: "Opportunities for Research, Teaching & Graduate Assistantships",
    },
  ];

  return (
    <div className="px-4 container mx-auto py-16">
      <h1 className="text-2xl font-semibold mb-10 text-center">Quick facts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
        {/* facts map */}
        {facts?.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <img src={tick} />
            <p className="text-sm ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickFacts;

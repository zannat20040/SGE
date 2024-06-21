import React from "react";

const SectionHeading = ({ label }) => {
  return (
    <h1 className="container mx-auto text-center font-semibold md:text-4xl text-2xl lg:text-6xl mb-16 md:mb-24 px-4 lg:leading-[75px]">
      {label}
    </h1>
  );
};

export default SectionHeading;

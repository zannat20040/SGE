import React from "react";

const TabHeading = ({ heading, subheading }) => {
  return (
    <>
      <h1 className="text-center font-semibold text-2xl  lg:text-4xl mb-5">{heading}</h1>
      <p className="text-center font-medium text-base md:text-lg mt-2">{subheading}</p>
    </>
  );
};

export default TabHeading;

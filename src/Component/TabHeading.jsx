import React from "react";

const TabHeading = ({ heading, subheading }) => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl">{heading}</h1>
      <p className="text-center font-medium text-lg mt-2">{subheading}</p>
    </>
  );
};

export default TabHeading;

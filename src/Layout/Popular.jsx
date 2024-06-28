import React, { useState, useEffect } from "react";

const fields = [
  "Engineering",
  "Computer Science",
  "Physical Health",
  "Psychology",
  "Business Management",
  "Life Science",
  "Finance",
  "Economics",
];

const Popular = () => {
  // text revealing animation
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === fields.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-24 bg-[#FAFAFA]">
      <div className="popular-container lg:max-w-4xl container mx-auto ">
        <p className="font-semibold text-5xl inline leading-[1.30] ">
          Popular programs to study in the US  <span
          key={currentIndex}
          className="inline font-semibold text-5xl fade-in-out linear-text-gradient break-words"
        >
          {fields[currentIndex]}
        </span>
        </p>
      
      </div>
    </div>
  );
};

export default Popular;

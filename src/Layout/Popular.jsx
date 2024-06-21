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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fields.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-24 bg-[#FAFAFA]">
      <div className="popular-container overflow-hidden  max-w-5xl mx-auto ">
        <p className="font-semibold text-6xl inline leading-[1.30] ">
          Popular programs to study in the US{" "}
        </p>
        <p
          key={currentIndex}
          className="inline-block font-semibold text-6xl fade-in-out linear-text-gradient"
        >
          {fields[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default Popular;

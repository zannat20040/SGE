import React, { useState } from "react";
import uni1 from "../assets/TopUni/Adelphi-Primary-Logo 4.png";
import uni2 from "../assets/TopUni/Block IOWA-gold on black@2x 1.png";
import uni3 from "../assets/TopUni/Colorado_State_University_seal 1.png";
import uni4 from "../assets/TopUni/Daco_341961 1.png";
import uni5 from "../assets/TopUni/Home-_-University-of-California-0 1.png";
import uni6 from "../assets/TopUni/Illinois_State_University_seal 1.png";
import uni7 from "../assets/TopUni/calicoheaderlogo 1.png";
import uni8 from "../assets/TopUni/mason-logo_0 1.png";
import uni9 from "../assets/TopUni/montclair-logo-red 1.png";
import uni10 from "../assets/TopUni/pngfind 1.png";
import uni11 from "../assets/TopUni/slu-primary-alternate-blue-rgb 1.png";
import uni12 from "../assets/TopUni/uab_logo-1320x127 1.png";
import uni13 from "../assets/TopUni/university-of-idaho-logo 1.png";
import uni14 from "../assets/TopUni/upload.wikimedia.org_wikipedia_commons_8_86_Webster_University_Logo 1.png";
import uni15 from "../assets/TopUni/washington-state-university-seeklogo 1.png";
import uni16 from "../assets/TopUni/www_webheader-01 1.png";
import SectionHeading from "../Component/SectionHeading";

const TopUniversity = () => {
  // university data
  const universities = [
    {
      id: 1,
      name: "Adelphi University",
      image: uni1,
      details:
        "Adelphi University is a private university located in Garden city, New York. It offers a range of undergraduate & graduate programs across various disciplines.",
      tagline: "One of the US's leading university.",
      location: "Garden City, New York",
    },
    {
      id: 2,
      name: " University Name",
      image: uni2,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 3,
      name: " University Name",
      image: uni3,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 4,
      name: " University Name",
      image: uni4,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 5,
      name: " University Name",
      image: uni5,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 6,
      name: " University Name",
      image: uni6,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 7,
      name: " University Name",
      image: uni7,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 8,
      name: " University Name",
      image: uni8,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 9,
      name: " University Name",
      image: uni9,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 10,
      name: " University Name",
      image: uni10,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 11,
      name: " University Name",
      image: uni11,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 12,
      name: " University Name",
      image: uni12,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 13,
      name: " University Name",
      image: uni13,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 14,
      name: " University Name",
      image: uni14,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 15,
      name: " University Name",
      image: uni15,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
    {
      id: 16,
      name: " University Name",
      image: uni16,
      details: "Details of the university",
      tagline: "Tagline of the university.",
      location: "university location",
    },
  ];

  // uiversity details show & hide logic
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleUniversityHover = (university) => {
    setSelectedUniversity(university);
  };

  const handleUniversityLeave = () => {
    setSelectedUniversity(null);
  };

  return (
    <div className="bg-[#EFF6FF] md:py-32 py-16 rounded-3xl  px-4  ">
      {/* heading component */}
      <SectionHeading label={"Top Universities in The USA"} />

      {/* top university section */}
      <div
        className={`grid grid-cols-3 justify-between items-start  container mx-auto`}
      >
        <div
          className={` transition-all duration-300 grid gap-6 ${
            selectedUniversity
              ? "col-span-1 sm:col-span-2 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-r-4 border-gray-300 h-[450px] overflow-y-scroll pr-5"
              : "col-span-3 w-full grid-cols-3 md:grid-cols-6 "
          } custom-scroll`}
        >
          {/* university logo shhow */}
          {universities.map((university) => (
            <div
              key={university.id}
              className={` ${
                selectedUniversity?.id === university?.id
                  ? "border-b-8 border-blue-800 shadow-lg"
                  : ""
              }    bg-white p-3 flex justify-center items-center cursor-pointer duration-500 transition-all ease-in-out`}
              onMouseEnter={() => handleUniversityHover(university)}
              onMouseLeave={handleUniversityLeave}
            >
              <img
                src={university.image}
                className={` ${selectedUniversity ? "" : "w-full"}`}
                alt={university.name}
              />
            </div>
          ))}
        </div>

        {/* details show */}
        {selectedUniversity && (
          <div
            className={`col-span-2 sm:col-span-1 flex flex-col gap-7 pl-5 ${
              selectedUniversity ? "w-full" : "w-0 transition-all duration-300"
            }`}
          >
            <div className="mx-auto text-center">
              <img
                src={selectedUniversity?.image}
                alt={selectedUniversity?.name}
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              {selectedUniversity.name}
            </h2>
            <p className="">{selectedUniversity.details}</p>
            <p className="font-bold ">{selectedUniversity.tagline}</p>
            <div className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className=""> Located at {selectedUniversity.location}</p>
            </div>
            <button className="btn  bg-blue-600 rounded-full text-white font-light w-full">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopUniversity;

import React from "react";

const TopUni = () => {
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
          {universities.map((university) => (
            <div
              key={university.id}
              className={` ${
                selectedUniversity?.id === university?.id
                  ? "border-b-8 border-blue-800 shadow-lg"
                  : ""
              }    bg-white p-3 flex justify-center items-center cursor-pointer duration-500 transition-all ease-in-out`}
              onMouseEnter={() => setSelectedUniversity(university)}
              onMouseLeave={() => setSelectedUniversity(null)}
            >
              <img
                src={university.image}
                className={` ${selectedUniversity ? "" : "w-full"}`}
                alt={university.name}
              />
            </div>
          ))}
        </div>

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

export default TopUni;

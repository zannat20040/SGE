import React from "react";
import program4 from "../assets/Program/time flies-rafiki 1.png";
import TabHeading from "./TabHeading";

const Tab1 = () => {
  return (
    <div className="tab-table  rounded-b-3xl  py-16 bg-[#EFF6FF]  px-4 ">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-3 gap-20 items-center justify-between">
        <div className="md:col-span-2">
          <TabHeading
            heading={"Programs and their duration in The USA"}
            subheading={
              "Here are the programs that the USA universities offer:"
            }
          />
          <div className="overflow-x-auto ">
            <table className="w-full text-center border mx-auto border-gray-100  my-8">
              <thead>
                <tr className="bg-[#00205B] text-white ">
                  <th className="py-4 px-6 text-center ">Qualification</th>
                  <th className="py-4 px-6 text-center ">Duration</th>
                  <th className="py-4 px-6 text-center ">pswr*</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Associate degree{" "}
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">2 years</td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Up to 3 years
                  </td>
                </tr>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Bachelor’s degree
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">4 years</td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Up to 3 years
                  </td>
                </tr>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Master’s degree/MBA
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    1-2 years
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Up to 3 years
                  </td>
                </tr>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Doctorate or PhD
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    4-7 years
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Up to 3 years
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img src={program4} alt="" className="mx-auto md:block hidden  w-full" />
      </div>
    </div>
  );
};

export default Tab1;

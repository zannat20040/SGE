import React from "react";
import TabHeading from "./TabHeading";
import program2 from "../assets/Program/Coins-rafiki 1.png";

const Tab2 = () => {
  return (
    <div className="tab-table containe mx-auto rounded-b-3xl py-16  px-4 bg-[#EFF6FF]">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-20 items-center justify-between ">
        <div className="md:col-span-2">
          <TabHeading heading={"Cost of Studying"} />
          <div className="overflow-x-auto ">
            <table className="w-full text-center border mx-auto border-gray-100  my-8">
              <thead>
                <tr className="bg-[#00205B] text-white">
                  <th className="py-4 px-6 text-center ">Degree</th>
                  <th className="py-4 px-6 text-center ">Cost in USD/Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Associate degree{" "}
                  </td>

                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    $10,000 - $20,000
                  </td>
                </tr>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Bachelor’s degree
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    $15,000 - $60,000
                  </td>
                </tr>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Master’s degree/MBA
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    $15,000 - $70,000
                  </td>
                </tr>
                <tr className=" transition duration-300">
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    Doctorate or PhD
                  </td>
                  <td className="py-4 px-6 border border-[#E1E1E1]">
                    University-specific
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img src={program2} alt="" className="mx-auto md:block hidden w-full" />
      </div>{" "}
    </div>
  );
};

export default Tab2;

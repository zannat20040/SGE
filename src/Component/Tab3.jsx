import React from "react";
import TabHeading from "./TabHeading";
import program1 from "../assets/Program/Calendar-bro 1.png";

const Tab3 = () => {
  return (
    <div className="tab-table rounded-b-3xl  px-4 py-16 bg-[#EFF6FF] ">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-center justify-between">
    <div className=" md:col-span-2">
        <TabHeading
          heading={"Academic Intake to Study in the UK"}
          subheading={
            "Colleges and universities in the UK offer three intakes. Intakes may also be referred to as terms in some institutions. The three intakes available in the UK are:"
          }
        />
        <div className="overflow-x-auto ">
          <table className="w-full text-center border mx-auto border-gray-100  my-8">
            <thead>
              <tr className="bg-[#00205B] text-white">
                <th className="py-4 px-6 text-center ">Intakes</th>
                <th className="py-4 px-6 text-center ">Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" transition duration-300">
                <td className="py-4 px-6 border border-[#E1E1E1]">
                  Fall- Aug/Sep{" "}
                </td>
                <td className="py-4 px-6 border border-[#E1E1E1]">
                  November-March
                </td>
              </tr>
              <tr className=" transition duration-300">
                <td className="py-4 px-6 border border-[#E1E1E1]">
                  Summer- May/June{" "}
                </td>
                <td className="py-4 px-6 border border-[#E1E1E1]">
                  August-February
                </td>
              </tr>
              <tr className=" transition duration-300">
                <td className="py-4 px-6 border border-[#E1E1E1]">
                  Spring- Jan/Feb{" "}
                </td>
                <td className="py-4 px-6 border border-[#E1E1E1]">
                  July-November
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <img src={program1} alt="" className="mx-auto md:block hidden w-full" />
    </div>
    </div>
  );
};

export default Tab3;

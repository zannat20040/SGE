import React from "react";
import TabHeading from "./TabHeading";
import program3 from "../assets/Program/Deadline-rafiki 1.png";

const Tab4 = () => {
  return (
    <div className="tab-table rounded-b-3xl px-4 py-16 bg-[#EFF6FF] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-center justify-between ">
        <div className="md:col-span-2">
          <TabHeading
            heading={"Deadline for the US Universities"}
            subheading={
              "You need to start preparing your application a minimum of 9-10 months in advance before the commencement of your program."
            }
          />
        </div>
        <img src={program3} alt="" className="mx-auto md:block hidden w-full" />
      </div>
    </div>
  );
};

export default Tab4;

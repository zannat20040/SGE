import React from 'react';
import arrow from "../assets/down-iKFcuXTMIQ.png";


const CommonExamCard = ({title, requiredExam}) => {
    return (
        <div
        className={`shadow-lg p-14 pb-0 hover:pb-28 rounded-3xl duration-1000 group`}
      >
        <div className="text-[#004AC8]">
          <h1 className="font-semibold text-2xl  sm:text-3xl lg:text-4xl mb-3 ">
            {title}
          </h1>

          <div className=" h-0 group-hover:h-auto  opacity-0 group-hover:opacity-100  duration-500">
            <ul className="list-disc ml-7 ">
              {requiredExam.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-end ">
          <img
            src={arrow}
            className="arrow z-20 w-auto group-hover:w-0  relative bottom-0  group-hover:opacity-0 opacity-100 duration-1000 "
          />
        </div>
      </div>
    );
};

export default CommonExamCard;
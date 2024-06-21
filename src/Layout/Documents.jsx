import React from "react";
import SectionHeading from "../Component/SectionHeading";
import DocumentImg from "../Component/DocumentImg";

const Documents = () => {
  const admissionRequirements = [
    "Hold a valid passport",
    "Have printed copies of your DS-160 and I-901 SEVIS payment confirmations",
    "All academic transcripts",
    "Proof of sufficient funds in the home country",
    "Passport-size photographs",
    "I-20 form",
    "Good English language test scores",
  ];

  return (
    <div className="bg-[#F1F8FF] px-4 p-16  md:py-32">
      <div className="container mx-auto">
        {/* heading */}
        <SectionHeading
          label={
            "Documents Required to Study in the USA for International Students"
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center">
          {/* 1st column */}
          <div className="flex flex-col gap-6 justify-between font-medium text-base md:text-lg">
            <p>
              International students intending to study in the USA must secure
              an F-1 student visa. The visa application process can be initiated
              up to 365 days before the course start date. However, it's
              important to note that entry into the country is not permitted
              until 30 days prior to the beginning of classes.
            </p>
            <h1 className="font-bold">
              What are the Costs Associated with Applying for a US Student Visa?
            </h1>
            <p>
              {" "}
              The estimated cost of an F-1 student visa is USD 510. It is
              advisable to apply for the visa well in advance to allow for ample
              processing time by the authorities. Applying early also affords
              you sufficient time to gather the necessary documents for your
              visa application and smoothly progress with your university
              application.
            </p>
            <h1>
              To apply for the F-1 student visa, you will be required to satisfy
              the following requirements.
            </h1>
            <ul className="list-disc ml-14 ">
              {admissionRequirements.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* 2nd column  */}
          <div>
            <DocumentImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;

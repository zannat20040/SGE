import React from "react";
import SectionHeading from "../Component/SectionHeading";
import CommonExamCard from "../Component/CommonExamCard";

const Exam = () => {
  const englishProficiencyExams = [
    "IELTS (International English Language Testing System)",
    "TOEFL (Test of English as a Foreign Language)",
    "PTE Academic (Pearson Test of English Academic)",
  ];

  const undergradAdmissionRequirements = [
    "High School Diploma or Equivalent (e.g., GED)",
    "Standardized Tests (e.g., SAT or ACT)",
    "English Language Proficiency Exam (e.g., IELTS, TOEFL)",
    "Letters of Recommendation",
    "Personal Statement or Essay",
    "Extracurricular Activities and Community Service",
    "Interview (in some cases)",
  ];

  return (
    <div className="bg-[#F1F8FF] px-4 py-16 md:py-32">
      <div className="container mx-auto ">
        {/* heading */}
        <SectionHeading label={"Exams Required to Study in the US"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* First Column */}
          <div className="flex flex-col gap-6 ">
            <CommonExamCard
              title={"English Language Proficiency Exams"}
              requiredExam={englishProficiencyExams}
            />
            <CommonExamCard
              title={"Undergraduation Admission Requirements"}
              requiredExam={undergradAdmissionRequirements}
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-6">
            <CommonExamCard
              title={"Graduation Admission Requirements"}
              requiredExam={englishProficiencyExams}
            />
            <CommonExamCard
              title={"Subject-Specific Exams"}
              requiredExam={undergradAdmissionRequirements}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;

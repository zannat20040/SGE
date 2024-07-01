import React from "react";
import SectionHeading from "../Component/SectionHeading";
import CommonAccordion from "../Component/CommonAccordion";
import FAQImg from "../Component/FAQImg";

const FAQ = () => {
  return (
    <div className='bg-white'>
      <div className="container mx-auto px-4 p-16 md:first-letter:py-32">
      <SectionHeading label={"Frequently Asked Questions"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 justify-between items-center">
        <div className="flex justify-center">
          {/* created image */}
          <FAQImg />
        </div>

        {/* FAQ accordion */}
        <div className="join join-vertical w-full p-10 md:p-16 bg-[#00205B] mt-14 ">
          <CommonAccordion
            title={"How much does it cost to study in the USA?"}
            desc={
              "The cost of studying in the USA ranges from USD 40,000 to USD 50,000 depending on your chosen university, level of study and course."
            }
          />
          <CommonAccordion
            title={"How can I study in the USA from Bangladesh?"}
            desc={
              "You can shortlist your preferred courses and the universities that offer these courses. You can then follow the admission process we have explained above. It is also a better option to contact AECC’s trained counsellors, who can provide you with the exact information and even help you apply."
            }
          />
          <div className="collapse collapse-arrow join-item border-b border-gray-600 rounded-none text-white">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-base md:text-xl">
              Which subject is best to study in the USA?
            </div>
            <div className="collapse-content font-light md:text-base text-sm">
              <p>
                There are a few subjects that are popular among international
                students studying in the USA. They are listed below.
              </p>
              <ul className="list-disc ml-6  mt-6 md:text-base text-sm">
                <li>Engineering and Technology</li>
                <li> Business and Management</li>
                <li> Law</li>
                <li> Computer Science</li>
                <li> Liberal Arts</li>
                <li> Medicine</li>
                <li> Data Science and Business Analytics</li>
                <li> Finance</li>
              </ul>
            </div>
          </div>
          <CommonAccordion
            title={"Can we study in the USA without IELTS?"}
            desc={
              "Yes, there are several popular universities in the USA, like the University of Delaware, State University of New York, University of North Alabama etc., that offer admission to their students without IELTS. However, it is a good option to attempt the test and get an acceptable score so that your application gets noticed, which will give you better chances of getting admission."
            }
          />{" "}
          <CommonAccordion
            title={"Can I get a scholarship in the USA from Bangladesh?"}
            desc={
              "Yes, there are several scholarships offered to Bangladeshi students studying in the USA. We have given a list of them above. You can also reach out to AECC’s counsellors to get the exact information and guidance."
            }
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;

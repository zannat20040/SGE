import React from 'react';

const CommonAccordion = ({title, desc}) => {
    return (
        <div className="collapse collapse-arrow join-item border-b border-gray-600 !rounded-none text-white">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-base md:text-xl ">
         {title}
        </div>
        <div className="collapse-content font-light md:text-base text-sm">
          <p>{desc}</p>
        </div>
      </div>
    );
};

export default CommonAccordion;
import React from 'react';
import faq6 from "../assets/FAQimg/Vector (4).png";
import faq2 from "../assets/FAQimg/Vector.svg";


const QuesImg = ({style,imgstyle}) => {
    return (
        <div className={`${style} absolute w-fit`}>
            <img src={faq2} alt="" srcset="" className={`${imgstyle} relative left-5  `}/>
            <img src={faq6} alt="" srcset="" className={`${imgstyle}`}/>
        </div>
    );
};

export default QuesImg;
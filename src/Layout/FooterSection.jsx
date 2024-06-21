import React from "react";
import TopFooter from "../Component/TopFooter";
import footer3 from "../assets/Footer/Union.png";
import Logo from "../Component/Logo";
import FooterLink from "../Component/FooterLink";
import FooterSiteMap from "../Component/FooterSiteMap";
import BottomFooter from "../Component/BottomFooter";

const FooterSection = () => {
  return (
    <div className="mt-36">
      <div className="bg-gradient-to-t from-[#011E4C] to-[#022859]">
        {/* 1st row  */}
        <div className=" relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center">
              <TopFooter />
            </div>
          </div>
          <img src={footer3} className="absolute left-0 bottom-0 " />
        </div>
        {/* 2nd row */}
        <div className="bg-[#081831]">
          <div className="container mx-auto px-4 ">
            <Logo />
            <FooterLink />
            <FooterSiteMap />
            <BottomFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

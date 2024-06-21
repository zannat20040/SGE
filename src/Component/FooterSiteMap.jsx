import React from "react";
import { Typography } from "@material-tailwind/react";
import img1 from "../assets/Footer/PSI Logo 1.svg";
import img2 from "../assets/Footer/Skills-for-English-SELT-logo-footer 1.png";

const FooterSiteMap = () => {
  return (
    <footer className="relative w-full py-7 ">
      <div className="px-4 container mx-auto border-b border-white pb-8">
        <div className="grid grid-cols-1 justify-between items-center gap-7 lg:grid-cols-2">
          <div className="bg-[#B5B9C1] p-4 py-7 rounded-2xl h-fit">
            <h1 className="text-2xl font-semibold text-center mb-7">
              UKVI Approved test Centre for
            </h1>
            <div className="flex flex-wrap sm:flex-nowrap gap-5 justify-center items-center">
              <img src={img2} alt="" className="flex" />
              <img src={img1} alt="" className="flex" />
            </div>
          </div>
          <div>
            <h1 className="text-center text-[#CACACA] uppercase pb-5">
              Our offices
            </h1>
            <div className="grid grid-cols-3 justify-between gap-4">
              <ul>
                <Typography className="mb-3 text-[#5093FB] fotn-light">
                  Head Office (London)
                </Typography>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className="mb-3 text-[#5093FB] font-light "
                  >
                    South Asian Regional Head Office (Dhaka)
                  </Typography>
                </li>
                <li>
                  <Typography as="a" href="#" className="text-white font-light">
                    Chattogram Office
                  </Typography>
                </li>
                <li>
                  <Typography as="a" href="#" className="text-white font-light">
                    Sylhet Office
                  </Typography>
                </li>
              </ul>

              <ul>
                <Typography className="mb-1 text-[#5093FB] font-light">
                  India Office
                </Typography>
                <li>
                  <Typography as="a" href="#" className="text-white font-light">
                    Kochi
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className=" text-white font-light"
                  >
                    Kochi
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className="my-3 text-[#5093FB] font-light"
                  >
                    Middle East Office
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className=" text-white font-light"
                  >
                    Dubai
                  </Typography>
                </li>
              </ul>

              <ul>
                <Typography className="mb-1 text-[#5093FB] font-light">
                  Nigeria Office
                </Typography>
                <li>
                  <Typography as="a" href="#" className="text-white font-light">
                    Lagos
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className=" text-white font-light"
                  >
                    Abuja
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSiteMap;

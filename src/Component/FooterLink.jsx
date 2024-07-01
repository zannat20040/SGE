import React from "react";
import { Typography } from "@material-tailwind/react";

const FooterLink = () => {
  const SITEMAP = [
    {
      title: "About Shabuj Global Education",
      links: [
        "Lorem ipsum dolor sit amet consectetur. Amet commodo bibendum ac sem molestie. Nisi imperdiet orci nulla in. Convallis eu ligula neque id varius sit lacus et. Pellentesque porta interdum morbi enim ultrices egestas aliquet amet. Aliquet elit amet porttitor posuere. ",
      ],
    },
    {
      title: "Study Destinations",
      links: ["UK", "USA", "Canada", "Australia", "Germany", "New Zealand"],
    },
    {
      title: "Services for students",
      links: [
        "Counselling",
        "Test Preparation",
        "Course, Country & University Selection ",
        "Scholarship",
        "File Assessment",
        "SERVICES FOR INSTITUTIONS for institutions",
        "SERVICES FOR PARTNERS",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careerss",
        "Events",
        "Blog",
        "Contact Us",
        "SEARCH UNIVERSITIES",
        "UPCOMING EVENTS",
        "BOOK ONLINE COUNSELLING",
      ],
    },
  ];

  return (
    <footer className="relative w-full">
      <div className="mx-auto container  px-4 border-b border-white pb-5">
        <div className="mx-auto grid w-full  gap-8 py-12 grid-cols-2 lg:grid-cols-4 justify-center poppins-regular">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full poppins-regular">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4  uppercase text-white poppins-regular"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <p   className="block text-white md:text-base font-extralight ">
  {link}
                  </p>
                 
                ))}
              </ul>
            </div>
          ))}
        </div>
 
      </div>
    </footer>
  );
};

export default FooterLink;

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import logo1 from "../assets/Group.svg";
import logo2 from "../assets/Group (1).svg";

function NavList() {
  // states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // functions
  const handleItemClick = (item) => {
    setIsMobileMenuOpen(false);
    setActiveItem(item);
  };

  return (
    // nav menu
    <List className="mt-4  p-0 lg:mt-0 mb-0 lg:flex-row lg:p-1 ">
      <Typography as="div" className="text-sm">
        <ListItem
          className={`flex items-center p-3 lg:py-5 gap-2 pr-4 font-medium text-black rounded-none border-b-4 border-transparent ${
            activeItem === "study" ? " border-[#BF0C3D]" : ""
          }`}
          onClick={() => handleItemClick("study")}
        >
          Study Destination
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform lg:block hidden ${
              activeItem === "study" ? "rotate-180" : ""
            }`}
          />
        </ListItem>
      </Typography>
      <Typography as="div" className="text-sm">
        <ListItem
          className={`flex items-center p-3 lg:py-5 gap-2 pr-4 font-medium text-black rounded-none border-b-4 border-transparent ${
            activeItem === "services" ? " border-[#BF0C3D]" : ""
          }`}
          onClick={() => handleItemClick("services")}
        >
          Services
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform lg:block hidden ${
              activeItem === "services" ? "rotate-180" : ""
            }`}
          />
        </ListItem>
      </Typography>
      <Typography as="div" className="text-sm">
        <ListItem
          className={`flex items-center p-3 lg:py-5 gap-2 pr-4 font-medium text-black rounded-none border-b-4 border-transparent ${
            activeItem === "testprep" ? " border-[#BF0C3D]" : ""
          }`}
          onClick={() => handleItemClick("testprep")}
        >
          Test Prep.
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform lg:block hidden ${
              activeItem === "testprep" ? "rotate-180" : ""
            }`}
          />
        </ListItem>
      </Typography>
      <Typography as="div" className="text-sm">
        <ListItem
          className={`flex items-center p-3 lg:py-5 gap-2 pr-4 font-medium text-black rounded-none border-b-4 border-transparent ${
            activeItem === "about" ? " border-[#BF0C3D]" : ""
          }`}
          onClick={() => handleItemClick("about")}
        >
          About Us
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform lg:block hidden ${
              activeItem === "about" ? "rotate-180" : ""
            }`}
          />
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  // state
  const [openNav, setOpenNav] = useState(false);

  // useeeffects for responsive
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1035 && setOpenNav(false)
    );
  }, []);

  // function for event listner
  const HandleBtnStyle = (e) => {
    e.currentTarget.querySelector(".login-arrow").classList.remove("w-5");
    e.currentTarget.querySelector(".login-arrow").classList.add("w-0");
  };

  return (
    <div className="bg-[#F0F8FF] px-4 ">
      <Navbar className="mx-auto  py-2 px-0 lg:p-0 shadow-none container bg-[#F0F8FF] border-0 rounded-none">
        {/* large navbar */}
        <div className="flex items-center justify-between text-black">
          {/* logo */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer py-1.5 lg:ml-2 flex items-center gap-3 w-1/2 sm:w-fit "
          >
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
          </Typography>

          <div className="hidden gap-2 lg:flex  items-center">
            <NavList />

            <Button
              className="bg-[#BFDBFE] shadow-none rounded-2xl font-semibold text-sm capitalize hover:shadow-none text-black h-fit flex gap-2 items-center hover:bg-[#3E40C3] hover:text-white"
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector(".login-arrow")
                  .classList.add("w-5")
              }
              onMouseLeave={(e) => HandleBtnStyle(e)}
            >
              <h1>Login</h1>
              <ArrowRightIcon className="h-5 w-0 duration-200  login-arrow text-white" />
            </Button>
          </div>

          {/* humburger icon */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        {/* mobile navbar */}
        <Collapse open={openNav}>
          {/* menu & button */}

          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              className="bg-[#BFDBFE] flex justify-between shadow-none rounded-2xl font-semibold text-sm capitalize hover:shadow-none text-black gap-2 items-center hover:bg-[#3E40C3] hover:text-white"
              fullWidth
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector(".login-arrow")
                  .classList.add("w-5")
              }
              onMouseLeave={(e) => HandleBtnStyle(e)}
            >
              <h1>Login</h1>
              <ArrowRightIcon className="h-5 w-0 duration-200  login-arrow text-white" />
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

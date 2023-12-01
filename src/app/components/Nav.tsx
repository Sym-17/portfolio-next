import React from "react";
import {
  MoonIcon,
  Bars3BottomLeftIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navTitles = ["Home", "Skils", "Projects", "Experiences", "About Me"];

const Nav = () => {
  return (
    <div className="flex justify-between items-center w-full mt-8">
      <Bars3BottomLeftIcon className="w-8 text-[#536DFE] md:hidden" />
      <div className="hidden md:flex justify-between items-center ml-auto gap-10">
        {navTitles.map((title) => {
          return (
            <h1
              className="cursor-pointer text-base hover:text-[#536DFE] lg:text-lg font-medium"
              key={title}
            >
              {title}
            </h1>
          );
        })}
        <MoonIcon className="w-9 p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" />
        {/* <SunIcon className="w-9 p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default Nav;

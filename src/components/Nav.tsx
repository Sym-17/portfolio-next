"use client";
import React, { useState } from "react";
import {
  MoonIcon,
  Bars3BottomLeftIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSideBar from "@/store/useSideBar";

type navTitle = {
  title: string;
  link: string;
};

const navTitles: navTitle[] = [
  { title: "Home", link: "/#home" },
  { title: "Skills", link: "/#skills" },
  { title: "Projects", link: "/projects" },
  { title: "Experiences", link: "/#experiences" },
  { title: "About Myself", link: "/#about-myself" },
];

const Nav = () => {
  const pathname = usePathname();

  const { showSideBar, changeMenu } = useSideBar();

  return (
    <div className="flex flex-col justify-start items-center w-full fixed top-0">
      <div className="w-full flex items-center justify-center bg-white border-b-2">
        <div className="flex justify-between items-center w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2 pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-6 xl:pb-6  border-b-slate-100">
          <Bars3BottomLeftIcon
            className="w-6 sm:w-8 text-[#536DFE] md:hidden"
            onClick={() => changeMenu(!showSideBar)}
          />

          <div
            className="flex justify-between items-center ml-auto gap-5 xl:gap-10"
            onClick={() => changeMenu(false)}
          >
            {navTitles.map((title) => {
              return (
                <Link href={title.link} key={title.title} scroll={true}>
                  <h1
                    className={`cursor-pointer  ${
                      pathname === title.link ? "text-[#536DFE] " : ""
                    } hover:text-[#4f62ce] text-sm xl:text-lg font-medium hidden md:flex`}
                  >
                    {title.title}
                  </h1>
                </Link>
              );
            })}
            <MoonIcon className="w-6 sm:w-8 p-1 bg-gray-100 hover:bg-slate-200 rounded-full cursor-pointer" />
            {/* <SunIcon className="w-9 p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" /> */}
          </div>
        </div>
      </div>
      {/* For Side Bar */}
      {showSideBar ? (
        <div className="flex items-start w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2 h-full md:hidden">
          <div className="flex flex-col w-2/5 md:hidden bg-gray-200 p-2 items-start gap-2 rounded-b-xl">
            {navTitles.map((title) => {
              return (
                <Link href={title.link} key={title.title} scroll={true}>
                  <h1
                    className={`cursor-pointer  ${
                      pathname === title.link ? "text-[#536DFE] " : ""
                    } hover:text-[#4f62ce] text-[10px] sm:text-sm font-medium`}
                    onClick={() => changeMenu(false)}
                  >
                    {title.title}
                  </h1>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;

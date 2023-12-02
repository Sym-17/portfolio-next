"use client";
import React from "react";
import {
  MoonIcon,
  Bars3BottomLeftIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <div className="w-full flex items-center justify-center fixed top-0 bg-white border-b-2">
      <div className="flex justify-between items-center w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2 pt-6 pb-6  border-b-slate-100">
        <Bars3BottomLeftIcon className="w-8 text-[#536DFE] md:hidden" />
        <div className="hidden md:flex justify-between items-center ml-auto gap-5 xl:gap-10">
          {navTitles.map((title) => {
            return (
              <Link href={title.link} key={title.title} scroll={true}>
                <h1
                  className={`cursor-pointer  ${
                    pathname === title.link ? "text-[#536DFE] " : ""
                  } hover:text-[#4f62ce] text-sm xl:text-lg font-medium`}
                >
                  {title.title}
                </h1>
              </Link>
            );
          })}
          <MoonIcon className="w-5 xl:w-9 p-1 xl:p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" />
          {/* <SunIcon className="w-9 p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;

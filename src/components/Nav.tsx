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
  { title: "Home", link: "/" },
  { title: "Skills", link: "/#skills" },
  { title: "Projects", link: "/projects" },
  { title: "Experiences", link: "/#experiences" },
  { title: "About Myself", link: "/#about-myself" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center w-full pt-6 pb-6 pr-5 pl-5 sm:pr-20 sm:pl-20 lg:pr-44 lg:pl-44 xl:pr-80 xl:pl-80 fixed top-0 bg-white border-b-2 border-b-slate-100">
      <Bars3BottomLeftIcon className="w-8 text-[#536DFE] md:hidden" />
      <div className="hidden md:flex justify-between items-center ml-auto gap-10">
        {navTitles.map((title) => {
          return (
            <Link href={title.link} key={title.title}>
              <h1
                className={`cursor-pointer text-base ${
                  pathname === title.link ? "text-[#536DFE] " : ""
                } hover:text-[#4f62ce] lg:text-lg font-medium`}
              >
                {title.title}
              </h1>
            </Link>
          );
        })}
        <MoonIcon className="w-9 p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" />
        {/* <SunIcon className="w-9 p-2 bg-gray-200 hover:bg-slate-300 rounded-full cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default Nav;

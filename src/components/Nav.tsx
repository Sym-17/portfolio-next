"use client";
import React, { useEffect, useState } from "react";
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
  // { title: "About Myself", link: "/#about-myself" },
  {
    title: "My Resume",
    link: "https://drive.google.com/file/d/1FO-tnQdKniyNUF3TojJVZomNeXyKuebJ/view",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const [nightTheme, setNightTheme] = useState<Boolean>(false);
  const { showSideBar, changeMenu } = useSideBar();

  useEffect(() => {
    const nightVal = localStorage.getItem("nightMode");

    if (nightVal === "true") {
      document.documentElement.setAttribute("data-theme", "dark");
      setNightTheme(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setNightTheme(false);
    }
  }, []);

  return (
    <div
      className={`flex flex-col justify-start items-center w-full fixed top-0 z-[999]`}
    >
      <div
        className={`w-full flex items-center justify-center border-b-2 border-b-gray-300 bg-gradient`}
      >
        <div className="flex justify-between items-center w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2 pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-6 xl:pb-6">
          <Bars3BottomLeftIcon
            className={`w-6 sm:w-8  md:hidden text-[#536DFE]`}
            onClick={() => changeMenu(!showSideBar)}
          />

          <div
            className="flex justify-between items-center ml-auto gap-5 xl:gap-10"
            onClick={() => changeMenu(false)}
          >
            {navTitles.map((title) => {
              return (
                <Link
                  href={title.link}
                  key={title.title}
                  scroll={true}
                  target={title.title === "My Resume" ? "_blank" : ""}
                >
                  <h1
                    className={`cursor-pointer   ${
                      pathname === title.link
                        ? "text-[#536DFE]"
                        : "text-primary"
                    }
                    } hover:text-[#536DFE] text-sm xl:text-lg font-medium hidden md:flex uppercase`}
                  >
                    {title.title}
                  </h1>
                </Link>
              );
            })}
            {nightTheme ? (
              <SunIcon
                className="w-6 sm:w-8 p-1 bg-gray-100 hover:bg-slate-300 rounded-full cursor-pointer"
                onClick={() => {
                  document.documentElement.setAttribute("data-theme", "light");
                  setNightTheme(false);
                  localStorage.setItem("nightMode", "false");
                }}
              />
            ) : (
              <MoonIcon
                className="w-6 sm:w-8 p-1 bg-gray-100 hover:bg-slate-300 rounded-full cursor-pointer"
                onClick={() => {
                  document.documentElement.setAttribute("data-theme", "dark");
                  setNightTheme(true);
                  localStorage.setItem("nightMode", "true");
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* For Side Bar */}
      {showSideBar ? (
        <div className="w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2">
          <div className="flex flex-col p-2 items-start bg-gray-200 w-fit mr-auto md:hidden gap-2 rounded-b-xl">
            {navTitles.map((title) => {
              return (
                <Link
                  href={title.link}
                  key={title.title}
                  scroll={true}
                  target={title.title === "My Resume" ? "_blank" : ""}
                >
                  <h1
                    className={`cursor-pointer  ${
                      pathname === title.link ? "text-[#536DFE] " : "text-black"
                    } hover:text-[#4f62ce] text-[10px] sm:text-xs font-medium`}
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

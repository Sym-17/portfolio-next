"use client";
import AboutMyself from "@/components/AboutMyself";
import HomePage from "../components/HomePage";
import ProjectsForHomePage from "../components/ProjectsForHomePage";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import useSideBar from "@/store/useSideBar";
import useNightTheme from "@/store/useNightTheme";

export default function Home() {
  const { changeMenu } = useSideBar();
  const { nightTheme } = useNightTheme();
  return (
    <main
      className={`flex flex-col items-center w-full ${
        nightTheme ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        // className="flex w-full flex-col items-center justify-between"
        className="flex w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2 flex-col items-center justify-between"
        id="home"
        onClick={() => changeMenu(false)}
      >
        <HomePage />
        <Skills />
        <ProjectsForHomePage />
        <Experience />
        <AboutMyself />
      </div>
    </main>
  );
}

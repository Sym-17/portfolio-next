"use client";
import HomePage from "../components/HomePage";
import ProjectsForHomePage from "../components/ProjectsForHomePage";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import useSideBar from "@/store/useSideBar";

export default function Home() {
  const { changeMenu } = useSideBar();
  return (
    <main className={`flex flex-col items-center w-full `}>
      <div
        className="flex w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2 flex-col items-center justify-between"
        id="home"
        onClick={() => changeMenu(false)}
      >
        <HomePage />
        <Skills />
        <ProjectsForHomePage />
        <Experience />
      </div>
    </main>
  );
}

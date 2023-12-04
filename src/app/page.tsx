"use client";
import AboutMyself from "@/components/AboutMyself";
import HomePage from "../components/HomePage";
import ProjectsForHomePage from "../components/ProjectsForHomePage";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import useSideBar from "@/store/useSideBar";

export default function Home() {
  const { changeMenu } = useSideBar();
  return (
    <main
      className="flex w-full flex-col items-center justify-between"
      id="home"
      onClick={() => changeMenu(false)}
    >
      <HomePage />
      <Skills />
      <ProjectsForHomePage />
      <Experience />
      <AboutMyself />
    </main>
  );
}

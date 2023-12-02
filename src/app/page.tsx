import AboutMyself from "@/components/AboutMyself";
import HomePage from "../components/HomePage";
import ProjectsForHomePage from "../components/ProjectsForHomePage";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main
      className="flex w-full flex-col items-center justify-between"
      id="home"
    >
      <HomePage />
      <Skills />
      <ProjectsForHomePage />
      <Experience />
      <AboutMyself />
    </main>
  );
}

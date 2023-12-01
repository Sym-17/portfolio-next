import HomePage from "./components/HomePage";
import ProjectsForHomePage from "./components/ProjectsForHomePage";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <HomePage />
      <Skills />
      <ProjectsForHomePage />
    </main>
  );
}

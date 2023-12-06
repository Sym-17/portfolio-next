import React from "react";
import projectSVG from "../../public/project-completedsvg.svg";
import Image from "next/image";
import SectionLayoutOfHomePage from "./SectionShellOfHomePage";
import Link from "next/link";
import EachProject from "./EachProject";
import { tree } from "next/dist/build/templates/app-page";
import useNightTheme from "@/store/useNightTheme";
import AnimationShell from "./AnimationShell";
const ProjectsForHomePage = () => {
  const { nightTheme } = useNightTheme();
  return (
    <SectionLayoutOfHomePage id="" title="Projects" placementOfTitle="left">
      <AnimationShell>
        <div className="flex flex-col sm:flex-row justify-between gap-10 2xl:gap-32 items-center w-full">
          <div className="flex flex-col gap-5 items-start w-full">
            <EachProject
              title="Todo"
              description="A notepad app where an user can keep his todos and notes."
              tags={["React", "TypeScript", "Tailwind"]}
              gitLink="https://github.com/Sym-17/todo-react"
              deployLink="https://todo-react-theta-eight.vercel.app/"
              isOngit={true}
              isDeployed={true}
            />
            <EachProject
              title="Emporium"
              description="An ecommerce web application. Project building is on going."
              tags={["Next", "Express", "TypeScript", "Tailwind", "PostgreSQL"]}
              gitLink="https://github.com/Sym-17/emporium"
              deployLink="https://emporium-opal.vercel.app/"
              isOngit={true}
              isDeployed={true}
            />
            <Link href="/projects" className="ml-auto cursor-pointer">
              <span className={`text-sm lg:text-xl font-medium text-[#536DFE]`}>
                See More...
              </span>
            </Link>
          </div>
          <Image
            src={projectSVG}
            width={1}
            height={1}
            alt=""
            className="w-5/6 sm:w-2/5"
          />
        </div>
      </AnimationShell>
    </SectionLayoutOfHomePage>
  );
};

export default ProjectsForHomePage;

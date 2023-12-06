"use client";
import React, { useEffect, useRef } from "react";
import careerProgressSVG from "../../public/career_progress.svg";
import Image from "next/image";
import SectionLayoutOfHomePage from "./SectionShellOfHomePage";
import AnimationShell from "./AnimationShell";

const Experience = () => {
  return (
    <SectionLayoutOfHomePage
      title="Experiences"
      id="experiences"
      placementOfTitle="right"
    >
      <AnimationShell>
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-16 items-center w-full">
          <Image
            src={careerProgressSVG}
            width={1}
            height={1}
            alt=""
            className="w-4/6 sm:w-2/5"
          />
          <div className="flex flex-col gap-5 items-end w-full">
            <p className="text-end text-sm md:text-base xl:text-lg">
              Eager and motivated recent graduate with a {"Bachelor's"} degree
              in Computer Science. I have acquired a solid foundation in key
              concepts, tools, and languages through coursework and independent
              projects. Enthusiastic about applying my skills and knowledge to
              real-world challenges, and committed to continuous learning and
              growth in the field.
            </p>
          </div>
        </div>
      </AnimationShell>
    </SectionLayoutOfHomePage>
  );
};

export default Experience;

import React from "react";
import programmingSVG from "../../assests/programming.svg";
import Image from "next/image";
import SkillDetails from "./SkillDetails";
import SectionLayoutOfHomePage from "./SectionLayoutOfHomePage";

const Skills = () => {
  return (
    <SectionLayoutOfHomePage
      title="Skills"
      id="skills"
      placementOfTitle="right"
    >
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-10 items-center w-full">
        <Image
          src={programmingSVG}
          width={1}
          height={1}
          alt=""
          className="w-5/6 sm:w-2/5"
        />
        <div className="flex flex-col gap-5 items-end w-full">
          <SkillDetails
            title="progamming languages"
            items={["JavaScript", "TypeScript", "C | C++", "Python"]}
          />
          <SkillDetails
            title="frameworks & libraries"
            items={["React", "Next"]}
          />
          <SkillDetails
            title="software development"
            items={["OOP", "SQL", "Git", "Agile"]}
          />
          <SkillDetails
            title="others"
            items={["HTML", "CSS", "Tailwind CSS", "Bootstrap"]}
          />
          <SkillDetails
            title="languages"
            items={["Bangla (Native)", "English"]}
          />
        </div>
      </div>
    </SectionLayoutOfHomePage>
  );
};

export default Skills;

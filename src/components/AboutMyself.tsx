import React from "react";
import SectionLayoutOfHomePage from "./SectionShellOfHomePage";
import Link from "next/link";
import IconShell from "./IconShell";
import GithubIcon from "./GithubIcon";
import LeetcodeIcon from "./LeetcodeIcon";
import LinkedInIcon from "./LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import personalInfoSVG from "../../public/personal_info.svg";
import Image from "next/image";

const AboutMyself = () => {
  return (
    <SectionLayoutOfHomePage
      id="about-myself"
      title="About Myself"
      placementOfTitle="left"
    >
      <div className="flex flex-col-reverse sm:flex-row-reverse justify-between gap-10 items-center w-full">
        <Image
          src={personalInfoSVG}
          width={1}
          height={1}
          alt=""
          className="w-4/6 sm:w-2/5"
        />
        <div className="w-full flex flex-col gap-8 pr-5">
          <p className="text-sm md:text-base xl:text-lg text-start">
            I am <span className="font-semibold">MD. Samiullah Sayem</span>. I
            am from{" "}
            <span className="font-semibold">Thakurgaon, Bangladesh</span>. I
            have completed my{" "}
            <span className="font-semibold">
              BSc in Computer Science and Engineering
            </span>{" "}
            from{" "}
            <span className="font-semibold">
              Chittagong University of Engineering and Technology, Chattogram,
              Bangladesh
            </span>{" "}
            in the year of <span className="font-semibold">2023</span>
          </p>
          {/* <Link href="/Resume_of_Samiullah_Sayem.pdf">
          <h1>Download my resume</h1>
        </Link> */}
          <div className="flex items-center gap-3">
            <p className="text-sm md:text-base xl:text-lg">Follow me on:</p>
            <IconShell link="https://github.com/Sym-17">
              <GithubIcon color="#000000" />
            </IconShell>
            <IconShell link="https://www.linkedin.com/in/md-samiullah-sayem/">
              <LinkedInIcon color="#000000" />
            </IconShell>
            <IconShell link="https://leetcode.com/sayem7/">
              <LeetcodeIcon color="#000000" />
            </IconShell>
            <IconShell link="mailto:sayemsami7@gmail.com">
              <EnvelopeIcon />
            </IconShell>
          </div>
        </div>
      </div>
    </SectionLayoutOfHomePage>
  );
};

export default AboutMyself;

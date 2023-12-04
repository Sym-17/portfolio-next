import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import LeetcodeIcon from "./LeetcodeIcon";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";
import IconShell from "./IconShell";
import MouseIcon from "./MouseIcon";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-20 min-h-screen justify-center items-center">
      <div className="flex justify-between w-full gap-5 md:gap-10 lg:gap-20">
        <div className="flex flex-col justify-start gap-2 lg:gap-5 ">
          <header className="text-2xl md:text-3xl xl:text-5xl font-medium text-[#536DFE]">
            MD. Samiullah Sayem
          </header>
          <p className="text-lg md:text-xl xl:text-2xl font-medium">
            Software Engineer
          </p>
          <p className="text-sm md:text-base xl:text-lg">
            Recent graduate with a strong willingness to learn and to develop
            industry-level skills. I possess a proactive learning attitude and
            aspire to create to a successful career by acquiring valuable
            experience and professional growth. Committed to building a
            rewarding career in the industry.
          </p>
          <Link href="#about-myself" className="w-28  md:w-32  xl:w-40">
            <h1 className=" p-1 md:p-2 lg:p-3 xl:p-4 text-white bg-[#536DFE] hover:bg-[#4f62ce] text-sm  lg:text-base xl:text-lg font-medium text-center rounded-xl cursor-pointer">
              Get in touch
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex flex-col gap-5">
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
      <Link
        href="#skills"
        className="flex items-center ml-auto gap-1 p-1 rounded-xl"
      >
        <p className="text-[#536DFE] text-sm md:text-base xl:text-lg">
          Scroll Down
        </p>
        <div className="w-10 h-10 cursor-pointer">
          <MouseIcon color="#536DFE" />
        </div>
      </Link>
    </div>
  );
};

export default HomePage;

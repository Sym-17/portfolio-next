import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import LeetcodeIcon from "./LeetcodeIcon";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";
import IconShell from "./IconShell";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex-1 flex items-center">
      <div className="flex justify-between">
        <div className="flex flex-col justify-start gap-2 lg:gap-5 pr-5 md:pr-10 lg:pr-20">
          <header className="text-2xl md:text-3xl lg:text-5xl font-medium text-[#536DFE]">
            MD. Samiullah Sayem
          </header>
          <p className="text-lg lg:text-2xl">Software Engineer</p>
          <p className="text-xs lg:text-base">
            Recent graduate with a strong willingness to learn and to develop
            industry-level skills. I possess a proactive learning attitude and
            aspire to create to a successful career by acquiring valuable
            experience and professional growth. Committed to building a
            rewarding career in the industry.
          </p>
          <Link href="#about-myself">
            <h1 className="w-24 p-1 md:w-36 md:p-2 xl:w-40 lg:p-3 xl:p-4 text-white bg-[#536DFE] hover:bg-[#4f62ce] text-sm lg:text-xl font-medium text-center rounded-xl cursor-pointer">
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
    </div>
  );
};

export default HomePage;

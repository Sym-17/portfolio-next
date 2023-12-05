import React from "react";
import IconShell from "./IconShell";
import GithubIcon from "./GithubIcon";
import LeetcodeIcon from "./LeetcodeIcon";
import LinkedInIcon from "./LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import useNightTheme from "@/store/useNightTheme";

type FolllowLinksProps = {
  flexStyle: string;
};

const FolllowLinks = ({ flexStyle }: FolllowLinksProps) => {
  const { nightTheme } = useNightTheme();

  return (
    <div className={`flex flex-${flexStyle} gap-5`}>
      <IconShell link="https://github.com/Sym-17">
        <GithubIcon color={nightTheme ? "#cbd5e1" : "#000000"} />
      </IconShell>
      <IconShell link="https://www.linkedin.com/in/md-samiullah-sayem/">
        <LinkedInIcon color={nightTheme ? "#cbd5e1" : "#000000"} />
      </IconShell>
      <IconShell link="https://leetcode.com/sayem7/">
        <LeetcodeIcon color={nightTheme ? "#cbd5e1" : "#000000"} />
      </IconShell>
      <IconShell link="mailto:sayemsami7@gmail.com">
        <EnvelopeIcon
          className={`${nightTheme ? "text-gray-300" : "text-black"}`}
        />
      </IconShell>
    </div>
  );
};

export default FolllowLinks;

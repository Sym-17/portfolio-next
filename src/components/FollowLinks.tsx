import React from "react";
import IconShell from "./IconShell";
import GithubIcon from "./GithubIcon";
import LeetcodeIcon from "./LeetcodeIcon";
import LinkedInIcon from "./LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const FolllowLinks = ({ flexStyle }: { flexStyle: string }) => {
  return (
    <div className={`flex ${flexStyle} gap-5`}>
      <IconShell link="https://github.com/Sym-17">
        <GithubIcon />
      </IconShell>
      <IconShell link="https://www.linkedin.com/in/md-samiullah-sayem/">
        <LinkedInIcon footerOrNot="false" />
      </IconShell>
      <IconShell link="https://leetcode.com/sayem7/">
        <LeetcodeIcon />
      </IconShell>
      <IconShell link="mailto:sayemsami7@gmail.com">
        <EnvelopeIcon className="text-primary" />
      </IconShell>
    </div>
  );
};

export default FolllowLinks;

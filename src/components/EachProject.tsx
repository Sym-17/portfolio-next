import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import GithubIcon from "./GithubIcon";

type EachProjectProps = {
  title: string;
  description: string;
  tags: string[];
  isOngit: boolean;
  gitLink: string;
  isDeployed: boolean;
  deployLink: string;
};

const EachProject = (props: EachProjectProps) => {
  return (
    <div className="flex justify-between gap-5 items-center w-full bg-transparent border-2 border-[#536DFE] p-2 rounded-2xl">
      <div className="flex flex-col items-start gap-1">
        <header className="text-xl font-bold">{props.title}</header>
        <p className="text-sm lg:text-base font-medium">{props.description}</p>
        <div className="flex flex-wrap gap-1">
          {props.tags.map((tag) => {
            return (
              <h1
                key={tag}
                className="p-1 lg:p-2 text-[8px] lg:text-xs text-white bg-slate-400 rounded-lg text-center"
              >
                {tag}
              </h1>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={props.gitLink}
          target="_blank"
          className={`${
            props.isOngit ? "flex" : "hidden"
          } w-5 lg:w-8 cursor-pointer lg:p-1 border-2 border-transparent hover:border-gray-300 rounded-xl`}
        >
          <GithubIcon color="#000000" />
        </Link>
        <Link
          href={props.deployLink}
          target="_blank"
          className={`${
            props.isDeployed ? "flex" : "hidden"
          } w-5 lg:w-8 cursor-pointer lg:p-1 border-2 border-transparent hover:border-gray-300 rounded-xl`}
        >
          <GlobeAltIcon />
        </Link>
      </div>
    </div>
  );
};

export default EachProject;

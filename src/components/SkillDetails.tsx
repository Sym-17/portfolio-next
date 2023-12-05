import useNightTheme from "@/store/useNightTheme";
import React from "react";

type SkillDetailsProps = {
  title: string;
  items: string[];
};

const SkillDetails = (props: SkillDetailsProps) => {
  const { nightTheme } = useNightTheme();
  return (
    <div className="flex flex-col items-end gap-2">
      <header
        className={`text-sm lg:text-base xl:text-xl font-semibold capitalize ${
          nightTheme ? "text-gray-300" : "text-black"
        }`}
      >
        {props.title}
      </header>
      <ul className="flex flex-wrap justify-end gap-2 lg:gap-5">
        {props.items.map((item) => {
          return (
            <li
              className={`text-xs lg:text-sm xl:text-base p-1  ${
                nightTheme ? "bg-transparent text-gray-300" : "bg-slate-50"
              } rounded-md border-2 border-slate-300`}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillDetails;

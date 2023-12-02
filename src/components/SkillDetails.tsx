import React from "react";

type SkillDetailsProps = {
  title: string;
  items: string[];
};

const SkillDetails = (props: SkillDetailsProps) => {
  return (
    <div className="flex flex-col items-end">
      <header className="text-sm lg:text-xl font-semibold capitalize">
        {props.title}
      </header>
      <ul className="flex gap-2 lg:gap-5">
        {props.items.map((item) => {
          return (
            <li className="text-xs lg:text-base" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillDetails;

import React from "react";

type SectionLayoutProps = {
  children: React.ReactNode;
  title: string;
  placementOfTitle: string;
  id: string;
};

const SectionLayoutOfHomePage = (props: SectionLayoutProps) => {
  return (
    <div
      className="flex flex-col items-start w-full justify-between gap-2 lg:gap-10 mb-20 lg:mb-40"
      id={props.id}
    >
      <header
        className={`text-2xl md:text-3xl xl:text-5xl text-[#536DFE] font-medium ${
          props.placementOfTitle === "right" ? "ml-auto" : "mr-auto"
        }`}
      >
        {props.title}
      </header>

      {props.children}
    </div>
  );
};

export default SectionLayoutOfHomePage;

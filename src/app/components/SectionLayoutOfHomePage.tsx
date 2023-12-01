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
      className="flex flex-col items-start w-full justify-between gap-2 lg:gap-10 mb-40"
      id={props.id}
    >
      <header
        className={`text-2xl md:text-3xl lg:text-5xl text-[#536DFE] font-medium ${
          props.placementOfTitle === "right" ? "ml-auto" : "mr-auto"
        }`}
      >
        {props.title}
      </header>

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-10 items-center w-full">
        {props.children}
      </div>
    </div>
  );
};

export default SectionLayoutOfHomePage;

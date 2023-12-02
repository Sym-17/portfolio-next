import React from "react";
import SectionLayoutOfHomePage from "./SectionShellOfHomePage";

const AboutMyself = () => {
  return (
    <SectionLayoutOfHomePage
      id="about-myself"
      title="About Myself"
      placementOfTitle="left"
    >
      <div className="">
        <div className="">
          <header>Full Name</header>
          <span>MD. Samiullah Sayem</span>
        </div>
        <div className="">
          <header>Home Town</header>
          <span>Thakurgaon, Bangladesh</span>
        </div>
        <div className="">
          <header>Education</header>
          <span>BSc in Computer Science & Engineering</span>
          <span>
            Chittagong University of Engineering & Technology, Chattogram,
            Bangladesh
          </span>
        </div>
        <h1>My Resume</h1>
        <h1>Contacts: git, in, mail</h1>
      </div>
    </SectionLayoutOfHomePage>
  );
};

export default AboutMyself;

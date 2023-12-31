import Link from "next/link";
import MouseIcon from "./MouseIcon";
import FolllowLinks from "./FollowLinks";
import AnimationShellOfX from "./AnimationShellOfX";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-16 xl:gap-20 min-h-screen justify-center items-center">
      <div className="flex justify-between w-full gap-5 md:gap-10 lg:gap-20">
        <div className="flex flex-col justify-start gap-2 lg:gap-5 ">
          <AnimationShellOfX duration={0.5} delay={0} x="-100%">
            <header className="text-2xl md:text-3xl xl:text-5xl font-medium text-[#536DFE]">
              Hi, I{"'"}m Sayem
            </header>
          </AnimationShellOfX>
          <AnimationShellOfX duration={1} delay={0.3} x="-100%">
            <p
              className={`text-lg md:text-xl xl:text-2xl font-medium text-primary`}
            >
              Software Engineer
            </p>
          </AnimationShellOfX>

          <AnimationShellOfX duration={1} delay={0.5} x="100%">
            <p
              className={`text-sm md:text-base xl:text-lg text-start text-primary`}
            >
              I{"'"}m from{" "}
              <span className="font-semibold">Thakurgaon, Bangladesh</span>. I
              {"'"}ve completed my{" "}
              <span className="font-semibold">
                BSc in Computer Science and Engineering
              </span>{" "}
              from{" "}
              <span className="font-semibold">
                Chittagong University of Engineering and Technology, Chattogram,
                Bangladesh
              </span>{" "}
              in the year of <span className="font-semibold">2023</span>.<br />{" "}
              Recent graduate with a proactive learning attitude, eager to
              develop industry-level skills and build a successful career
              through valuable experience and professional growth.
            </p>
          </AnimationShellOfX>
          <AnimationShellOfX duration={0.5} delay={1} x="-100%">
            <div className="flex items-center gap-3">
              <p className={`text-xs md:text-sm xl:text-base text-primary`}>
                Follow me on:
              </p>

              <FolllowLinks flexStyle="flex-row" />
            </div>
          </AnimationShellOfX>
        </div>
      </div>

      <Link href="#skills" className="flex w-fit justify-end items-end ml-auto">
        <AnimationShellOfX duration={0.5} delay={1} x="100%">
          <div className="flex justify-center items-center gap-1 p-1 rounded-xl">
            <p className="text-[#536DFE] text-sm md:text-base xl:text-lg">
              Scroll Down
            </p>
            <div className="w-6 md:w-8 xl:w-10 cursor-pointer">
              <MouseIcon color="#536DFE" />
            </div>
          </div>
        </AnimationShellOfX>
      </Link>
    </div>
  );
};

export default HomePage;

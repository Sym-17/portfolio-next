import Link from "next/link";
import MouseIcon from "./MouseIcon";
import useNightTheme from "@/store/useNightTheme";
import FolllowLinks from "./FollowLinks";
import AnimationShellOfX from "./AnimationShellOfX";

const HomePage = () => {
  const { nightTheme } = useNightTheme();
  return (
    <div className="w-full flex flex-col gap-20 min-h-screen justify-center items-center">
      <div className="flex justify-between w-full gap-5 md:gap-10 lg:gap-20">
        <div className="flex flex-col justify-start gap-2 lg:gap-5 ">
          <AnimationShellOfX duration={0.5} delay={0} x="-100%">
            <header className="text-2xl md:text-3xl xl:text-5xl font-medium text-[#536DFE]">
              Hi, I'm Sayem
            </header>
          </AnimationShellOfX>
          <AnimationShellOfX duration={1.5} delay={0.3} x="-100%">
            <p
              className={`text-lg md:text-xl xl:text-2xl font-medium ${
                nightTheme ? "text-gray-300" : "text-black"
              }`}
            >
              Software Engineer
            </p>
          </AnimationShellOfX>

          <AnimationShellOfX duration={1.5} delay={0.3} x="100%">
            <p
              className={`text-sm md:text-base xl:text-lg text-start ${
                nightTheme ? "text-gray-300" : "text-black"
              }`}
            >
              I'm from{" "}
              <span className="font-semibold">Thakurgaon, Bangladesh</span>.
              I've completed my{" "}
              <span className="font-semibold">
                BSc in Computer Science and Engineering
              </span>{" "}
              from{" "}
              <span className="font-semibold">
                Chittagong University of Engineering and Technology, Chattogram,
                Bangladesh
              </span>{" "}
              in the year of <span className="font-semibold">2023</span>.<br />{" "}
              Recent graduate with a strong willingness to learn and to develop
              industry-level skills. I possess a proactive learning attitude and
              aspire to create to a successful career by acquiring valuable
              experience and professional growth. Committed to building a
              rewarding career in the industry.
            </p>
          </AnimationShellOfX>
          <AnimationShellOfX duration={1.5} delay={1.5} x="-100%">
            <div className="flex items-center gap-3">
              <p
                className={`text-xs md:text-sm xl:text-base ${
                  nightTheme ? "text-gray-300" : "text-black"
                }`}
              >
                Follow me on:
              </p>

              <FolllowLinks flexStyle="row" />
            </div>
          </AnimationShellOfX>
          {/* <Link href="#about-myself" className="w-28  md:w-32  xl:w-40">
            <h1 className=" p-1 md:p-2 lg:p-3 xl:p-4 text-white bg-[#536DFE] hover:bg-[#4f62ce] text-sm  lg:text-base xl:text-lg font-medium text-center rounded-xl cursor-pointer">
              Get in touch
            </h1>
          </Link> */}
        </div>
      </div>

      <Link href="#skills" className="flex w-full justify-end items-end">
        <AnimationShellOfX duration={1.5} delay={1.5} x="100%">
          <div className="flex justify-center items-center ml-auto gap-1 p-1 rounded-xl">
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

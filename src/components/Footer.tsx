import Link from "next/link";
import LinkedInIcon from "./LinkedInIcon";
import Image from "next/image";
import GithubIcon from "./GithubIcon";
import IconShell from "./IconShell";

export default function Footer() {
  return (
    <footer className="flex-col justify-center gap-0 bg-gray-800 text-white p-1 sm:pr-20 sm:pl-20 lg:pr-44 lg:pl-44 xl:pr-80 xl:pl-80 w-full">
      <div className="flex justify-center items-center gap-2 border-gray-400 border-b-2">
        <h1 className="text-center text-xs lg:text-sm">Contact Us</h1>
        <IconShell link="https://github.com/Sym-17">
          <GithubIcon color="#fff" />
        </IconShell>
        <IconShell link="https://www.linkedin.com/in/md-samiullah-sayem/">
          <LinkedInIcon color="#fff" />
        </IconShell>
      </div>
      <p className="text-[8px] lg:text-[10px] text-center mt-3">
        © 2023 https://samiullah-sayem.vercel.app/ | Powered by: Sym-17
        <br />
        Copyright: Any unauthorized use or reproduction of this content for
        commercial purposes is strictly prohibited and constitutes copyright
        infringement liable to legal action.
      </p>
    </footer>
  );
}

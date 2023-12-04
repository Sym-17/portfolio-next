import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Samiullah Sayem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-pt-14 md:scroll-pt-20 xl:scroll-pt-28"
    >
      <body
        className={`${montserrat.className} flex flex-col gap-5 justify-center items-center`}
      >
        <Nav />
        {/* pr-5 pl-5 pt-5 sm:pr-20 sm:pl-20 lg:pr-44 lg:pl-44 xl:pr-96 xl:pl-96 */}
        <div className="flex flex-col items-center w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

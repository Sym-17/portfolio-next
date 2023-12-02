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
    <html lang="en">
      <body
        className={`${montserrat.className} flex flex-col gap-5 justify-center items-center`}
      >
        <Nav />
        <div className="pr-5 pl-5 pt-5 sm:pr-20 sm:pl-20 lg:pr-44 lg:pl-44 xl:pr-80 xl:pl-80">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { MdLanguage } from "react-icons/md";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-[#070708] h-[10vh] w-full flex items-center border-b-2 border-[#22222D] z-50">
      <div className="flex items-center justify-between w-[80%] max-w-7xl m-auto text-[#ffffff]">
        <a
          href="/"
          className={`${comfortaa.className} logo flex items-center text-2xl`}
        >
          <img src="logo.png" alt="logo" className="animate-fade-top-left" />
          Realply
        </a>
        <span className="flex items-center justify-between w-[30%] ml-16">
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Testimonials</a>
          <a href="#">Press</a>
        </span>
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-1 cursor-pointer">
            <MdLanguage className="text-2xl" /> EN
          </span>
          <button className="btn">Request a Demo</button>
        </span>
      </div>
    </nav>
  );
}

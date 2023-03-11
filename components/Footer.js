import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="h-64 pt-10 w-full bg-[#070708] border-t-2 border-[#22222D] flex flex-col items-center justify-between">
      <div className="flex justify-between w-[80%] text-white">
        <span className="w-[55%]">
          <span
            href="#"
            className={`${comfortaa.className} logo flex items-center text-2xl`}
          >
            <img src="logo.png" alt="logo" />
            Realply
          </span>
        </span>
        <span className="w-[45%] flex justify-between">
          <span>7014 E Camelback Rd. Suite B100A, Scottsdale AZ 85251</span>
          <ul className="">
            <li className="text-[#535366] hover:scale-105">
              <a href="#a">Legal</a>
            </li>
            <li className=" hover:scale-105">
              <a href="#a">Terms of Service</a>
            </li>
            <li className=" hover:scale-105">
              <a href="#a">Privacy Policy</a>
            </li>
            <li className=" hover:scale-105">
              <a href="#a">Cookies Policy</a>
            </li>
          </ul>
        </span>
      </div>
      {/* Bottom footer */}
      <div className="h-[10vh] px-36 flex items-center text-[#888FA8] justify-between w-full border-t-2 border-[#22222D]">
        <span className="w-[55%] flex items-center">
          Copyright 2020 Realply. All rights reserved. Various trademarks held
          by their respective owners.
        </span>
        <span className="w-[45%] flex items-center gap-5 flex-row-reverse">
          <a href="#s" className="hover:scale-125">
            <FaTwitter />
          </a>
          <a href="#s" className="hover:scale-125">
            <FaFacebook />
          </a>
          <a href="#s" className="hover:scale-125">
            <FaLinkedin />
          </a>
          <a href="#s" className="hover:scale-125">
            <FaInstagram />
          </a>
          <a href="#s" className="hover:scale-125">
            <FaYoutube />
          </a>
        </span>
      </div>
    </div>
  );
}

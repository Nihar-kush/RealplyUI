"use client";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Cta from "@/sections/Cta";
import Explore from "@/sections/Explore";
import Feature1 from "@/sections/Feature1";
import Feature2 from "@/sections/Feature2";
import Feature3 from "@/sections/Feature3";
import Featured from "@/sections/Featured";
import Hero from "@/sections/Hero";
import Testimonials from "@/sections/Testimonials";
import TrustedBy from "@/sections/TrustedBy";

export default function Home() {
  return (
    <div id="home" className="">
      <Navbar />
      {/* Hero */}
      <section id="gradient" className="bg-[#070708] ">
        <Hero />
      </section>
      {/* About */}
      <section id="gradient" className="bg-[#070708] ">
        <About />
      </section>
      {/* Featured */}
      <section id="gradient" className="bg-[#070708] ">
        <Featured />
      </section>
      {/* Explore */}
      <section className="bg-[#ffffff] ">
        <Explore />
      </section>
      {/* TrustedBy */}
      <section id="gradient" className="bg-[#070708] ">
        <TrustedBy />
      </section>
      {/* FEATURES */}
      <section id="gradient" className="bg-[#070708] ">
        <Feature1 />
      </section>
      <section id="gradient" className="bg-[#070708] ">
        <Feature2 />
      </section>
      <section id="gradient" className="bg-[#070708] ">
        <Feature3 />
      </section>
      {/* Testimonials */}
      <section className="bg-[#ffffff] ">
        <Testimonials />
      </section>
      {/* Cta */}
      <section id="gradient" className="bg-[#070708] ">
        <Cta />
      </section>
    </div>
  );
}

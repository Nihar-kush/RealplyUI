import React from "react";

export default function TestimonialCard({ statement }) {
  return (
    <div className="sm:break-inside-avoid h-[70%] w-full flex flex-col ">
      <blockquote className="rounded-xl bg-gray-50 p-6 shadow h-[70%]">
        <p className="leading-relaxed text-left text-[#6D6F87]">{statement}</p>
      </blockquote>
      <div className="flex p-6 items-center gap-4">
        <img
          alt="user"
          src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-sm font-semibold text-[#070708]">
          <p className="">Gladis Lennon</p>
          <p className="mt-1">Head of SEO</p>
        </div>
      </div>
    </div>
  );
}

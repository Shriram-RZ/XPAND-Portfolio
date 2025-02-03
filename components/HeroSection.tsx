"use client";
import Link from "next/link";
import { useState } from "react";
import { SpotlightPreview } from "./SpotlightPreview";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  return <></>;
};

export default function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-32 sm:py-36 lg:py-40 overflow-hidden min-h-screen flex items-center justify-center relative">
        <div className="text-center flex flex-col items-center space-y-10 animate-fadeIn">
          <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300 text-sm">
            Creativity in mind
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
            We inspire Growth for your business brand
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            deleniti earum, qui odio, dolorum labore incidunt ad ab porro,
            provident excepturi molestiae corporis molestias nam accusamus.
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Let's talk
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

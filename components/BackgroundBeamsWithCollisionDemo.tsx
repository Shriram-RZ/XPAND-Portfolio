import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import { TextHoverEffectDemo } from "./TextHoverEffectDemo";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="container mx-auto p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-lg">
        <div className="text-center">
          <p className="text-2xl font-bold">
            XPAND | Social Media Branding & Content Agency
          </p>
          <p className="mt-4">
            📍 [Location] | 📧{" "}
            <a
              href="mailto:xpandoffice01@gmail.com"
              className="underline hover:text-gray-200"
            >
              xpandoffice01@gmail.com
            </a>{" "}
            | 📞 [Phone]
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="[instagram]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 underline hover:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.563.334-3.637 1.408-1.074 1.074-1.35 2.356-1.408 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.35 3.637 1.408 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.563-.334 3.637-1.408 1.074-1.074 1.35-2.356 1.408-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.35-3.637-1.408-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

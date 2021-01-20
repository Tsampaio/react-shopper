import React from "react";
import { LogoIcon } from "./Icons";

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3 text-xl">
            <LogoIcon />
            <span className="inline-block py-1 px-2 text-white text-2xl font-medium tracking-wider">
              React Shopper
            </span>
          </span>
        </span>
      </div>
    </header>
  );
}

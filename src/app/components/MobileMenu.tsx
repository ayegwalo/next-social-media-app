"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Client } from "@vercel/postgres";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div
          className={`w-6 bg-pink-500 h-1 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-700`}
        />
        <div
          className={`w-6 bg-pink-500 h-1 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-700`}
        />
        <div
          className={`w-6 bg-pink-500 h-1 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-700`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-10 font-medium text-xl z-10">
          <Link href="/">HOME</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

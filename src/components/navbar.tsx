"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-2 md:py-[15px] md:px-[30px] relative z-10 bg-gradient-to-r from-[#4c6ef5] via-[#9b5de5] to-[#4c6ef5]">
      {/* Logo */}
      <div className="flex items-center gap-x-[5px]">
        <Image src="/alogo.png"  alt="logo image"  width={50} height={50} /> {/* Reduced logo size */}
      </div>

      {/* Navigation links */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-[50px]"> {/* Reduced gap between menu items */}
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/project" className="hover:text-yellow-400">Project</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </nav>

      {/* Menu icon for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu className="text-2xl text-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="cursor-pointer absolute top-14 left-0 w-full bg-gradient-to-r from-[#4c6ef5] via-[#9b5de5] to-[#4c6ef5] text-center text-white font-semibold z-50">
          <li className="py-2 border-b border-blue-500">
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/project" onClick={toggleMenu}>Project</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

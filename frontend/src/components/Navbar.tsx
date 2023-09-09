"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Tanbora-logos/Tanbora-logos_white.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  const [isopen, setIsopen] = useState(false);
  return (
    <nav className="flex items-center px-3 lg:px-8 py-4 justify-between font-poppins shadow-md">
      <div className="">
        <Image className="w-48 lg:w-64" src={logo} alt="logo" />
      </div>
      <ul className="hidden md:flex md:space-x-8 lg:space-x-10 lg:text-xl font-medium">
        <li>
          <Link
            className="hover:text-primary-50 hover:underline hover:underline-offset-8"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-50 hover:underline hover:underline-offset-8"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-50 hover:underline hover:underline-offset-8"
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-50 hover:underline hover:underline-offset-8"
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
      <div className="hidden md:block space-x-4">
        <Link
          className="px-4 py-1 bg-primary-50 rounded-full border-2 border-primary-50 text-white lg:px-6 lg:py-1 lg:text-xl"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="px-4 py-1 rounded-full text-primary-50 border-2 border-primary-50 lg:px-6 lg:py-1 lg:text-xl"
          href="/signup"
        >
          Signup
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsopen(!isopen)}>
          {isopen ? (
            <RxCross2 className="text-4xl" />
          ) : (
            <HiMenuAlt1 className="text-3xl" />
          )}
        </button>
      </div>
      <div
        className={`absolute top-20 w-full bg-white py-4 px-14 right-0 backdrop-blur-lg z-10 ${
          isopen ? "flex flex-col items-center justify-center" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-2 text-xl font-medium">
          <li>
            <Link
              className="hover:text-primary-50 hover:underline hover:underline-offset-8"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary-50 hover:underline hover:underline-offset-8"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary-50 hover:underline hover:underline-offset-8"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary-50 hover:underline hover:underline-offset-8"
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
          <Link
            className="px-4 py-1 w-full text-center bg-white rounded-full border-2 border-primary-50 text-primary-50 lg:px-6 lg:py-1 lg:text-xl"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="px-4 py-1 w-full text-center rounded-full bg-primary-50 text-white border-2 border-primary-50 lg:px-6 lg:py-1 lg:text-xl"
            href="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

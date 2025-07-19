import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";

const navLinks = ["Home", "Movies & Shows", "Support", "Subscriptions"];

const NavBar = () => {
  const [isclicked, setisclicked] = useState(false);
  const handleMenu = () => {
    setisclicked((prev) => !prev);
  };

  return (
    <header className="absolute top-0 left-0 w-screen">
      <div className="max-container">
        <div className="w-full py-4 flex items-center justify-between">
          <div>
            <img
              src="img/Logo.png"
              alt="logo"
              className="w-28 sm:w-40 lg:w-52 lg:h-14 object-cover"
            />
          </div>

          <nav className="p-2 bg-black hidden md:block">
            <ul className="flex items-center gap-2">
              {navLinks.map((link, index) => (
                <span
                  className="text-white text-sm cursor-pointer transition font-normal p-2 first:bg-black-10 hover:bg-black-10 rounded-sm"
                  key={index}
                >
                  {link}
                </span>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button className="size-8 grid place-items-center rounded-full text-white text-xl md:text-2xl cursor-pointer hover:text-gray-400 transition">
              <IoIosSearch />
            </button>
            <button className="size-8 grid place-items-center rounded-full text-white text-xl md:text-2xl cursor-pointer hover:text-gray-400 transition">
              <FaRegBell />
            </button>

            <button
              className="size-8 grid place-items-center rounded-full text-white text-2xl cursor-pointer hover:text-gray-400 transition md:hidden"
              onClick={handleMenu}
            >
              <MdMenu />
            </button>
          </div>

          <nav
            className={`absolute top-17 ${
              isclicked ? "left-0" : "-left-full"
            } rounded-b-lg transition-all duration-300 bg-black right-0 w-full shadow-lg md:hidden`}
          >
            <ul className="py-5 size-full flex flex-col gap-1">
              {navLinks.map((item, i) => (
                <span
                  className="text-white px-5 text-base font-medium active:underline active:text-red-10 py-2 transition-all duration-300 hover:bg-black-10 cursor-pointer"
                  key={i}
                >
                  {item}
                </span>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import React from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const home = ["Categories", "Devices", "Pricing", "FQA"];
const movies = ["Gernes", "Trending", "New Releases", "Popular"];
const shows = ["Gernes", "Trending", "New Releases", "Popular"];
const support = ["Contact Us"];
const subscription = ["Plans", "Features"];

const GroupLinks = ({ title, links }) => {
  return (
    <div className="px-2">
      <p className="text-white text-base font-medium whitespace-nowrap">
        {title}
      </p>
      <ul className="mt-4 grid gap-0.5">
        {links.map((li, i) => (
          <li
            key={i}
            className="w-full text-start transition duration-150 group cursor-pointer p-1"
          >
            <span className="text-sm group-hover:text-red-10  text-gray-15">
              {li}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="max-container pt-7 pb-4 bg-black">
        <div className="mb-5 grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-6">
          <GroupLinks title="Home" links={home} />
          <GroupLinks title="Movies" links={movies} />
          <GroupLinks title="Shows" links={shows} />
          <GroupLinks title="Support" links={support} />
          <GroupLinks title="Subscription" links={subscription} />
          <div className="">
            <p className="text-white text-base font-medium">ConnectWith Us</p>
            <ul className="mt-4 flex items-center gap-3">
              <li className="size-11 rounded-sm bg-black-10 cursor-pointer grid place-items-center text-white text-2xl transition-all duration-200 hover:drop-shadow-lg hover:text-red-10">
                <FaFacebook />
              </li>
              <li className="size-11 rounded-sm bg-black-10 cursor-pointer grid place-items-center text-white text-2xl transition-all duration-200 hover:drop-shadow-lg hover:text-red-10">
                <BsTwitterX />
              </li>
              <li className="size-11 rounded-sm bg-black-10 cursor-pointer grid place-items-center text-white text-2xl transition-all duration-200 hover:drop-shadow-lg hover:text-red-10">
                <BsLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-gray-15 mt-6 py-3 flex justify-between items-start md:items-center flex-col md:flex-row gap-3">
            <p className="text-sm sm:text-base">
             @2023 streamvib, All Rights Reserved
            </p>
             <ul className="flex items-center gap-3">
                <li className="text-gray-15 text-sm md:text-base cursor-pointer transition hover:underline hover:text-red-10 p-0.5">Terms of Use</li>
                <li className="text-gray-15 text-sm md:text-base cursor-pointer transition hover:underline hover:text-red-10 p-0.5">Privacy Policy</li>
                <li className="text-gray-15 text-sm md:text-base cursor-pointer transition hover:underline hover:text-red-10 p-0.5">Cookie Policy</li>
             </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

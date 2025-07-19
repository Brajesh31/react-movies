import React from "react";
import SectionHeadTitle from "./SectionHeadTitle";
import devices from "./data";

const Features = () => {
  return (
    <div className="mt-20 w-screen py-4">
      <div className="max-container">
        <div className="size-full">
          <div className="flex items-center justify-between">
            <SectionHeadTitle
              title="We Provide you streaming experience across various devices."
              description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
            />
          </div>

          <div className="mt-5 px-3 grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {devices.map((device, i) => (
              <div className="bg-black-10 p-3.5 rounded-sm border border-transparent hover:border-slate-500/60 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="size-10 bg-transparent text-red-10 text-2xl grid place-items-center">
                    {<device.icon />}
                  </span>

                  <span className="bg-linear-65 from-red-10 to-red-700 text-transparent bg-clip-text text-base lg:text-lg font-semibold">
                    {device.device}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-gray-15 text-sm leading-5">
                    {device.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

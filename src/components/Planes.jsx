import { useState } from "react";
import SectionHeadTitle from "./SectionHeadTitle";
import { planes } from "./data";

const Planes = () => {
  const [planActive, setplanActive] = useState(0);
  return (
    <div className="mt-20 w-screen py-4">
      <div className="max-container">
        <div>
          <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
            <SectionHeadTitle
              title="Choose the plan that's right for you"
              description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            />

            <div className="flex items-center gap-1 px-1 5 py-2 bg-black-10">
              <button
                className={`bg-black ${
                  planActive ? "text-slate-400" : "text-white"
                } text-sm px-3 py-2 rounded-sm cursor-pointer md:hover:bg-black-50 md:hover:text-red-10 transition-all ease-in-out active:bg-black-50`}
                onClick={() => setplanActive(0)}
              >
                Monthly
              </button>

              <button
                className={`bg-black ${
                  planActive ? "text-white" : "text-slate-400"
                } text-sm px-3 py-2 rounded-sm cursor-pointer md:hover:bg-black-50 md:hover:text-red-10 transition-all ease-in-out active:bg-black-50`}
                onClick={() => setplanActive(1)}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4">
            {planes[planActive].map((plan, index) => (
              <div key={index} className="p-3 bg-black-10 rounded-sm max-w-lg">
                <h3 className="text-white text-lg font-semibold">
                  {plan.planTitle}
                </h3>
                <p className="text-sm mt-2 text-gray-15">{plan.planCaption}</p>

                <div className="my-3">
                  <div className="flex items-end gap-1">
                    <span className="text-white text-2xl md:text-3xl font-bold">
                      $ {plan.price}
                    </span>
                    <span className="text-gray-15 text-sm ml-1 -translate-y-1">
                      /{plan.planTime}
                    </span>
                  </div>
                </div>

                <div className="mt-3 w-full flex items-center gap-2">
                  <button className="w-1/2 py-2 text-sm rounded-sm cursor-pointer transition ease-in-out duration-200 bg-black md:hover:bg-black-50 text-white active:underline">
                    Start free trial
                  </button>
                  <button className="w-1/2 py-2 text-sm rounded-sm cursor-pointer transition ease-in-out duration-200 bg-red-10 md:hover:bg-red-500 active:underline text-white">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;

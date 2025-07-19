import { useState } from "react";
import { questions } from "./data";
import SectionHeadTitle from "./SectionHeadTitle";
import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Questions = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleAnswer = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="mt-20 w-screen py-4">
      <div className="max-container">
        <div>
          <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
            <SectionHeadTitle
              title="Frequently Asked Questions"
              description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            />
            <Button id="ask-question" title="Ask a Question" />
          </div>

          <div className="mt-6 grid grid-cols-1 items-start md:grid-cols-2 gap-2.5 px-3">
            {questions.map((item) => (
              <div
                key={item.id}
                className="p-[1px] bg-gradient-to-r from-transparent via-red-10 to-transparent rounded-md"
              >
                <div className="bg-black-10 size-full rounded-sm p-4">
                  <div className="size-full flex items-start justify-between gap-2.5">
                    <div
                      className={`flex transition-all duration-300 ${
                        openItems[item.id] ? "items-start" : "items-center"
                      }`}
                    >
                      <span className="size-10 bg-black grid place-items-center text-white text-base p-1 rounded-sm">
                        {item.id}
                      </span>
                      <div className="ml-3">
                        <p className="text-white text-base font-medium">
                          {item.question}
                        </p>

                        <p
                          className={`text-xs sm:text-sm text-gray-15 transition-all duration-300 mt-2 ${
                            openItems[item.id] ? "block" : "hidden"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>

                    <button
                      className="size-8 bg-black grid place-items-center text-white p-1 cursor-pointer hover:border-red-10 border border-transparent rounded-sm transition-all duration-300"
                      onClick={() => toggleAnswer(item.id)}
                    >
                      {openItems[item.id] ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

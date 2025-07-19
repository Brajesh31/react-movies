import React from "react";

const Button = ({ title, leftIcon, rightIcon, id }) => {
  return (
    <button
      id={id}
      className="bg-red-10 px-5 py-3 rounded-sm text-white cursor-pointer transition hover:bg-red-700 active:opacity-90"
    >
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <span className="text-sm">{leftIcon}</span>
        <span className="text-base font-semibold">{title}</span>
        <span className="text-sm">{rightIcon}</span>
      </div>
    </button>
  );
};

export default Button;

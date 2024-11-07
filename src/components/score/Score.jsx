import React, { useState } from "react";

export const Score = ({ score, onClick, isSelected }) => {
  const handleClick = () => {
    onClick(score); 
  };

  return (
    <span className="flex items-center justify-center">
      <div
        onClick={handleClick}
        className={`w-[51px] h-[51px] rounded-full flex items-center justify-center ${
          isSelected ? "bg-[#FC7614]" : "bg-[#262E38] hover:bg-white"
        } group transition-colors duration-300`}
      >
        <h1
          className={`font-overpass text-[16px] font-bold leading-[24px] tracking-[0.2px] ${
            isSelected ? "text-[#262E38]" : "text-[#969FAD]"
          } text-center group-hover:text-[#262E38]`}
        >
          {score}
        </h1>
      </div>
    </span>
  );
};

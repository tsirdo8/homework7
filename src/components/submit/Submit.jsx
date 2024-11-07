import React from "react";

export const Submit = ({ selectedScore, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative mt-[32px] ml-[32px] w-[341px] h-[45px] rounded-[22.5px] font-overpass text-[15px] font-bold leading-[18.99px] tracking-[2px] text-center ${
        selectedScore
          ? "bg-[#FC7614] text-white"
          : "bg-gray-500 text-gray-300 cursor-not-allowed"
      } transition-colors duration-300`}
      disabled={!selectedScore} // Disable button if no score is selected
    >
      SUBMIT
    </button>
  );
};

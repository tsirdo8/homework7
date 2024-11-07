import React from "react";

export const ThankYouCard = ({ selectedScore }) => {
  return (
    <div className="relative w-[412px] h-[416px] bg-[radial-gradient(98.96%_98.96%_at_50%_0%,_#232A34_0%,_#181E27_100%)] rounded-[40px] flex flex-col items-center justify-center text-center text-white">
      <img
        src="/public/Payment.png"
        className=" w-[162px] h-[108px] mb-2"
        alt="Thank You Icon"
      />
      <p className="mt-[20px] bg-[#232a34] text-[#FC7614] px-4 py-2 rounded-full text-sm mb-6 font-overpass">
        You selected {selectedScore} out of 5
      </p>
      <h1 className="mt-3 font-overpass text-[28px] font-bold leading-[35.45px] text-left w-[153px] h-[43px] ">
        Thank you!
      </h1>
      <p className="text-[#969FAD] font-overpass text-[15px] font-normal leading-[24px] text-center w-[340px] h-[72px] ">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

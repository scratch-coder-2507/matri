import React from "react";

const HappyStoriesCom = () => {
  return (
    <div className="flex-col justify-start items-center gap-14 inline-flex my-36">
      <div className="h-28 flex-col justify-start items-center gap-2 flex">
        <div className="text-center text-slate-950 text-5xl font-normal font-['Euclid Circular A']">
          Happy Stories
        </div>
        <div className="self-stretch text-center text-zinc-500 text-xl font-normal font-['Euclid Circular A']">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
      <div className="justify-start items-start gap-5 inline-flex">
        <div className="w-80 h-80 bg-hsImg bg-contain p-5 from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Euclid Circular A']">
            Priyang & Komal
          </div>
          <div className="opacity-60 text-center text-white text-base font-normal font-['Euclid Circular A']">
            Married on June 2023
          </div>
        </div>
        <div className="w-80 h-80 bg-hsImg bg-contain p-5 from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Euclid Circular A']">
            Priyang & Komal
          </div>
          <div className="opacity-60 text-center text-white text-base font-normal font-['Euclid Circular A']">
            Married on June 2023
          </div>
        </div>
        <div className="w-80 h-80 p-5 bg-hsImg bg-contain from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Euclid Circular A']">
            Priyang & Komal
          </div>
          <div className="opacity-60 text-center text-white text-base font-normal font-['Euclid Circular A']">
            Married on June 2023
          </div>
        </div>
        <div className="w-80 h-80 p-5 bg-hsImg bg-contain from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Euclid Circular A']">
            Priyang & Komal
          </div>
          <div className="opacity-60 text-center text-white text-base font-normal font-['Euclid Circular A']">
            Married on June 2023
          </div>
        </div>
      </div>
      <button className="px-10 py-3 rounded-lg border border-red-600 justify-center items-center gap-3 inline-flex text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
        Show More
      </button>
    </div>
  );
};

export default HappyStoriesCom;

import React from "react";

const PriceComponent = ({
  badgeName,
  name,
  price,
  description,
  feature1,
  feature2,
  feature3,
  buttonName,
}) => {
  return (
    <div className="p-10 w-96 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start gap-6 inline-flex">
      <div
        className={`px-5 py-3 ${
          badgeName === "free"
            ? `bg-white`
            : badgeName === "bronze"
            ? `bg-stone-400`
            : badgeName === "silver"
            ? `bg-slate-200`
            : badgeName === "gold"
            ? `bg-amber-300`
            : badgeName === "diamond"
            ? `bg-white`
            : `bg-red-600`
        } rounded-lg shadow-inner border border-slate-200 justify-center items-center gap-2.5 inline-flex`}
      >
        <div className={`text-center ${
          badgeName === "free"
            ? `text-zinc-800`
            : badgeName === "bronze"
            ? `text-white`
            : badgeName === "silver"
            ? `text-zinc-800`
            : badgeName === "gold"
            ? `text-white`
            : badgeName === "diamond"
            ? `text-zinc-800`
            : `text-white`
        } text-xl font-semibold font-['Euclid Circular A'] leading-normal`}>
          {badgeName.toUpperCase()}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-center text-zinc-800 text-3xl font-normal font-['Euclid Circular A']">
          {name}
        </div>
        <div className="text-center text-zinc-800 text-5xl font-light font-['Euclid Circular A']">
          ₹ {price}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className=" text-zinc-500 text-base font-normal font-['Euclid Circular A'] leading-normal">
          {description}
        </div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative bg-red-600 rounded shadow" />
            <div className="text-zinc-800 text-base font-medium font-['Euclid Circular A'] leading-normal">
              {feature1}
            </div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative bg-red-600 rounded shadow" />
            <div className="text-zinc-800 text-base font-medium font-['Euclid Circular A'] leading-normal">
              {feature2}
            </div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative bg-red-600 rounded shadow" />
            <div className="text-zinc-800 text-base font-medium font-['Euclid Circular A'] leading-normal">
              {feature3}
            </div>
          </div>
        </div>
      </div>
      <button className="w-full px-10 py-3 rounded-lg border border-red-600 justify-center items-center gap-3 inline-flex text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
        {buttonName}
      </button>
    </div>
  );
};

export default PriceComponent;

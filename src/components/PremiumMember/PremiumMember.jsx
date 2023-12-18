import React from "react";
import pm1 from "../../assets/images/pm1.png";
import pm2 from "../../assets/images/pm2.svg";
import pm3 from "../../assets/images/pm3.svg";
import pm4 from "../../assets/images/pm4.svg";

const PremiumMember = () => {
  return (
    <div className="flex-col justify-start items-center gap-14 inline-flex mt-24">
      <div className="flex-col justify-start items-center gap-2 flex">
        <div className="text-center text-slate-950 text-5xl font-normal font-['Euclid Circular A']">
          Our Premium Member
        </div>
        <div className="self-stretch text-center text-zinc-500 text-xl font-normal font-['Euclid Circular A']">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 mx-6">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start inline-flex">
          <img className="h-64 rounded-lg w-72" src={pm1} />
          <div className="self-stretch px-2 pt-4 pb-1 justify-start items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-center text-zinc-800 lg:text-lg xl:text-xl font-medium font-['Euclid Circular A']">
                Ronald Richards
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
                <div className="w-1 h-1 bg-red-600 rounded-full" />
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
              </div>
            </div>
            <div className="p-3 rounded-3xl border border-red-600 justify-start border-dashed items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <button className="w-6 h-6 text-red-600 relative">{">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start inline-flex">
          <img className="h-64 rounded-lg w-72" src={pm2} />
          <div className="self-stretch px-2 pt-4 pb-1 justify-start items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-center text-zinc-800 text-xl font-medium font-['Euclid Circular A']">
                Kathryn Murphy
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
                <div className="w-1 h-1 bg-red-600 rounded-full" />
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
              </div>
            </div>
            <div className="p-3 rounded-3xl border border-red-600 justify-start border-dashed items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <button className="w-6 h-6 text-red-600 relative">{">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start inline-flex">
          <img className="h-64 rounded-lg w-72" src={pm3} />
          <div className="self-stretch px-2 pt-4 pb-1 justify-start items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-center text-zinc-800 text-xl font-medium font-['Euclid Circular A']">
                Annette Black
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
                <div className="w-1 h-1 bg-red-600 rounded-full" />
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
              </div>
            </div>
            <div className="p-3 rounded-3xl border border-red-600 justify-start border-dashed items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <button className="w-6 h-6 text-red-600 relative">{">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start inline-flex">
          <img className="h-64 rounded-lg w-72" src={pm4} />
          <div className="self-stretch px-2 pt-4 pb-1 justify-start items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-center text-zinc-800 text-xl font-medium font-['Euclid Circular A']">
                Ralph Edwards
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
                <div className="w-1 h-1 bg-red-600 rounded-full" />
                <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
                  2 Followers
                </div>
              </div>
            </div>
            <div className="p-3 rounded-3xl border border-red-600 justify-start border-dashed items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <button className="w-6 h-6 text-red-600 relative">{">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="px-10 py-3 rounded-lg border border-red-600 justify-center items-center gap-3 inline-flex text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
        Show More
      </button>
    </div>
  );
};

export default PremiumMember;

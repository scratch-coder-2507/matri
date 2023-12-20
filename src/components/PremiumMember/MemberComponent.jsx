import React from "react";

const MemberComponent = ({name, imgUrl, followers, following}) => {
  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start inline-flex">
      <img className="h-60 rounded-lg w-64" src={imgUrl} />
      <div className="self-stretch px-2 pt-4 pb-1 justify-start items-center inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-center text-zinc-800 lg:text-lg xl:text-xl font-medium font-['Euclid Circular A']">
            {name}
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
              {followers} Followers
            </div>
            <div className="w-1 h-1 bg-red-600 rounded-full" />
            <div className="text-center text-zinc-500 text-base font-normal font-['Euclid Circular A']">
              {following} Following
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
  );
};

export default MemberComponent;

import React from "react";
import { premiumMembers } from "../../utils/dummyJson";
import MemberComponent from "./MemberComponent";

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
        {premiumMembers.map((member) => (
          <MemberComponent
            name={member.name}
            imgUrl={member.imgUrl}
            followers={member.followers}
            following={member.following}
          />
        ))}
      </div>
      <button className="px-10 py-3 rounded-lg border border-red-600 justify-center items-center gap-3 inline-flex text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
        Show More
      </button>
    </div>
  );
};

export default PremiumMember;

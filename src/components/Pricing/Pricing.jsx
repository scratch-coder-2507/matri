import React from "react";
import { subscriptionPlans } from "../../utils/dummyJson";
import PriceComponent from "./PriceComponent";

const Pricing = () => {
  return (
    <div className="flex-col justify-start items-center gap-14 inline-flex mt-24">
      <div className="flex-col justify-start items-center gap-2 flex">
        <div className="text-center text-slate-950 text-5xl font-normal font-['Euclid Circular A']">
          Simple Pricing
        </div>
        <div className="self-stretch text-center text-zinc-500 text-xl font-normal font-['Euclid Circular A']">
          Lorem Ipsum is simply dummy text of the printing and
          <br /> typesetting industry. Lorem Ipsum
        </div>
      </div>
      <div className="justify-start items-start grid grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => (
            <PriceComponent
              badgeName={plan.badgeName}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              feature1={plan.feature1}
              feature2={plan.feature2}
              feature3={plan.feature3}
              buttonName={plan.buttonName}
            />
          ))}
      </div>
    </div>
  );
};

export default Pricing;

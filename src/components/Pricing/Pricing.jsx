import React from "react";
import { subscriptionPlans } from "../../utils/dummyJson";
import PriceComponent from "./PriceComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
    arrows: true,
  };

  return (
    <div className="flex-col justify-center items-center gap-14 mt-24">
      <div className="flex-col justify-start items-center gap-2">
        <div className="text-center text-slate-950 text-3xl lg:text-5xl font-normal font-['Euclid Circular A']">
          Simple Pricing
        </div>
        <div className="text-center text-zinc-500 text-base lg:text-xl font-normal font-['Euclid Circular A']">
          Lorem Ipsum is simply dummy text of the printing and
          <br /> typesetting industry. Lorem Ipsum
        </div>
      </div>

      <Slider {...settings} className="w-full max-w-7xl mx-auto">
        {subscriptionPlans.map((plan) => (
          <div key={plan.name} className="p-4">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pricing;

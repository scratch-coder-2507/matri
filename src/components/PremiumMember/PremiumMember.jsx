import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { premiumMembers } from "../../utils/dummyJson";
import MemberComponent from "./MemberComponent";

const PremiumMember = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
  };

  return (
    <div className="flex-col justify-center items-center gap-14 flex mt-24">
      <div className="flex-col justify-center items-center gap-2">
        <div className="text-center text-slate-950 text-3xl lg:text-5xl font-normal font-['Euclid Circular A']">
          Our Premium Members
        </div>
        <div className="text-center text-zinc-500 text-base lg:text-xl font-normal font-['Euclid Circular A']">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
      <Slider {...settings} className="w-full max-w-7xl">
        {premiumMembers.map((member) => (
          <MemberComponent
            key={member.id}
            name={member.name}
            imgUrl={member.imgUrl}
            followers={member.followers}
            following={member.following}
          />
        ))}
      </Slider>
      <button className="px-10 py-3 rounded-lg border border-red-600 justify-center items-center gap-3 inline-flex text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
        Show More
      </button>
    </div>
  );
};

export default PremiumMember;

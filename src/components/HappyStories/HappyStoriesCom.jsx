import React from "react";
import StoriesComponent from "./StoriesComponent";
import { happyStories } from "../../utils/dummyJson";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HappyStoriesCom = () => {
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
    <div className="flex-col justify-center items-center gap-14 flex my-36">
      <div className="h-28 flex-col justify-center items-center gap-2 flex">
        <div className="text-center text-slate-950 text-3xl lg:text-5xl font-normal font-['Euclid Circular A']">
          Happy Stories
        </div>
        <div className="self-stretch text-center text-zinc-500 text-base lg:text-xl font-normal font-['Euclid Circular A']">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
      <Slider {...settings} className="w-full max-w-7xl mx-auto">
        {happyStories.map((story) => (
          <StoriesComponent
            hisName={story.hisName}
            herName={story.herName}
            date={story.date}
            img={story.img}
          />
        ))}
      </Slider>
      <button className="px-10 py-3 rounded-lg border border-red-600 justify-center items-center gap-3 inline-flex text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
        Show More
      </button>
    </div>
  );
};

export default HappyStoriesCom;

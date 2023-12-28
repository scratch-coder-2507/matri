import React from "react";

const ProfileComponent = ({ hisName, herName, date, img }) => {
  return (
    <div
      className="w-72 h-72 bg-black p-5 rounded-xl flex-col justify-end items-start gap-1 inline-flex"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "contain" }}
    >
      <div className="text-center text-white text-xl font-medium font-['Euclid Circular A']">
        {hisName} & {herName}
      </div>
      <div className="opacity-60 text-center text-white text-base font-normal font-['Euclid Circular A']">
        Married on {date}
      </div>
    </div>
  );
};

export default ProfileComponent;

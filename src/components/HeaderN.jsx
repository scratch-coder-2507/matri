import React from "react";

export const HeaderN = () => {
  return (
    <div className="flex items-center justify-between px-[160px] py-[24px] relative bg-primarywhite border-b [border-bottom-style:solid] border-shade-200">
      <div className="flex items-center gap-[24px] relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Medium',Helvetica] font-medium text-primaryorange text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
          Home
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A ',Helvetica] font-normal text-shade-900 text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
          Active Members
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Regular',Helvetica] font-normal text-shade-900 text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
          Premium Plans
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Regular',Helvetica] font-normal text-shade-900 text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
          Happy Stories
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Regular',Helvetica] font-normal text-shade-900 text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
          Contact us
        </div>
        <div className="absolute w-[4px] h-[4px] top-[26px] left-[22px] bg-primaryorange rounded-[2px]" />
      </div>
      <img className="relative w-[200px] h-[40px] object-cover" alt="Image" src="image-2.png" />
      <div className="flex items-start justify-end gap-[12px] relative flex-1 grow">
        <button className="gap-[8px] px-[20px] py-[12px] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[8px] all-[unset] box-border">
          <img className="relative w-[24px] h-[24px] object-cover" alt="Ellipse" src="ellipse-2.png" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Medium',Helvetica] font-medium text-shade-900 text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
            English
          </div>
        </button>
        <button className="gap-[12px] px-[40px] py-[12px] border border-solid border-shade-200 inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[8px] all-[unset] box-border">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Medium',Helvetica] font-medium text-primaryorange text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
            Login
          </div>
        </button>
        <button className="gap-[12px] px-[40px] py-[12px] bg-primaryorange inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[8px] all-[unset] box-border">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Euclid_Circular_A-Medium',Helvetica] font-medium text-primarywhite text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
            Register
          </div>
        </button>
      </div>
    </div>
  );
};
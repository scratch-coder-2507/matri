import React from "react";
import MatriLogoWhite from "../../assets/images/MatriLogoWhite.svg";
import { FaGoogle, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="w-full h-full px-40 pt-20 pb-6 mx-0 bg-slate-950 flex-col justify-start items-start gap-10 inline-flex">
      <div className="self-stretch justify-start items-start gap-24 inline-flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-44 flex-col justify-start items-start gap-5 flex">
            <img className="w-48 h-10" src={MatriLogoWhite} />
            <div className="self-stretch text-zinc-500 text-base font-normal font-['Euclid Circular A'] leading-normal">
              One of India’s leading matrimonial websites that has helped lakhs
              of members find their perfect life partner. You can register for
              Free and search according to your specific criteria
            </div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <FaGoogle className="w-6 h-6" color="white" />
            </div>
            <div className="w-6 h-6 justify-center items-center flex">
              <FaXTwitter className="w-8 h-8" color="white" />
            </div>
            <div className="w-6 h-6 justify-center items-center flex">
              <FaPinterest className="w-6 h-6" color="white" />
            </div>
            <div className="w-6 h-6 justify-center items-center flex">
              <FaYoutube className="w-6 h-6" color="white" />
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-44 justify-start items-start gap-7 flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-['Euclid Circular A']">
                Main Menu
              </div>
            </div>
            <div className="self-stretch h-28 flex-col justify-start items-start gap-3 flex">
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Home
              </div>
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Premium Plans
              </div>
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Happy Story
              </div>
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Contact Us
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-['Euclid Circular A']">
                Quick Search
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-3 flex">
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                All Members
              </div>
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Premium Members
              </div>
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Free Members
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-['Euclid Circular A']">
                Useful Links
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-3 flex">
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                FAQ
              </div>
              <div className="text-neutral-300 text-base font-normal font-['Euclid Circular A']">
                Terms & Conditions
              </div>
              <div className="w-36 text-neutral-300 text-base font-normal font-['Euclid Circular A'] leading-normal">
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-['Euclid Circular A']">
                Subscribe
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-4 py-2 bg-white bg-opacity-5 rounded-3xl justify-start items-center gap-2 inline-flex">
              <input className="grow shrink outline-none bg-transparent basis-0 opacity-40 text-white text-base font-normal font-['Euclid Circular A']" placeholder="Email Address" type="text"/>
              <div className="w-px h-4 opacity-20 bg-white rounded-3xl" />
              <button className="w-5 h-5 justify-center items-center flex">
                <RiSendPlaneFill className="w-5 h-5" color="white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-6 flex mt-10">
        <div className="self-stretch h-px bg-gradient-to-r from-neutral-700 via-neutral-700 to-neutral-700" />
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-zinc-500 text-sm font-normal font-['Euclid Circular A'] tracking-tight">
            ©Milan Matrimonial 2023. All Rights Reserved.
          </div>
          <div className="text-right text-white text-sm font-normal font-['Euclid Circular A']">
            Made With Joy & ❤️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

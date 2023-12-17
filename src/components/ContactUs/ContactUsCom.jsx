import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";

const ContactUsCom = () => {
  return (
    <div className="justify-start items-center gap-8 inline-flex mx-20">
      <div className="flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="text-center text-slate-950 text-5xl font-normal font-['Euclid Circular A']">
            Get Into Torch
          </div>
          <span className="self-stretch justify-start text-left flex items-start text-zinc-500 text-xl font-normal font-['Euclid Circular A'] leading-7">
            To be the No.1 in our niche and introduce new features beneficial to
            members. To continue to grow with a loyal and increasing customer
            network across the globe. No. 1 Matrimonial Site. Easy, Safe &
            Secure Way To Find The Perfect One For You! Most Trusted Marriage
            Portal. View & Contact Millions Of Profiles. Register Now! Strict
            Privacy Controls. Search by Community
          </span>
        </div>
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="p-3 bg-white rounded-3xl border border-slate-200 justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
              </div>
              <div className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] text-left">
                +91 9294548912
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="p-3 bg-white rounded-3xl border border-slate-200 justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                <IoMail className="w-6 h-6" />
                </div>
              </div>
              <div className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] text-left">
                info@milanmatrimonial.com
              </div>
            </div>
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="p-3 bg-white rounded-3xl border border-slate-200 justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                <IoIosPin className="w-6 h-6" />
                </div>
              </div>
              <div className="w-80 text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal text-left">
                Milan Matrimonial, Nagin Nagar ,Opposite Airport, Main Road
                Indore (M.P) 452001
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-start gap-6 inline-flex">
        <div className="justify-start items-start gap-6 inline-flex">
          <div className="w-80 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-left self-stretch text-zinc-800 text-sm font-medium font-['Euclid Circular A'] leading-none">
              First Name
            </div>
            <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
              <input
                className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight outline-none"
                placeholder="Enter your first name"
                type="text"
              />
            </div>
          </div>
          <div className="w-80 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-left text-zinc-800 text-sm font-medium font-['Euclid Circular A'] leading-none">
              Last Name
            </div>
            <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
              <input
                className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight outline-none"
                placeholder="Enter your last name"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-6 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-left self-stretch text-zinc-800 text-sm font-medium font-['Euclid Circular A'] leading-none">
              Email Address
            </div>
            <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
              <input
                className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight outline-none"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-left text-zinc-800 text-sm font-medium font-['Euclid Circular A'] leading-none">
                Phone Number
              </div>
              <div className="text-zinc-400 text-xs font-normal font-['Euclid Circular A'] leading-none">
                Optional{" "}
              </div>
            </div>
            <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
              <input
                className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight outline-none"
                placeholder="Enter your phone number"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
          <div className="text-left self-stretch text-zinc-800 text-sm font-medium font-['Euclid Circular A'] leading-none">
            Subject
          </div>
          <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
            <input
              className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight outline-none"
              placeholder="Enter your subject"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch h-44 flex-col justify-start items-start gap-2 flex">
          <div className="text-left self-stretch text-zinc-800 text-sm font-medium font-['Euclid Circular A'] leading-none">
            Message
          </div>
          <div className="self-stretch px-4 pt-3.5 pb-28 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
            <textarea
              className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight outline-none"
              placeholder="Write message"
              type="text"
            />
          </div>
        </div>
        <button className="px-10 py-3 bg-red-600 rounded-lg justify-center items-center gap-3 inline-flex text-center text-white text-base font-medium font-['Euclid Circular A'] leading-normal">
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default ContactUsCom;

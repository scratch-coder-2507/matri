import React from "react";
import Header from "../../components/Header/Header";
import Select from "react-select";
import PremiumMember from "../../components/PremiumMember/PremiumMember";
import RegisterImg from "../../assets/images/RegisterImg.svg";
import Pricing from "../../components/Pricing/Pricing";
import HappyStoriesCom from "../../components/HappyStories/HappyStoriesCom";
import ContactUsCom from "../../components/ContactUs/ContactUsCom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const religionOptions = [
    { value: "hindu", label: "Hindu" },
    { value: "christian", label: "Christian" },
  ];

  const motherTongueOptions = [
    { value: "hindi", label: "Hindi" },
    { value: "marathi", label: "Marathi" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      //   width: "200px",
      padding: "5px 20px",
      border: "none", // 1px solid #cbd5e0
      borderRadius: "8px",
      boxShadow: state.isFocused
        ? "0 0 0 1px #4299e1"
        : "0px 0px 0px 2px #F8F8F8, 0px 1px 2px 0px rgba(0, 0, 0, 0.08)", // focused shadow color
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4299e1" : "white", // selected background color
      color: state.isSelected ? "white" : "black", // selected text color
    }),
  };

  return (
    <div>
      <Header />

      <main className="text-center text-gray-700 my-10 h-full">
        <div className="flex flex-col">
          <div className="flex-col justify-center items-center gap-4 inline-flex py-12">
            <div className="text-center text-slate-950 text-7xl font-normal font-['Euclid Circular A']">
              The World's No.1 Matrimony
              <br /> Service
            </div>
            <div className="text-center text-zinc-500 text-xl font-normal font-['Euclid Circular A']">
              Search by City, Profession & Community
            </div>
          </div>
          <div className="h-32 p-6 bg-white rounded-2xl shadow justify-start items-end gap-6 inline-flex mx-4">
            <div className="grow shrink basis-0 h-20 justify-start items-start gap-4 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="flex self-stretch font-bold justify-start items-start text-zinc-800 text-sm font-['Euclid Circular A'] leading-none">
                  I’m Looking for a
                </div>
                <Select
                  options={genderOptions}
                  styles={customStyles}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Select Gender"
                />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-tight">
                    Select Gender
                  </div>
                </div> */}
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="flex self-stretch justify-start items-start text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-none">
                  Aged from
                </div>
                <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
                  <input
                    type="text"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    placeholder="Year From"
                    className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight border-none outline-none"
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="flex self-stretch justify-start items-start text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-none">
                  To
                </div>
                <div className="self-stretch px-4 py-3.5 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
                  <input
                    type="text"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    placeholder="Year To"
                    className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Euclid Circular A'] leading-tight border-none outline-none"
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="flex self-stretch justify-start items-start text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-none">
                  Religion
                </div>
                <Select
                  options={religionOptions}
                  styles={customStyles}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Select Religion"
                />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-tight">
                    Select Religion
                  </div>
                </div> */}
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="flex self-stretch justify-start items-start text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-none">
                  Mother Tongue
                </div>
                <Select
                  options={motherTongueOptions}
                  styles={customStyles}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Select Tongue"
                />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-lg shadow justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-zinc-800 text-sm font-bold font-['Euclid Circular A'] leading-tight">
                    Select Tongue
                  </div>
                </div> */}
              </div>
            </div>
            <div className="px-10 py-3 bg-red-600 rounded-lg justify-center items-center flex">
              <div className="text-center text-white text-base font-medium font-['Euclid Circular A'] leading-normal">
                Search
              </div>
            </div>
          </div>
        </div>
        <PremiumMember />
        <div className="flex flex-col my-36">
          <div className="flex flex-row justify-center items-center gap-24 mx-24">
            <div className="flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="text-slate-950 text-left text-5xl font-normal font-['Euclid Circular A']">
                  Milan Matrimonial
                </div>
                <div className="self-stretch justify-start text-left text-zinc-500 text-2xl font-normal font-['Euclid Circular A'] leading-9">
                  No.1 matrimonial site. Easy, Safe & Secure way to find the
                  perfect one for you! Most Trusted Marriage Portal. View &
                  Contact Millions of Profiles. Register Now! Strict Privacy
                  Controls. Search by community
                </div>
                <button className="px-10 py-3 bg-red-600 rounded-lg justify-center items-center gap-3 inline-flex text-center text-white text-base font-medium font-['Euclid Circular A'] leading-normal">
                Register
              </button>
              </div>
              
            </div>
            <img className="w-96 h-96 rounded-3xl" src={RegisterImg} />
          </div>
        </div>
        <Pricing/>
        <HappyStoriesCom/>
        <ContactUsCom/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import PremiumMember from "../../components/PremiumMember/PremiumMember";
import RegisterImg from "../../assets/images/RegisterImg.svg";
import Pricing from "../../components/Pricing/Pricing";
import HappyStoriesCom from "../../components/HappyStories/HappyStoriesCom";
import ContactUsCom from "../../components/ContactUs/ContactUsCom";
import Footer from "../../components/Footer/Footer";
import SearchProfile from "../../components/SearchProfile/SearchProfile";

const Home = () => {
  
  return (
    <div>
      <Header />

      <main className="text-center text-gray-700 my-3 lg:my-10 h-full">
        <div className="flex flex-col">
          <div className="flex-col flex justify-center items-center gap-4 py-12">
            <div className="text-center text-slate-950 text-2xl lg:text-7xl font-normal font-['Euclid Circular A']">
              The World's No.1 Matrimony
              <br /> Service
            </div>
            <div className="text-center text-zinc-500 text-lg lg:text-xl font-normal font-['Euclid Circular A']">
              Search by City, Profession & Community
            </div>
          </div>
          <SearchProfile/>
        </div>
        <PremiumMember />
        <div className="hidden lg:flex lg:flex-col lg:my-36">
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
        <Pricing />
        <HappyStoriesCom />
        <ContactUsCom />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

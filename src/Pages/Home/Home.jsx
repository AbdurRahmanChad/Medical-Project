import React from "react";
import Image from "../../assets/doctor-2-640x594.jpg";
import Bangla_Text from "./Bangla_Text";
import English_Text from "./English_Text";
import Home_Slip_Rate from "./Home_Slip_Rate";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        {/*==========================================*/}
        <h1 className="text-3xl lg:text-4xl font-semibold pt-14">
          GAMCA Slip BD - GCC Medical Appointment
        </h1>
        {/*==========================================*/}
        <div className="lg:pl-10 pt-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#6EC1E4] pb-7">
            Gamca Slip BD Website Provide GCC Medical Appointment from Wafid
            Server.
          </h1>
          {/*=================================================*/}
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/*===============================================*/}
            <div className="w-full ">
              <img src={Image} alt="Image" className="w-full h-full" />
            </div>
            {/*===============================================*/}
            <div className="bg-[#BFF2B7] border-2 px-5 w-full">
              <h1 className="text-3xl lg:text-4xl py-4 font-bold">
                GAMCA Medical Slip <br /> Registration
              </h1>
              <h2 className="text-3xl font-bold py-10">
                Best website for GCC Medical Appointment Slip. বিকাশ এবং নগদ
                দিয়ে পেমেন্ট করুন।
              </h2>
              <h3 className="text-3xl font-bold py-6 text-[#2B8120]">
                MEDICAL SLIP REGISTRATION FEE <br />
                Tk 1200/-
              </h3>
              {/*=================================================*/}
              <div className="flex flex-col gap-8 mt-8 py-5 items-center">
                <button className="px-10 bg-[#FF1E00] py-2 rounded-sm text-white text-md font-semibold">
                  BOOK APPOINTMENT
                </button>
                <button className="px-10 bg-[#0C751B] py-2  rounded-sm text-white">
                  Book Appointment Through WhatsApp
                </button>
              </div>
            </div>
          </div>
          {/*=================================================*/}
          <Bangla_Text />
          {/*=================================================*/}
          <English_Text />
          {/*=================================================*/}
          <Home_Slip_Rate />
          {/*=================================================*/}
        </div>
      </div>
    </div>
  );
};

export default Home;

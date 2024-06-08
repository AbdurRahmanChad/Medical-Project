import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import Text_Bangla from "./Text_Bangla";
import Text_English from "./Text_English";

const Amal_Aydi = () => {
  return (
    <div className="container mx-auto">
      {/*==========================================================*/}
      <div>
        <h1 className="text-4xl font-semibold text-[#6EC1E4]">
          আমেল আইদি ভিসা প্রসেসিং Saudi Amel aydi Visa Processing
        </h1>
        {/*=========================================================*/}
        <div className="flex flex-col justify-center items-center py-10">
          <button className="flex items-center gap-4 px-10 py-4 bg-gradient-to-b from-[#4A0CD1] to-[#C5217B] rounded-md font-semibold text-white text-lg">
            <span>
              <FaWhatsappSquare />
            </span>
            Call for Details with WhatsApp
          </button>
          <p className="mt-3 text-3xl font-bold text-red-500">+8801841484885</p>
        </div>
        {/*========================================================*/}
        <Text_Bangla />
        <Text_English />
        {/*========================================================*/}
      </div>
    </div>
  );
};

export default Amal_Aydi;

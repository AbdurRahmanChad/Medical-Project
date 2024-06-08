import React from "react";
import Img1 from "../../assets/riyadh.jpg";
const VisaProcessing = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-20">
        {/*===================================================*/}
        <div>
          <img src={Img1} alt="Img1" />
          <div className="flex justify-center items-center py-10">
            <button className="px-6 py-2 bg-[#61CE70] rounded-md text-white">
              Saudi Arabia Visa Processing
            </button>
          </div>
        </div>
        {/*===================================================*/}
        <div>
          <img src={Img1} alt="Img1" />
          <div className="flex justify-center items-center py-10">
            <button className="px-6 py-2 bg-[#61CE70] rounded-md text-white">
              Kuwite Visa Processing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcessing;

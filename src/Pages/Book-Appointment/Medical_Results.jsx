import React from "react";

const Medical_Results = () => {
  return (
    <div className="container mx-auto p-8 lg:p-20">
      <div className="lg:p-8 lg:mx-10">
        <h1 className="lg:text-3xl font-semibold mb-5">
          Your Medical Examinations Results
        </h1>
        <div className="lg:ml-16">
          {/*===================================================*/}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 py-6">
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <label htmlFor="">By Passport Number</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <label htmlFor=""> Wafid Slip Number</label>
            </div>
          </div>
          {/*===================================================*/}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/*=============== Passport NO ==============*/}
            <div className="w-full">
              <label htmlFor="" className="text-md">
                Passport NO
              </label>
              <input
                type="text"
                placeholder="Enter Passport NO"
                // onChange={inputChangeHandler}
                // value={forData.name}
                name="name"
                className="block border border-black p-2 w-full rounded-lg mt-4"
                required
              ></input>
            </div>
            {/*=============== Nationality ===============*/}
            <div className=" w-full">
              <label htmlFor="" className="text-md">
                Nationality
              </label>
              <select
                name="select_course"
                id="select_course"
                // onChange={inputChangeHandler}
                // value={forData.select_course}
                className="block border border-black p-2 w-full rounded-lg mt-4"
                required
              >
                <option value="0">Select Nationality</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Comilla</option>
                <option value="4">Cox's Bazar</option>
                <option value="5">Barisal</option>
                <option value="6">Rajshahi</option>
                <option value="7">Sylhet</option>
              </select>
            </div>
          </div>
          {/*===================================================*/}
          <div>
            <button className="px-6 lg:px-20 py-3 bg-[#0C0C0C] text-white rounded-lg mt-6 lg:text-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical_Results;

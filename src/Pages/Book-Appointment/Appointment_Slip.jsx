import React from "react";

const Appointment_Slip = () => {
  return (
    <div className="container mx-auto p-20">
      <div className="border-2 rounded-xl p-8 lg:mx-10">
        <h1 className="lg:text-3xl font-semibold mb-5">
          Wafid Appointment Slip
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/*=============== Passport NO ==============*/}
          <div className="w-full">
            <label htmlFor="" className="text-md">
              Passport NO
            </label>
            <input
              type="text"
              placeholder="Enter Passport NO"
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
        <button className="px-6 lg:px-20 py-3 bg-[#0C0C0C] text-white rounded-lg mt-6 lg:text-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Appointment_Slip;

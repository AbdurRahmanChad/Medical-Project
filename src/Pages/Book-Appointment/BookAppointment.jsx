import React from "react";
import Home_Slip_Rate from "../Home/Home_Slip_Rate";
import Form_submit from "./Form_submit";

const BookAppointment = () => {
  return (
    <section className="bg-white">
      {/*===============Contact Section Start ===============*/}
      <div className="container">
        <div className="lg:mx-64">
          <form className="w-full">
            {/*============ City =========================== */}
            <div className="mt-6">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                City (যে শহরে মেডিকেল দিবে) *
              </label>
              <select
                name="select_course"
                id="select_course"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              >
                <option value="0">Please Select An Option</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Comilla</option>
                <option value="4">Cox's Bazar</option>
                <option value="5">Barisal</option>
                <option value="6">Rajshahi</option>
                <option value="7">Sylhet</option>
              </select>
            </div>

            {/*=========== Travelling Countr =============== */}
            <div className="mt-6">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                Travelling Country (যে দেশে গমন করবে) *
              </label>
              <select
                name="select_course"
                id="select_course"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              >
                <option value="0">Please Select An Option</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Comilla</option>
                <option value="4">Cox's Bazar</option>
                <option value="5">Barisal</option>
                <option value="6">Rajshahi</option>
                <option value="7">Sylhet</option>
              </select>
            </div>

            {/*=============== Your Frist Name ==============*/}
            <div className="mt-6 w-full">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                Your Frist Name
              </label>
              <input
                type="text"
                name="name"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              ></input>
            </div>
            {/*=============== Your Last Name ===============*/}
            <div className="mt-6 w-full">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                Your Last Name
              </label>
              <input
                type="text"
                name="name"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              ></input>
            </div>
            {/*=========== Marital Status ===================*/}
            <div className="mt-6">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                Marital Status * *
              </label>
              <select
                name="select_course"
                id="select_course"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              >
                <option value="0">Please Select An Option</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Comilla</option>
                <option value="4">Cox's Bazar</option>
                <option value="5">Barisal</option>
                <option value="6">Rajshahi</option>
                <option value="7">Sylhet</option>
              </select>
            </div>
            {/*=========== Visa Type =======================*/}
            <div className="mt-6">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                Visa Type * *
              </label>
              <select
                name="select_course"
                id="select_course"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              >
                <option value="0">Please Select An Option</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Comilla</option>
                <option value="4">Cox's Bazar</option>
                <option value="5">Barisal</option>
                <option value="6">Rajshahi</option>
                <option value="7">Sylhet</option>
              </select>
            </div>
            {/*=========== Profession ======================*/}
            <div className="mt-6">
              <label htmlFor="" className="text-sm font-bold text-[#777788]">
                Profession * *
              </label>
              <select
                name="select_course"
                id="select_course"
                className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
                required
              >
                <option value="0">Please Select An Option</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Comilla</option>
                <option value="4">Cox's Bazar</option>
                <option value="5">Barisal</option>
                <option value="6">Rajshahi</option>
                <option value="7">Sylhet</option>
              </select>
            </div>
            {/*================send Message=================== */}
            <div className="mt-6">
              <h1 className="mb-1 font-bold text-[#777788]">
                Upload Passport *
              </h1>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="p-2 rounded-sm bg-emerald-400 hover:bg-[#159C85] text-white"
                >
                  Choose file
                </button>
                <p className="pt-1">No file chosen</p>
              </div>
            </div>
            {/*=============== Form Two ======================*/}
            <div>
              <Form_submit />
            </div>
          </form>
          {/*================ Home Slip rate =================*/}
          <div>
            <Home_Slip_Rate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;

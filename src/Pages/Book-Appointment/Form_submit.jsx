import React from "react";

const Form_submit = () => {
  return (
    <div>
      <div className="mt-6 w-full">
        <label htmlFor="" className="text-sm font-bold text-[#777788]">
          WhatsApp Number (ইস্যুকৃত স্লিপ এই নাম্বারে সেন্ড করা হবে) *
        </label>
        <input
          type="text"
          placeholder="+88"
          name="name"
          className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
          required
        ></input>
      </div>
      {/*================================================*/}
      <div className="mt-6">
        <p className="font-bold text-[#777788]">Note</p>
        <h1 className="text-black font-bold">
          Please Sent 1200 Taka at Bkash or Nagod 01841484885
        </h1>
      </div>
      {/*=============== Transection Id =================*/}
      <div className="mt-6 w-full">
        <label htmlFor="" className="text-sm font-bold text-[#777788]">
          Transection Id *
        </label>
        <input
          type="text"
          placeholder="Transection Id Or Bkash Number"
          name="name"
          className="block border border-black p-2 w-full bg-[#E6E6E6] hover:border-blue-800"
          required
        ></input>
        <p className="pt-1 text-[#777788]">
          Please Sent 1250 Taka at Bkash or Nagod 01841484885
        </p>
      </div>
      {/*=============== Contact Section end =============*/}
      <button
        type="submit"
        className="px-6 py-2 rounded-[5px] bg-[#008FCA] text-white my-6"
      >
        Submit
      </button>
    </div>
  );
};

export default Form_submit;

import React from "react";

const Gamca_Choice = () => {
  const medicalCenters = [
    {
      name: "Al-Madina",
      amountone: "3500",
      centerone: "Gulf",
      amounttwo: "5000",
      centertwo: "Moon",
      amountthere: "9500",
    },
    {
      name: "Confidence",
      amountone: "3500",
      centerone: "Gulf",
      amounttwo: "5000",
      centertwo: "Moon",
      amountthere: "9500",
    },
    {
      name: "Bashundhara",
      amountone: "3500",
      centerone: "Gulf",
      amounttwo: "5000",
      centertwo: "Moon",
      amountthere: "9500",
    },
    {
      name: "Al-Riyadh",
      amountone: "3500",
      centerone: "Gulf",
      amounttwo: "5000",
      centertwo: "Moon",
      amountthere: "9500",
    },
    {
      name: "Al-Nahda",
      amountone: "3500",
      centerone: "Gulf",
      amounttwo: "5000",
      centertwo: "Moon",
      amountthere: "9500",
    },
    {
      name: "Al-Madina",
      amountone: "3500",
      centerone: "Gulf",
      amounttwo: "5000",
      centertwo: "Moon",
      amountthere: "9500",
    },
  ];
  return (
    <div className="container mx-auto#0C751B">
      {/*=================================================*/}
      <div className="flex flex-col lg:flex-row justify-center items-center py-10">
        <button className="px-6 py-2 bg-[#0C751B] rounded-md text-white">
          Gamca Choice Slip Rate
        </button>
      </div>
      <div className="overflow-x-auto mx-32">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-cyan-100">
              <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                Center Name
              </th>
              <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                Purchase Rate
              </th>
              <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                Center Name
              </th>
              <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                Purchase Rate
              </th>
              <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                Center Name
              </th>
              <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                Purchase Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {medicalCenters.map((center, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="border border-gray-300 px-4 py-2">
                  {center.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {center.amountone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {center.centerone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {center.amounttwo}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {center.centertwo}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {center.amountthere}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="py-10">Showing 1 to 59 of 59 entries</p>
      </div>
    </div>
  );
};

export default Gamca_Choice;

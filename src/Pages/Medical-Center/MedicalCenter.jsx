import React from "react";
import { Link } from "react-router-dom";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import DataTable from "react-data-table-component";
const MedicalCenter = () => {
  const medicalCenters = [
    {
      name: "ADVANCE HEALTH CARE",
      address: "K-40/2/A, Jogonnathpur, Progoti Soroni, Vatara",
      area: "Norda",
      phone: "+8801958323200",
      mapLink: "ADVANCE HEALTH CARE",
    },
    {
      name: "Al Arouba Medical Services P.Ltd",
      address:
        "Near South DC Traffic HQ, Opposite Rajjak Tower, 28 Purana Poltan",
      area: "Purana Poltan",
      phone: "+8802226638443",
      mapLink: "Al Arouba Medical",
    },
    {
      name: "Al Hayatt Medical Centre",
      address: "304, Tejgaon Commercial Area, Bhuiyan Shikdar Tower",
      area: "Tejgaon",
      phone: "+8801733777799",
      mapLink: "Al Hayatt Medical",
    },
    {
      name: "Al Jami Diagnostic Centre",
      address: "87-Purana Paltan Lane, Paltan Tower, 3rd Floor, Dhaka",
      area: "Purana Paltan",
      phone: "+8801817696418",
      mapLink: "Al Jami Diagnostic Centre",
    },
    {
      name: "Al Mashoor Diagnostic Services",
      address:
        "Kha-194, Idrish Point (2nd floor), Progoti Saroni, Middle Badda",
      area: "Middle Badda",
      phone: "+8801894965871",
      mapLink: "Al Mashoor Diagnostic",
    },
    {
      name: "Al Mubasher Medical Diagnostic Services",
      address:
        "Padma Life Tower, 115 Kazi Nazrul Islam Avenue (1st Floor), Bangla Motor",
      area: "Bangla Motor",
      phone: "+8802222227583",
      mapLink: "Al Mubasher Medical",
    },
  ];
  return (
    <div className="container mx-auto">
      <div class="">
        <h2 className="ml-20 text-4xl font-semibold py-10">
          GAMCA Medical Center Address
        </h2>
        <div className="pb-1 text-end">
          <label htmlFor="" className="mr-3">
            search
          </label>
          <input
            type="text"
            className="bg-white border-2 border-black mr-32 p-2 "
          />
        </div>
        <div className="overflow-x-auto mx-32 pb-10">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-cyan-100">
                <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                  Medical Center Name
                  <p></p>
                </th>
                <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                  Address
                </th>
                <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                  Area
                </th>
                <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                  Phone
                </th>
                <th className="border border-gray-300 px-4 py-2 hover:bg-[#049CDB]">
                  Google Map Link
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
                    {center.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {center.area}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {center.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600 underline">
                    {center.mapLink}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="py-10">Showing 1 to 49 of 49 entrie</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenter;

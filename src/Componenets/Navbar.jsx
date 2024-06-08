import { useState } from "react";
import Logo from "../assets/logo2.jpg";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toogleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <section className="">
      <nav className="bg-white border-b-2 fixed top-0 left-0 h-40 w-full flex justify-between items-center">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="">
              <NavLink
                to="/"
                onClick={function () {
                  setIsMenu(false);
                }}
                className="flex justify-between items-center gap-4"
              >
                <img src={Logo} alt="Logo" />
                <p className="text-2xl font-semibold">Gamca Slip BD</p>
              </NavLink>
            </div>
            <div className="lg:flex justify-between items-center  hidden ">
              {/*==========Menu Start======================================*/}
              <ul className="flex justify-between items-center gap-6">
                {/*========================================================*/}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#045CB4] text-md"
                        : "text-md text-gray-500 hover:text-[#045CB4]"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                {/*========================================================*/}
                <li
                  id="li"
                  className="flex justify-center items-center gap-2 group py-5"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#045CB4] text-md py-5 group-hover:text-[#045CB4]"
                        : "text-md text-gray-500 py-5 group-hover:text-[#045CB4]"
                    }
                    to="/BookAppointment"
                  >
                    Book Appointment
                  </NavLink>
                  <IoIosArrowDown className="group-hover:text-[#045CB4] group-hover:rotate-180 duration-500" />
                  {/*========================================================*/}
                  <div
                    className="absolute z-[9999] right-[420px] top-28 hidden w-68 bg-white group-hover:block shadow-lg p-4 border-t-2 border-blue-700 cursor-pointer"
                    onClick={(e) => {
                      // e.target.style.display = "none";
                      const li = document.querySelector("#li");
                      li.classList.remove("group");
                      setTimeout(() => {
                        li.classList.add("group");
                      }, 1000);
                    }}
                  >
                    <ul className="">
                      {/*======================================================*/}
                      <li className="mt-4">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#045CB4] text-md"
                              : "text-md text-gray-500 hover:text-[#045CB4]"
                          }
                          to="/Gamca_Choice"
                        >
                          Gamca Choice Slip Rate
                        </NavLink>
                      </li>
                      {/*=====================================================*/}
                      <li className="mt-4">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#045CB4] text-md"
                              : "text-md text-gray-500 hover:text-[#045CB4]"
                          }
                          to="/Appointment_Slip"
                        >
                          Appointment Slip
                        </NavLink>
                      </li>
                      {/*======================================================*/}
                      <li className="mt-4">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#045CB4] text-md"
                              : "text-md text-gray-500 hover:text-[#045CB4]"
                          }
                          to="/Medical_Results"
                        >
                          Medical Examinations Results
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/*========================================================*/}
                <li
                  id="ul"
                  className="flex justify-center items-center gap-2 group cursor-pointer py-5"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#045CB4] text-md py-5 group-hover:text-[#045CB4]"
                        : "text-md text-gray-500 py-5 group-hover:text-[#045CB4]"
                    }
                    to="/VisaProcessing"
                  >
                    Visa Processing
                  </NavLink>
                  <IoIosArrowDown className="group-hover:text-[#045CB4] group-hover:rotate-180 duration-500" />
                  {/*========================================================*/}
                  <div
                    className="absolute z-[9999] right-48 top-28 hidden w-60 bg-white group-hover:block
                 shadow-lg p-4 border-t-2 border-blue-700 cursor-pointer"
                    onClick={(e) => {
                      // e.target.style.display = "none";
                      const ul = document.querySelector("#ul");
                      ul.classList.remove("group");
                      setTimeout(() => {
                        ul.classList.add("group");
                      }, 1000);
                    }}
                  >
                    <ul className="">
                      {/*======================================================*/}
                      <li className="mt-4">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#045CB4] text-md"
                              : "text-md text-gray-500 hover:text-[#045CB4]"
                          }
                          to="/VisaProcessing"
                        >
                          Visa Processing
                        </NavLink>
                      </li>
                      {/*======================================================*/}
                      <div className="group child w-full">
                        <li className="w-full flex items-center gap-3 lg:mt-4">
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "text-[#045CB4] text-md group-hover:text-[#045CB4]"
                                : "text-md text-gray-500 group-hover:text-[#045CB4]"
                            }
                            to="/Saudi_Visa"
                          >
                            Saudia Arabia Visa Processing
                          </NavLink>
                          <IoIosArrowDown className="group-hover:text-[#045CB4] group-hover:rotate-180 duration-500" />
                        </li>
                        {/*==================================================*/}
                        <div
                          className="absolute z-[9999] left-[244px] top-20 hidden w-60 bg-white group-[.child:hover]:block shadow-lg p-4 border-t-2 border-blue-700 cursor-pointer hover:block"
                          onClick={(e) => {
                            // e.target.style.display = "none";
                            const li = document.querySelector("#li");
                            li.classList.remove("group");
                            setTimeout(() => {
                              li.classList.add("group");
                            }, 1000);
                          }}
                        >
                          <ul className="">
                            <li className="mb-4">
                              <NavLink
                                className={({ isActive }) =>
                                  isActive
                                    ? "text-[#045CB4] text-md"
                                    : "text-md text-gray-500 hover:text-[#045CB4]"
                                }
                                to="/Amal_Aydi"
                              >
                                আমেল আইদি ভিসা প্রসেসিং Saudi Amel aydi Visa
                                Processing
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#045CB4] text-md"
                        : "text-md text-gray-500 hover:text-[#045CB4]"
                    }
                    to="/MedicalCenter"
                  >
                    Medical Center Address
                  </NavLink>
                </li>
              </ul>
            </div>
            {/*========== Mobile Button Start===========================*/}
            <button onClick={toogleMenu} className="lg:hidden text-2xl">
              {isMenu ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      <header className="container mt-40">
        {isMenu && (
          <div className="bg-white py-4">
            {/*=====================================*/}
            <ul className="flex flex-col gap-2">
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#045CB4] text-md"
                      : "text-md text-gray-500"
                  }
                  onClick={() => setIsMenu(!isMenu)}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/*=====================================*/}
              <li className="flex items-center gap-3 group cursor-pointer">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#045CB4] text-md group-hover:text-[#045CB4]"
                      : "text-md text-gray-500 group-hover:text-[#045CB4]"
                  }
                  onClick={() => setIsMenu(!isMenu)}
                  to="/BookAppointment"
                >
                  Book Appointment
                </NavLink>
                <IoIosArrowDown className="group-hover:text-[#045CB4] group-hover:rotate-180 duration-500" />
                {/*===================================================*/}
                <div className="absolute z-[9999] w-68 left-56 top-56 lg:top-44 hidden group-hover:block shadow-lg p-4 border-t-2 border-blue-700 cursor-pointer">
                  <ul>
                    {/*===================================================*/}
                    <li className="mt-4">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#045CB4] text-md"
                            : "text-md text-gray-500 hover:text-[#045CB4]"
                        }
                        onClick={() => setIsMenu(!isMenu)}
                        to="/Gamca_Choice"
                      >
                        Gamca Choice Slip Rate
                      </NavLink>
                    </li>
                    {/*===================================================*/}
                    <li className="mt-4">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#045CB4] text-md"
                            : "text-md text-gray-500 hover:text-[#045CB4]"
                        }
                        onClick={() => setIsMenu(!isMenu)}
                        to="/Appointment_Slip"
                      >
                        Appointment Slip
                      </NavLink>
                    </li>
                    {/*===================================================*/}
                    <li className="mt-4">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#045CB4] text-md"
                            : "text-md text-gray-500 hover:text-[#045CB4]"
                        }
                        onClick={() => setIsMenu(!isMenu)}
                        to="/Medical_Results"
                      >
                        Medical Examinations Results
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              {/*===================================================*/}
              <li className=" flex items-center gap-3 group cursor-pointer">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#045CB4] text-md group-hover:text-[#045CB4]"
                      : "text-md text-gray-500 group-hover:text-[#045CB4]"
                  }
                  onClick={() => setIsMenu(!isMenu)}
                  to="/VisaProcessing"
                >
                  Visa Processing
                </NavLink>
                <IoIosArrowDown className="group-hover:text-[#045CB4] group-hover:rotate-180 duration-500" />
                {/*===================================================*/}
                <div className="absolute z-[9999] w-72 lg:w-60 left-56 top-64 lg:top-44 hidden group-hover:block shadow-lg p-4 border-t-2 border-blue-700 cursor-pointer">
                  <ul>
                    <li className="mb-4">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#045CB4] text-md"
                            : "text-md text-gray-500 hover:text-red-500"
                        }
                        onClick={() => setIsMenu(!isMenu)}
                        to="/Saudi_Visa"
                      >
                        Visa Processing
                      </NavLink>
                    </li>
                    {/*===================================================*/}
                    <div className="group child w-full">
                      <li className="w-full flex justify-between items-center gap-3">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#045CB4] text-md"
                              : "text-md text-gray-500 hover:text-red-500"
                          }
                          onClick={() => setIsMenu(!isMenu)}
                          to="/Saudi_Visa"
                        >
                          Saudi Arabia Visa Processing
                        </NavLink>
                        <IoIosArrowDown className="group-hover:text-[#045CB4] group-hover:rotate-180 duration-500" />
                      </li>
                      {/*===================================================*/}
                      <div className="absolute z-[9999] left-[280px]  lg:left-[244px] top-14 hidden w-60 bg-white group-[.child:hover]:block shadow-lg p-4 border-t-2 border-blue-700 cursor-pointer hover:block">
                        <ul className="">
                          <li className="mb-4">
                            <NavLink
                              className={({ isActive }) =>
                                isActive
                                  ? "text-[#045CB4] text-md"
                                  : "text-md text-gray-500 hover:text-red-500"
                              }
                              onClick={() => setIsMenu(!isMenu)}
                              to="/Amal_Aydi"
                            >
                              আমেল আইদি ভিসা প্রসেসিং Saudi Amel aydi Visa
                              Processing
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/*===================================================*/}
                    </div>
                  </ul>
                </div>
              </li>
              {/*===================================================*/}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#045CB4] text-md"
                      : "text-md text-gray-500"
                  }
                  onClick={() => setIsMenu(!isMenu)}
                  to="/MedicalCenter"
                >
                  Medical Center Address
                </NavLink>
              </li>
              {/*===================================================*/}
            </ul>
          </div>
        )}
      </header>
    </section>
  );
};

export default Navbar;

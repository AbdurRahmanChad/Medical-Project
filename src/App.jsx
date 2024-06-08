import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BookAppointment from "./Pages/Book-Appointment/BookAppointment";
import VisaProcessing from "./Pages/Visa-Processing/VisaProcessing";
import MedicalCenter from "./Pages/Medical-Center/MedicalCenter";
import Navbar from "./Componenets/Navbar";
import Footer from "../src/Componenets/Footer";
import Saudi_Visa from "./Pages/Visa-Processing/Saudi_Visa";
import Amal_Aydi from "./Pages/Visa-Processing/Amal_Aydi";
import Appointment_Slip from "./Pages/Book-Appointment/Appointment_Slip";
import Medical_Results from "./Pages/Book-Appointment/Medical_Results";
import Gamca_Choice from "./Pages/Book-Appointment/Gamca_Choice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/BookAppointment" element={<BookAppointment />}></Route>
          <Route path="/VisaProcessing" element={<VisaProcessing />}></Route>
          <Route path="/MedicalCenter" element={<MedicalCenter />}></Route>
          <Route path="/Saudi_Visa" element={<Saudi_Visa />}></Route>
          <Route path="/Amal_Aydi" element={<Amal_Aydi />}></Route>
          <Route
            path="/Appointment_Slip"
            element={<Appointment_Slip />}
          ></Route>
          <Route path="/Medical_Results" element={<Medical_Results />}></Route>
          <Route path="/Gamca_Choice" element={<Gamca_Choice />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

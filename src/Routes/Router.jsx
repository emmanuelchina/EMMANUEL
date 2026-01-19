import { Routes, Route } from "react-router-dom";  
import Projectview from "../Viewmore";
import Navbar from "../Navbar";
import Display from "../Display";
import Ready from "../Ready";
import ContactForm from "../Contact";
import Footer from "../Footer";

function Approuter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/viewmore" element={<Projectview />} />
        
      </Routes>
      <ContactForm />
      <Ready/>
      <Footer />
    </>
  );
}

export default Approuter;

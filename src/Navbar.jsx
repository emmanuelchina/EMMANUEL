import React, { useState, useEffect } from "react";
import { FaUser, FaCode, FaEnvelope, FaTimes } from "react-icons/fa";
import ContactSection2 from "./Contact2";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);


  useEffect(() => {
    document.body.style.overflow = showContact ? "hidden" : "auto";
  }, [showContact]);

  return (
    <>
    
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4">
        <div className="bg-white/80 backdrop-blur-md border-b border-orange-200/50 rounded-b-2xl shadow-sm max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">


            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                E
              </div>
              <span className="font-bold text-xl text-slate-800">
                Emmanuel.js
              </span>
            </div>


            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium">
                <FaUser className="text-blue-600" />
                Profile
              </a>

              <a href="/viewmore" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium">
                <FaCode className="text-blue-600" />
                Projects
              </a>

              <button
                onClick={() => setShowContact(true)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
              >
                <FaEnvelope className="text-blue-600" />
                Contact
              </button>
            </div>

   
            <button
              className="md:hidden w-10 h-10 rounded-xl border border-slate-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>


      {isMenuOpen && (
        <div className="fixed top-[96px] left-0 right-0 z-40 bg-white shadow-lg md:hidden">
          <div className="flex flex-col gap-4 p-6">

            <a
              href="/"
              className="flex items-center gap-3 text-slate-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className="text-blue-600" />
              Profile
            </a>

            <a
              href="/viewmore"
              className="flex items-center gap-3 text-slate-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCode className="text-blue-600" />
              Projects
            </a>

            <button
              onClick={() => {
                setShowContact(true);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 text-slate-700 font-medium text-left"
            >
              <FaEnvelope className="text-blue-600" />
              Contact
            </button>

          </div>
        </div>
      )}

 
      {showContact && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowContact(false)}
        >
          <div
            className="relative w-[90%] md:w-[70%] lg:w-[60%] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
         
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow hover:scale-110 transition"
            >
              <FaTimes />
            </button>

            <ContactSection2 />
          </div>
        </div>
      )}
    </>
  );
}

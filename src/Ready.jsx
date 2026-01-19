import React, { useState, useEffect } from "react";
import ContactSection2 from "./Contact2";
import { FaTimes } from "react-icons/fa";

export default function Ready() {
  const [showContact, setShowContact] = useState(false);

 
  useEffect(() => {
    document.body.style.overflow = showContact ? "hidden" : "auto";
  }, [showContact]);

  return (
    <>
     
      <div className="flex items-center justify-center bg-gray-100 px-4 py-12 pt-0">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ready to start your project?
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed">
            Let’s work together to bring your ideas to life. Get in touch today and let’s discuss
            how we can help you achieve your goals.
          </p>

          <button
            onClick={() => setShowContact(true)}
            className="mx-auto block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
      </div>

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

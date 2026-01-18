import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4">
      {/* Transparent navbar background */}
      <div className="bg-white/80 backdrop-blur-md border-b border-orange-200/50 rounded-b-2xl shadow-sm max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg flex items-center justify-center font-bold text-white text-sm">
              E
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">Emmanuel</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium text-sm px-3 py-2 transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#articles" className="text-slate-600 hover:text-slate-900 font-medium text-sm px-3 py-2 transition-colors duration-200 relative group">
              Articles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900 font-medium text-sm px-3 py-2 transition-colors duration-200 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-200 hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-slate-700 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
            <span className={`block w-6 h-0.5 bg-slate-700 rounded my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-slate-700 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-3 px-2">
              <a href="#about" className="text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors">About</a>
              <a href="#articles" className="text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors">Articles</a>
              <a href="#projects" className="text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors">Projects</a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm mt-2 shadow-lg hover:shadow-xl transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

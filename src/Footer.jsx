import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100  ">
      <div className="w-full px-4 py-12 ">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4 max-w-xl">
            <img
              src="/favicon.ico"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-gray-600 leading-relaxed">
              I’m a Full-Stack Developer who builds modern, scalable, and
              user-focused web applications. I turn ideas into functional
              digital products using clean code, strong architecture, and
              attention to detail.
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-gray-800">
            <a href="/" className="hover:text-red-500 transition">
              Profile
            </a>
            <a href="/viewmore" className="hover:text-red-500 transition">
              Projects
            </a>
              <a href="/" className="hover:text-red-500 transition">
              Contact
            </a>
         
          </nav>
        </div>

        <div className="border-t border-blue-100 my-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex gap-3">
            <SocialIcon href="https://github.com/emmanuelchina/EMMANUEL.git" icon={<FaGithub />} />
            <SocialIcon href="mailto:igweemmanuelchina@gmail.com" icon={<FaEnvelope />} />
            <SocialIcon href="https://www.linkedin.com/in/emmanuel-igwe" icon={<FaLinkedin />} />
            <SocialIcon href="https://wa.me/+2349151265480" icon={<FaWhatsapp />} />
          </div>

          <p className="text-sm text-gray-500">
            @2026 Emmanuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-100 text-gray-600 hover:text-blue-500 hover:border-blue-300 transition"
    >
      {icon}
    </a>
  );
}

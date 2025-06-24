import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          {/* Left: Text */}
          <a
            href="/"
            className="text-neutral-400 font-regular text-sm hover:text-white transition-colors"
          >
            Made with React, GSAP and Spline
          </a>

          {/* Right: Social Icons */}
          <div className="flex gap-4 text-neutral-400 text-xl">
            <a
              href="https://github.com/SimplyViraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/saiviraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/simply__viraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

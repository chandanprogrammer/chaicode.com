import React, { useState } from "react";
import { AlignRight } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Cohorts", href: "#", showLive: true },
    { label: "Udemy", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Reviews", href: "#" },
  ];

  return (
    <div>
      <nav className="h-[60px] relative w-full px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700/10 to-violet-500/20 transition-all">
        {/* Logo */}
        <div className="flex gap-1 items-center">
          <img
            className="h-8 cursor-pointer"
            src="./public/images/chaicode-white.svg"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="text-white md:flex hidden items-center gap-10">
          {navLinks.map(({ label, href, showLive }) => (
            <li key={label} className="flex gap-2 items-center justify-center">
              <a className="hover:text-white/70 transition" href={href}>
                {label}
              </a>
              {showLive && (
                <div className="flex items-center space-x-2 pt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <button
          type="button"
          className="bg-orange-500 text-white md:inline hidden text-lg hover:opacity-90 active:scale-95 transition-all px-6 py-1 rounded cursor-pointer"
        >
          Login
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <AlignRight size={26} color="#ffffff" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-white text-lg">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="bg-white text-gray-700 mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

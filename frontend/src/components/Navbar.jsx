import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  AlignJustify,
  X,
  Code,
  BookOpenCheck,
  Star,
  PanelBottomClose 
} from "lucide-react";
import LoginButton from "./button/LoginButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    {
      label: "Cohorts",
      href: "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
      ariaLabel: "cohorts",
      showLiveBlink: true,
      icon: <Code size={16} color="white" strokeWidth={2} />,
    },
    {
      label: "Udemy",
      href: "https://docs.chaicode.com",
      ariaLabel: "udemy course",
      icon: <BookOpenCheck size={16} color="white" strokeWidth={2} />,
    },
    {
      label: "Docs",
      href: "https://docs.chaicode.com",
      ariaLabel: "docs",
      icon: <PanelBottomClose  size={16} color="white" strokeWidth={2} />,
    },
    {
      label: "Reviews",
      href: "/",
      ariaLabel: "reviews",
      icon: <Star size={16} color="white" strokeWidth={2} />,
    },
  ];

  return (
    <div>
      <nav className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex items-center justify-between h-[80px] relative w-full z-30 tracking-wide">
        {/* ---------- Chaicode Logo ---------- */}
        <div className="flex items-center gap-1 z-40">
          <img
            aria-label="chaicode logo"
            className="h-7 md:h-8 cursor-pointer"
            src="./public/images/chaicode-white.svg"
            alt="ChaiCode Logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="text-white lg:flex hidden items-center gap-10">
          {navLinks.map(({ label, href, ariaLabel, showLiveBlink, icon }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2 hover:scale-108 transition duration-500"
            >
              <Link
                to={href}
                target="_blank"
                aria-label={ariaLabel}
                className="text-lg hover:text-white/70 transition flex items-center gap-2"
              >
                {icon} {label}
              </Link>
              {showLiveBlink && (
                <div className="pt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="h-full w-full rounded-full bg-red-600"></span>
                    <span className="h-full w-full rounded-full bg-red-500 absolute animate-ping "></span>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ---------- Login Desktop Button ---------- */}
        <div className="hidden lg:flex">
          <LoginButton
            text="Login"
            link="https://courses.chaicode.com/learn/account/signin"
            target="_blank"
          />
        </div>

        {/* ----------  Mobile Menu Toggle Button ---------- */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block lg:hidden active:scale-90 transition cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <AlignJustify size={32} color="#ffffff" />
        </button>

        {isMobileMenuOpen && (
          <div
            className={`mobile-menu top-0 left-0 fixed  h-[100vh] w-[85vw] bg-[#192336] p-7 lg:hidden transform transition-transform duration-300 ease-in-out z-100`}
          >
            <div className="flex items-center justify-between gap-1 pt-1 pl-4 mb-12">
              <img
                aria-label="chaicode logo"
                className="h-7 cursor-pointer"
                src="./public/images/chaicode-white.svg"
                alt="ChaiCode Logo"
                onClick={() => {
                  navigate("/");
                }}
              />
              <X
                size={32}
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="cursor-pointer"
              />
            </div>
            <ul className="flex flex-col space-y-7 text-white">
              {navLinks.map(({ label, href, ariaLabel, showLiveBlink,icon }) => (
                <li key={label} className="flex items-center gap-2 hover:scale-108 transition duration-500">
                  <Link
                    to={href}
                    target="_blank"
                    aria-label={ariaLabel}
                    className="text-lg pl-8 flex items-center gap-2"
                  >
                   {icon} {label}
                  </Link>
                  {showLiveBlink && (
                    <div className="pt-1">
                      <span className="relative flex h-2 w-2">
                        <span className="h-full w-full rounded-full bg-red-600"></span>
                        <span className="h-full w-full rounded-full bg-red-500 absolute animate-ping "></span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {/* ---------- Login Mobile Button ---------- */}
            <div className="pl-8 mt-10">
              <LoginButton
                text="Login"
                link="https://courses.chaicode.com/learn/account/signin"
                target="_blank"
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

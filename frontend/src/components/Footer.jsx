import React from "react";
import { Youtube, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer class="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 w-full mt-12 border-t border-gray-500/60 ">
      <div class="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/40">
        <div class="max-w-100 lg:mr-40">
          <Link to="/">
            <img
              class="h-8"
              src="./images/chaicode-white.svg"
              alt="dummyLogoDark"
            />
          </Link>
          <p class="mt-6 text-[14px] tracking-wider text-cyan-300/60">
            Content is every where, we provide a learning experience that is
            unmatched. Bounties, peer learning, peer code reviews, Virtual
            hostel, Alumni Network, Doubt sessions, Group projects and so many
            other activities to keep you on track.
          </p>
          <div className="w-full flex flex-row gap-4 mt-6 mb-2 ml-10">
            <div className="hover:scale-150 transition durantion-500">
              <Link to="https://www.youtube.com/@chaiaurcode" target="_blank">
                <Youtube size={18} color="red" />
              </Link>
            </div>
            <div className="hover:scale-150 transition durantion-500">
              <Link
                to="https://www.instagram.com/hiteshchoudharyofficial"
                target="_blank"
              >
                <Instagram size={18} color="#F745A0" />
              </Link>
            </div>
            <div className="hover:scale-150 transition durantion-500">
              <Link to="https://x.com/hiteshdotcom" target="_blank">
                <Twitter size={18} color="#87DEF7" />
              </Link>
            </div>
            <div className="hover:scale-150 transition durantion-500">
              <Link
                to="https://www.linkedin.com/in/hiteshchoudhary"
                target="_blank"
              >
                <Linkedin size={18} color="#1469C7" />
              </Link>
            </div>
            <div className="hover:scale-150 transition durantion-500">
              <Link to="https://github.com/hiteshchoudhary" target="_blank">
                <Github size={18} color="#ffffff" />
              </Link>
            </div>
          </div>
        </div>

        <div class="w-1/3 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2 class="font-semibold text-gray-200/80 mb-5">RESOURCES</h2>
            <ul class="text-[16px] text-orange-300/70 space-y-3 list-none">
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://docs.chaicode.com">Docs</Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://www.chaicode.com/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://www.chaicode.com/terms-of-services">
                  Terms of Service
                </Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://www.chaicode.com/pricing-policy">
                  Pricing Policy
                </Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://www.chaicode.com/refund-policy">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-semibold text-gray-200/80 mb-5">PRODUCTS</h2>
            <ul class="text-[16px] text-orange-300/70 space-y-3 list-none">
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://courses.chaicode.com/learn">Cources</Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
                  Cohort
                </Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://courses.chaicode.com/learn/batch/about?bundleId=226894">
                  Coding Hero
                </Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://freeapi.app/">
                  FreeAPI
                </Link>
              </li>
              <li className="hover:text-orange-400/70 transition duration-500 hover:ml-2">
                <Link to="https://masterji.co/login">
                  Masterji
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="py-6 text-center text-xs md:text-base tracking-wider text-gray-300/70 transition">
        Copyright © 2025{" "}
        <Link to="/">
          <span className="text-blue-400/70 hover:text-gray-200">ChaiCode</span>
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react'
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
<footer  data-aos="zoom-in-up" data-aos-duration="1500" className="bg-white text-[#fefdd9] text-center py-8 relative border-t-2 border-t-glow border-gray-400 mt-7px">
      <div className="absolute top-0 left-0 right-0 h-1 bg-glow animate-pulse"></div>

      <div className="mb-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="mx-auto w-24" />
      </div>

      <div className="flex justify-center space-x-6 mb-4">
        {/* Social Media Icons */}
        <a
          href="https://web.facebook.com/rokeyasultana2020"
          target="_blank"
          rel="noreferrer"
          className="text-[#fefdd9] hover:text-gray-400"
        >
          <FaFacebookF size={24} color="#9BA3AE" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-400"
        >
          <FaXTwitter size={24} color="#9BA3AE" />
        </a>
        <a
          href="https://www.linkedin.com/in/rokeya-sultanasbd/"
          target="_blank"
          rel="noreferrer"
          className="text-[#fefdd9] hover:text-gray-400"
        >
          <FaLinkedinIn size={24} color="#9BA3AE" />
        </a>
      </div>

      <div className="text-[#65645A] flex justify-center items-center space-x-2">
        {/* Copyright */}
        <FaRegCopyright color="#65645A" />
        <span>
          2024. All rights reserved by{" "}
          <span className="text-[#9BA3AE]">Rokeya Sultana</span>
        </span>
      </div>
    </footer>
  )
}

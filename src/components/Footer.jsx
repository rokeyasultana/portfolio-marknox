import React from 'react'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
<footer className="bg-white text-[#fefdd9] text-center py-8 relative border-t-10 border-t-glow border-[#B1B493] mt-7px">
      <div className="absolute top-0 left-0 right-0 h-1 bg-glow animate-pulse"></div>

      <div className="mb-4">
        {/* Logo */}
        <img src="" alt="Logo" className="mx-auto w-24" />
      </div>

      <div className="flex justify-center space-x-6 mb-4">
        {/* Social Media Icons */}
        <a
          href="https://web.facebook.com/rokeyasultana2020"
          target="_blank"
          rel="noreferrer"
          className="text-[#fefdd9] hover:text-gray-400"
        >
          <FaFacebookF size={24} color="#65645A" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-[#fefdd9] hover:text-gray-400"
        >
          <FaXTwitter size={24} color="#65645A" />
        </a>
        <a
          href="https://www.linkedin.com/in/rokeya-sultanasbd/"
          target="_blank"
          rel="noreferrer"
          className="text-[#fefdd9] hover:text-gray-400"
        >
          <FaLinkedinIn size={24} color="#65645A" />
        </a>
      </div>

      <div className="text-[#65645A] flex justify-center items-center space-x-2">
        {/* Copyright */}
        <FaRegCopyright color="#65645A" />
        <span>
          2024. All rights reserved by{" "}
          <span className="text-[#D9D8C1]"> Rokeya Sultana</span>
        </span>
      </div>
    </footer>
  )
}

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kptk7p9",
        "template_tazkdcw",
        e.target,
        "LLV7xYubBmuxyE1nV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div  id='contact' className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Left Side - Contact Details */}
        <div data-aos="flip-left"  data-aos-duration="1500" className=" px-5">
          <h2 className="text-4xl text-[#B1B493] font-semibold mb-4">It's time to talk about your project</h2>
          <p className="text-[15px]  mb-6 text-[#77786B]">
            Let’s embark on a creative journey together.
          </p>

          <div className="flex items-center mb-4">
            <div className="p-2  rounded">
              <FaPhoneAlt className="text-[#B1B493]" />
            </div>
            <span className="text-[15px]  ml-3 text-[#77786B]">+8801318884793</span>
          </div>

          <div className="flex items-center mb-4">
            <div className="p-2 border-gray-500 rounded">
              <FaEnvelope className="text-[#B1B493]" />
            </div>
            <span className="text-[15px] ml-3 text-[#77786B]">rokeyasbd@gmail.com</span>
          </div>

          <div className="flex items-center">
            <div className="p-2  rounded">
              <FaMapMarkerAlt className="text-[#B1B493]" />
            </div>
            <span className="text-[15px] ml-3 text-[#77786B]">Gazipur, Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div data-aos="flip-right"  data-aos-duration="1500" className=" p-8 rounded-lg shadow-lg">
          <form onSubmit={sendEmail} className="w-full">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#B1B493] text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full  text-[#B1B493] border border-gray-600 rounded-lg p-3 mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#B1B493] text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full  text-[#B1B493] border border-gray-600 rounded-lg p-3 mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#D9D8C1] text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full  text-[#3A3B36] border border-gray-600 rounded-lg p-3 mt-1 h-32"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#F5F3D9] text-black font-semibold py-3 px-8 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
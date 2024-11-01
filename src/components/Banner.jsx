import React from "react";
import Typical from "react-typical";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function Banner() {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500">
      <h2 className="text-white text-5xl text-center mt-32">
        <span className="text-gray-400">👋 HI There</span>
        <span className="text-gray-400">!</span>
      </h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ml-[50px] mr-[50px]">
        <div>
          <img
            className="h-[450px] w-[550px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhq9BgVIlwvu2xo1VDzgCOoSbAOL61tcLog&s"
            alt=""
          />
        </div>

        <div className="grid  place-content-center">
          <h3 className="typical text-black text-center text-3xl">
            <span className="text-3xl text-gray-400"> I'm Rokeya Sultana</span>
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                "Front-End Developer",
                1000,
                "React Js Developer",
                1000,
                "Web Developer",
                1000,
              ]}
            />
          </h3>

          <p className="text-left text-black  text-xl ml-20 mr-20">
            I'm Developer based in Dhaka, Bangladesh. I strives to build
            immersive and beautiful web applications through carefully crafted
            code and user-centric design.
          </p>
          <div className="flex justify-center mx-auto gap-20 mt-7">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rokeya-sultanasbd/"
            >
              <FaLinkedinIn size="20px" color="gray" />
            </a>
            <a target="_blank" href="https://github.com/rokeyasultana">
              <FaGithub size="20px" color="gray" />
            </a>
            <a
              target="_blank"
              href="https://web.facebook.com/rokeyasultana2020"
            >
              <FaFacebookF size="20px" color="gray" />
            </a>
          </div>
          <div>
            <div className="text-center text-black mt-10 p-3 font-bold">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/12g6yIWdYu-tZqj6loNht6lHowE-07gAf/view?usp=share_link"
                class="btn2 mt-12 px-10 py-5 relative rounded-full border border-gray-300 uppercase font-semibold tracking-wider leading-none overflow-hidden  hover:bg-gray-500  hover:text-white"
                type="button"
              >
                <span class="absolute inset-0 bg-gray-400 flex justify-center items-center bg-gray-400">
                  Download Resume
                </span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex gap-3 ">
        <div className="text-white mt-16"></div>
      </div>
    </div>
  );
}

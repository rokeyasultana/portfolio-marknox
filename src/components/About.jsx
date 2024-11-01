import React from "react";

export default function About() {
  return (
    <div>

      <div id='about' className= "  min-h-screen mt-[-80px] flex flex-col items-center justify-center p-8 mb-[80px]">
      
      <h2  data-aos="zoom-in-up" data-aos-duration="1500" className="text-[30px] text-gray-500 mb-4 text-canter">
        About Me
      </h2>
      {/* Experience & Education Cards in the same row */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Experience Card */}
        <div data-aos="fade-right"  data-aos-duration="1500" className="bg-gray-400 w-full max-w-md p-6 rounded-lg shadow-lg text-left">
  <h2 className="text-2xl font-bold mb-4 text-white flex gap-1 justify-center items-center">
    Experience
  </h2>

  {/* First experience */}
  <div className="mt-3">
    <div className="flex items-start gap-3">
      <div className="bg-[#D9D8C1] w-10 h-10 flex items-center justify-center rounded-md">
        <img
          className="w-5 h-5"
          src="https://techligator.com/logo.png"
          alt="Techligator Logo"
        />
      </div>
      <div>
        <p className="text-[#D9D8C1]">
          Web Developer Intern
          <span className="text-white"> @Techligator</span>
        </p>
        <p className="text-white">Jul 2023 - Jul 2023</p>
      </div>
    </div>
  </div>

  {/* Second experience */}
  <div className="mt-3">
    <div className="flex items-start gap-3">
      <div className="bg-gray-400 w-10 h-10 flex items-center justify-center rounded-md">
        <img
          className="w-15 h-6"
          src="https://www.digitalfixbd.com/wp-content/uploads/2024/08/180.60-01.png"
          alt="Digitalfix Logo"
        />
      </div>
      <div>
        <p className="text-[#D9D8C1]">
          Mern Stack Developer
          <span className="text-white"> @Digitalfix</span>
        </p>
        <p className="text-white">Aug 2023 - Oct 2023</p>
      </div>
    </div>
  </div>
</div>



        {/* Education Card */}
        <div  data-aos="fade-left"  data-aos-duration="1500" className="bg-gray-400 text-white w-full max-w-md p-6 rounded-lg shadow-lg text-left">
          <h2 className="text-2xl text-[#D9D8C1]  font-bold mb-4 flex gap-1 justify-center items-center">
            Education{" "}
            <img
              className="w-5 h-5"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f393/512.webp"
              alt="Graduation Cap Emoji"
            />
          </h2>
          <div>
            <p className="text-[#D9D8C1]">
              SSC{" "}
              <span className="text-white">
                @Bhawal Baria Union High School
              </span>
            </p>
            <p className="text-white">2016</p>
          </div>
          <div className="mt-3">
            <p className="text-[#D9D8C1]">
              HSC{" "}
              <span className="text-white">
                @Gazipur Govt. Mohila College
              </span>
            </p>
            <p className="text-white">2018</p>
          </div>
          <div className="mt-3">
            <p className="text-[#D9D8C1]">
              Bachelor of Arts in English{" "}
              <span className="text-white">@National University</span>
            </p>
            <p className="text-white">2019-On going</p>
          </div>
        </div>
      </div>

      {/* Skills Card */}
      <div data-aos="fade-up-right"  data-aos-duration="1500" className="bg-gray-400 text-white w-[700px] max-w-md p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 flex gap-1 justify-center items-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div data-aos="zoom-in-up" data-aos-duration="1500"  className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
              alt="html"
            />
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="css"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
              alt="JavaScript"
            />
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/180px-Bootstrap_logo.svg.png"
              alt="Bootstap"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
              alt="Tailwind css"
            />
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png"
              alt="React"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              alt="Nextjs"
            />
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/180px-Node.js_logo.svg.png"
              alt="Node"
            />
          </div>

          <div data-aos="zoom-in-up" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/180px-Adobe_Photoshop_CC_icon.svg.png "
              alt="Adobe photoshop"
            />
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/firebase/firebase-logo-256.webp"
              alt="Firebase"
            />
          </div>

          <div data-aos="zoom-in-up" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png"
              alt="Github"
            />
          </div>

          <div data-aos="zoom-in-down" data-aos-duration="1500" className="bg-[#D9D8C1] p-3 rounded">
            <img
              className="w-12 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/96px-Figma-logo.svg.png "
              alt="Figma"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

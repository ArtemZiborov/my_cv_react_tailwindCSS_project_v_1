import React from "react";
import { FaFacebook, FaLinkedinIn} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { BsTwitterX } from "react-icons/bs";

function FunctionalComp() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover 
                object-center scale-x-[-1]"
        src="/images/Timo_1.jpg"
        alt="/"
      />
      <div
        className="w-full h-screen 
                absolute top-0 left-0 bg-white/50"
      >
        <div
          className="max-w-[700px] m-auto h-full w-full flex 
                    flex-col justify-center lg:items-start items-center"
        >
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I&apos;m Artem{" "}
          </h1>
          <h2 className="flex sm:text-4xl text-2xl pt-4 text-gray-800">
            I&apos;m a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                2000,
                "Designer",
                2000,
                "Freelancer",
                2000,
                "Learner",
                2000,
                "Creator",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://x.com/Ziborovs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.facebook.com/artjom.ziborov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/artjoms-z-bb54a360"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunctionalComp;

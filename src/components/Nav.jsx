import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu modal

  return (
    <nav className="flex justify-between px-6 md:px-10 text-xl relative">
      {/* Left Section */}
      <div className="px-[2vw] md:px-[2vw] lg:px-[4vw]">
        <motion.div
          className="bg-[#181818] w-[40vw] md:w-[29vw] lg:w-[15.5vw] h-[19vh] md:h-[16vh] lg:h-[25vh] rounded-b-3xl p-4 relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }}
        >
          <h1 className="bg-[#181818] font-black text-lg md:text-xl lg:text-2xl mt-2 md:mt-3">
            2025 Jan. - Feb.
          </h1>
          <p className="bg-[#181818] font-extrabold text-sm md:text-base lg:text-xl mt-2 md:mt-3">
            Offline
          </p>

          <motion.button
            className="flex items-center justify-center gap-2 lg:gap-3 md:gap-4 bg-white lg:w-[13vw] md:w-[25vw] h-[5vh] md:h-[5vh] rounded-lg mt-2 md:mt-2 lg:mt-5 absolute z-10"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3770FF",
            }}
            transition={{ duration: 0.3 }}
          >
            {!isHovered ? (
              <motion.img
                src="devfolio.png"
                alt="devfolio"
                className="ml-2 w-[2.5vh] lg:w-[3vh] md:w-[2.5vh] "
              />
            ) : (
              <svg
                className="ml-2 w-[2.5vh] lg:w-[3vh] md:w-[2.5vh]"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 115.46 123.46"
              >
                <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
                <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
              </svg>
            )}
            <motion.p
              className="text-xs md:text-sm lg:text-sm text-black font-bold mr-4"
              animate={{
                color: isHovered ? "white" : "black",
              }}
              transition={{ duration: 0.3 }}
            >
              Apply with Devfolio
            </motion.p>
          </motion.button>
        </motion.div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex gap-10 md:gap-5 lg:gap-14 font-semibold py-8 md:mr-4 lg:mr-8 absolute z-10 right-4">
        {["Timeline", "Mentors", "Our Team", "Sponsors", "Contact Us"].map(
          (item, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative group text-white md:text-base lg:text-xl"
              whileHover={{ color: "#f0f0f0" }}
            >
              {item}
              <motion.span className="absolute top-7 left-0 w-full h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
            </motion.a>
          )
        )}
      </div>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#181818] bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold">
          {["Timeline", "Mentors", "Our Team", "Sponsors", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-red-500 text-center"
                onClick={() => setIsOpen(false)} // Close modal on link click
              >
                {item}
              </a>
            )
          )}
          <button
            className="text-white absolute top-6 right-6 text-3xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;

import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="flex justify-between px-10 text-xl">
      <div className="px-8">
        <motion.div
          className="bg-[#181818] w-[15vw] h-[25vh] rounded-b-3xl p-4 relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }}
        >
          <h1 className="bg-[#181818] font-black text-2xl mt-3">
            2025 Jan. - Feb.
          </h1>
          <p className="bg-[#181818] font-extrabold mt-3">Offline</p>

          <motion.button
            className="flex items-center justify-between bg-white w-[13vw] h-[5vh] rounded-lg mt-5 absolute z-10"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3770FF",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Show either the image or the SVG based on hover state */}
            {!isHovered ? (
              <motion.img
                src="devfolio.png"
                alt="devfolio"
                className="ml-2 w-[3vh] h-[3vh]"
              />
            ) : (
              <svg
                className="w-[3vh] h-[3vh] ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 115.46 123.46"
              >
                <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
                <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
              </svg>
            )}

            {/* Text stays the same but aligns to center smoothly on hover */}
            <motion.p
              className="text-sm text-black font-bold mr-4"
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
      <div className="flex gap-14 font-semibold py-8 mr-8 absolute right-8 z-10">
        {["Timeline", "Mentors", "Our Team", "Sponsors", "Contact Us"].map(
          (item, index) => (
            <motion.a
              key={index}
              href=""
              className="relative group" // Add group class to manage hover interactions
              whileHover={{ color: "#f0f0f0" }} // Change text color on hover
            >
              {item}
              {/* Underline Animation */}
              <motion.span
                className="absolute top-7 left-0 w-full h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                // group-hover scales the underline when the parent .group is hovered
              />
            </motion.a>
          )
        )}
      </div>
    </nav>
  );
};

export default Nav;

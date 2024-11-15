import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero flex items-center justify-center overflow-x-hidden z-10">
        <motion.img
          src="left.png"
          alt=""
          className="absolute lg:top-[58%] md:top-[40%] lg:h-[115vh] md:h-[50vh] object-contain lg:-left-52 md:-left-36 hidden md:block lg:block"
          initial={{ x: "-100%", opacity: 0 }} // Start from off-screen to the left
          animate={{ x: 0, opacity: 1, rotate: -6 }} // Move to the final position
          transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }}
        />
        <motion.img
          src="right.png"
          alt=""
          className="absolute lg:h-[88vh] md:h-[38vh] md:-right-36 lg:-right-56 md:top-[2%] lg:-top-[5%] hidden md:block lg:block"
          initial={{ x: "100%", opacity: 0 }} // Start from off-screen to the right
          animate={{ x: 0, opacity: 1, rotate: 12 }} // Move to the final position
          transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }}
        />
        <motion.img
          src="HackShastra.png"
          alt="HackShastra Logo"
          className="absolute -z-1 top-[25%] lg:top-[10%] md:top-[15%] w-[120vh] lg:w-[80vw] opacity-15 object-cover"
          initial={{ opacity: 0, rotate: 0 }} // Start invisible and not rotated
          animate={{ opacity: 0.2, rotate: 360 }} // End with partial opacity and rotated 360 degrees
          transition={{ duration: 3, ease: "easeIn" }}
        />

        <div className="flex items-center justify-center flex-col mt-24 lg:mt-24 md:mt-36 z-10 ">
          <h1 className="text-[14.5vw] md:text-[7xl] lg:text-[17vh] font-extrabold text-white text-center">
            HackShastra
          </h1>
          <h2 className="text-[3.2vw] md:text-[3.2vw] lg:text-[1.88vw] tracking-wide font-bold text-white text-center -mt-3 md:-mt-6 lg:-mt-8">
            INNOVATION WITH ANCIENT MYTHOLOGICAL SPIRIT
          </h2>
        </div>
      </div>
      <motion.div
        className="absolute right-0 bottom-[10%] md:bottom-[20%] lg:bottom-24 bg-[#181818] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-l-3xl max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]"
        initial={{ x: "100%", opacity: 0 }} // Initially off-screen (to the right)
        animate={{ x: 0, opacity: 1 }} // Slide in to the final position and become fully visible
        transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }} // Smooth transition
      >
        <p className="lg:text-2xl md:text-xl text-sm font-semibold">
          Join, create, and{" "}
          <span className="text-[#E50914] font-bold">Conquer</span> real-world{" "}
          <br /> <span className="text-[#E50914] font-bold">Challenges</span>{" "}
          with code and creativity.
        </p>
      </motion.div>
    </>
  );
};

export default Hero;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero flex items-center justify-center overflow-x-hidden z-10">
        <motion.img
          src="left.png"
          alt=""
          className="absolute top-[50%] h-[115vh] object-contain -left-44 "
          initial={{ x: "-100%", opacity: 0 }} // Start from off-screen to the left
          animate={{ x: 0, opacity: 1, rotate: -6 }} // Move to the final position
          transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }}
        />
        <motion.img
          src="right.png"
          alt=""
          className="absolute h-[88vh] -right-56 -top-[5%]"
          initial={{ x: "100%", opacity: 0 }} // Start from off-screen to the right
          animate={{ x: 0, opacity: 1, rotate: 12 }} // Move to the final position
          transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }}
        />
        <img
          src="HackShastra.png"
          alt=""
          className="absolute -z-1 top-[10%] w-[80vw] h-[80vh] opacity-15 object-cover"
        />
        <div className="flex items-center justify-center flex-col mt-24 z-10">
          <h1 className="text-9xl font-extrabold text-white">HackShastra</h1>
          <h2 className="text-[3.85vh] tracking-wide font-bold text-white">
            INNOVATION WITH ANCIENT MYTHOLOGICAL SPIRIT
          </h2>
        </div>
      </div>
      <motion.div
        className="absolute right-0 top-[80%] bg-[#181818] px-8 py-5 rounded-l-3xl"
        initial={{ x: "100%", opacity: 0 }} // Initially off-screen (to the right)
        animate={{ x: 0, opacity: 1 }} // Slide in to the final position and become fully visible
        transition={{ ease: [0.39, 0.24, 0.3, 1], duration: 2 }} // Smooth transition
      >
        <p className="text-2xl font-semibold">
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

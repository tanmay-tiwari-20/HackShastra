const Hero = () => {
  return (
    <>
      <div className="hero flex items-center justify-center overflow-x-hidden">
        <img
          src="left.png"
          alt=""
          className="absolute top-[50%] h-[115vh] object-contain -left-44 -rotate-6"
        />
        <img
          src="right.png"
          alt=""
          className="absolute h-[85vh] -right-56 rotate-12 -top-[5%]"
        />
        <img
          src="HackShastra.png"
          alt=""
          className="absolute -z-1 top-[10%] w-[80vw] h-[80vh] opacity-15 object-contain"
        />
        <div className="flex items-center justify-center flex-col mt-24 z-10">
          <h1 className="text-9xl font-extrabold text-white">HackShastra</h1>
          <h2 className="text-[3.85vh] tracking-wide font-bold text-white">
            INNOVATION WITH ANCIENT MYTHOLOGICAL SPIRIT
          </h2>
        </div>
      </div>
      <div className="absolute right-0 top-[80%] bg-[#181818] px-8 py-5 rounded-l-3xl">
        <p className="text-2xl font-semibold">
          Join, create, and <span className="text-[#E50914] font-bold">Conquer</span>{" "}
          real-world <br /> <span className="text-[#E50914] font-bold">Challenges</span>{" "}
          with code and creativity.
        </p>
      </div>
    </>
  );
};

export default Hero;

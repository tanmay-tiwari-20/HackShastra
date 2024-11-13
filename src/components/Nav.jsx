const Nav = () => {
  return (
    <nav className="flex justify-between px-10 text-xl">
      <div className="px-8">
        <div className="bg-[#181818] w-[15vw] h-[25vh] rounded-b-3xl p-4">
          <h1 className="bg-[#181818] font-black text-2xl mt-3">2025 Jan. - Feb.</h1>
          <p className="bg-[#181818] font-extrabold mt-3">Offline</p>
          <button className="flex items-center justify-between bg-white w-[13vw] h-[5vh] rounded-lg mt-5">
            <img src="devfolio.png" alt="" className="bg-white ml-2 w-6 h-6"/>
            <p className="text-sm text-black mr-4 font-bold">Apply with Devfolio</p>
          </button>
        </div>
      </div>
      <div className="flex gap-14 font-semibold py-8 mr-8">
        <a href="">Timeline</a>
        <a href="">Mentors</a>
        <a href="">Our Team</a>
        <a href="">Sponsors</a>
        <a href="">Contact Us</a>
      </div>
    </nav>
  );
};

export default Nav;

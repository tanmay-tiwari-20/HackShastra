import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Timeline from "./components/Timeline";

const App = () => {
  return (
      <div className="min-h-[165vh] bg-[#E50914]">
      <Nav />
      <Hero />
      <Timeline />
    </div>
  );
};

export default App;

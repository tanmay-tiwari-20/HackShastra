import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useEffect(() => {
    // Select the timeline element
    const timelineElement = document.querySelector(".timeline-container");

    // GSAP animation
    gsap.fromTo(
      timelineElement,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.5, // Faster animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineElement, // Element to watch for scroll
          start: "top 80%", // Start animation when element is in viewport
          end: "top 30%", // End point for scroll-based animation
          scrub: true, // Smoother scrolling effect
        },
      }
    );
  }, []);

  return (
    <div className="timeline-container bg-black h-screen flex items-center justify-center">
      <h1 className="text-white text-4xl">Timeline</h1>
    </div>
  );
};

export default Timeline;

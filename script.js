gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-icon");

menuBtn.addEventListener("click", () => {
  // Toggle the menu visibility
  menu.classList.toggle("hidden");

  // Toggle the hamburger icon and close icon
  if (menu.classList.contains("hidden")) {
    hamburgerIcon.classList.remove("fa-times"); // Switch to hamburger icon
    hamburgerIcon.classList.add("fa-bars");
  } else {
    hamburgerIcon.classList.remove("fa-bars"); // Switch to close icon
    hamburgerIcon.classList.add("fa-times");
  }
});

// COUNTDOWN
const countdownDate = new Date("September 20, 2025 09:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-wrapper").innerHTML =
      "Hackathon Started!";
    return;
  }

  document.getElementById("days").textContent = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );
  document.getElementById("hours").textContent = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.getElementById("minutes").textContent = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  document.getElementById("seconds").textContent = Math.floor(
    (distance % (1000 * 60)) / 1000
  );
}, 1000);

gsap.registerPlugin(ScrollTrigger);

// Teams Section Animation
gsap.from("#teams h2", {
  scrollTrigger: {
    trigger: "#teams",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

gsap.from("#teams p", {
  scrollTrigger: {
    trigger: "#teams",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.2,
  ease: "power3.out",
});

// Team Cards Animation
gsap.utils.toArray(".team-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.6,
    delay: i * 0.1,
    ease: "back.out(1.7)",
  });
});

// Social Button Hover Effects
document.querySelectorAll(".social-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.15,
      rotation: 5,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Call to Action Animation
gsap.from("#teams .bg-gradient-to-r", {
  scrollTrigger: {
    trigger: "#teams .bg-gradient-to-r",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 40,
  scale: 0.95,
  duration: 0.8,
  ease: "power3.out",
});

// HEADER LOAD ANIMATION
gsap.from("header img", {
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power2.out",
});

// HERO SECTION ANIMATION
gsap.from("section.text-center img", {
  opacity: 0,
  scale: 0.5,
  duration: 1.2,
  delay: 0.3,
  ease: "back.out(1.7)",
});

gsap.from("section.text-center h1", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.6,
  ease: "power3.out",
});

gsap.from("section.text-center p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.9,
  ease: "power3.out",
});

gsap.from("section.text-center a", {
  opacity: 1,
  y: 30,
  duration: 0.8,
  delay: 1.2,
  ease: "power3.out",
});

// ABOUT SECTION ANIMATION
gsap.from("#about h2, #about p, #about button", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 1,
  duration: 0.7,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from("#about img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 80,
  duration: 0.7,
  ease: "power2.out",
});

// TIMELINE SECTION
gsap.utils.toArray("#timeline .timeline-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.9,
    delay: i * 0.15,
    ease: "power3.out",
  });
});

// JUDGES
gsap.from("#judges .grid > div", {
  scrollTrigger: {
    trigger: "#judges",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// MENTORS
gsap.from("#mentors .grid > div", {
  scrollTrigger: {
    trigger: "#mentors",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// STATS COUNTER
document.querySelectorAll(".count-up").forEach((counter) => {
  const target = +counter.dataset.target;

  gsap.fromTo(
    counter,
    { innerText: 0 },
    {
      innerText: target,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      snap: { innerText: 1 },
      onUpdate: () => {
        counter.innerText = Math.floor(counter.innerText);
      },
      onComplete: () => {
        counter.innerText = target;
      },
    }
  );
});

// Sponsors Section Animation
gsap.from("#sponsors h2", {
  scrollTrigger: {
    trigger: "#sponsors",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
});

// FOOTER ANIMATION
gsap.from("#contact .w-full", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});

// Add this to your existing <script> section at the end

// Magnetic Button Effect
class MagneticButton {
  constructor(element) {
    this.element = element;
    this.magnetStrength = parseFloat(element.dataset.magnetStrength) || 0.3;
    this.magnetRadius = parseFloat(element.dataset.magnetRadius) || 100;
    this.init();
  }

  init() {
    this.element.classList.add("magnetic-btn");
    this.element.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    this.element.addEventListener("click", this.onClick.bind(this));
  }

  onMouseEnter(e) {
    this.element.style.transition = "transform 0.1s ease-out";
  }

  onMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < this.magnetRadius) {
      const pullX =
        deltaX * this.magnetStrength * (1 - distance / this.magnetRadius);
      const pullY =
        deltaY * this.magnetStrength * (1 - distance / this.magnetRadius);

      this.element.style.transform = `translate3d(${pullX}px, ${pullY}px, 0) scale(1.05)`;

      const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;

      this.element.style.setProperty("--mouse-x", `${mouseXPercent}%`);
      this.element.style.setProperty("--mouse-y", `${mouseYPercent}%`);
    }
  }

  onMouseLeave(e) {
    this.element.style.transition =
      "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    this.element.style.transform = "translate3d(0, 0, 0) scale(1)";
    this.element.style.removeProperty("--mouse-x");
    this.element.style.removeProperty("--mouse-y");
  }

  onClick(e) {
    this.element.classList.add("clicked");
    this.createRipple(e);
    setTimeout(() => this.element.classList.remove("clicked"), 600);
  }

  createRipple(e) {
    const rect = this.element.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    this.element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

// Initialize magnetic buttons
function initializeMagneticButtons() {
  const buttonSelectors = [
    'a[href*="whatsapp"]',
    "button",
    ".group",
    'a[class*="bg-red"]',
    'a[class*="hover:bg-red"]',
    ".theme-card",
  ];

  buttonSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (!element.classList.contains("magnetic-btn")) {
        if (
          element.classList.contains("bg-red-600") ||
          element.classList.contains("bg-red-700") ||
          element.href?.includes("whatsapp")
        ) {
          element.classList.add("primary");
        } else {
          element.classList.add("secondary");
        }

        element.dataset.magnetStrength = element.classList.contains(
          "theme-card"
        )
          ? "0.2"
          : "0.3";
        element.dataset.magnetRadius = element.classList.contains("theme-card")
          ? "80"
          : "100";

        new MagneticButton(element);
      }
    });
  });
}

// Initialize when page loads
initializeMagneticButtons();

const items = [
  {
    id: "1",
    img: "1.jpg",
  },
  {
    id: "2",
    img: "2.jpg",
  },
  {
    id: "3",
    img: "3.jpg",
  },
  {
    id: "4",
    img: "4.jpg",
  },
  {
    id: "5",
    img: "5.jpg",
  },
  {
    id: "6",
    img: "6.jpg",
  },
  {
    id: "7",
    img: "7.jpg",
  },
  {
    id: "8",
    img: "8.jpg",
  },
  {
    id: "9",
    img: "9.jpg",
  },
  {
    id: "10",
    img: "10.jpg",
  },
  {
    id: "11",
    img: "11.jpg",
  },
  {
    id: "12",
    img: "12.jpg",
  },
  {
    id: "13",
    img: "13.jpg",
  },
  {
    id: "14",
    img: "14.jpg",
  },
  {
    id: "15",
    img: "15.jpg",
  },
  {
    id: "16",
    img: "16.jpg",
  },
  {
    id: "17",
    img: "17.jpg",
  },
  {
    id: "18",
    img: "18.jpg",
  },
  {
    id: "19",
    img: "19.jpg",
  },
  {
    id: "20",
    img: "20.jpg",
  },
  {
    id: "21",
    img: "21.jpg",
  },
  {
    id: "22",
    img: "22.jpg",
  },
  {
    id: "23",
    img: "23.jpg",
  },
  {
    id: "24",
    img: "24.jpg",
  },
  {
    id: "25",
    img: "25.jpg",
  },
];

function getColumns() {
  if (window.innerWidth >= 1500) return 5;
  if (window.innerWidth >= 1000) return 4;
  if (window.innerWidth >= 600) return 3;
  if (window.innerWidth >= 400) return 2;
  return 1;
}

// bucketed heights for neat layout
function getRandomHeight() {
  const heights = [180, 240, 300, 360];
  return heights[Math.floor(Math.random() * heights.length)];
}

function renderMasonry() {
  const container = document.getElementById("masonry");
  container.innerHTML = "";

  const columns = getColumns();
  const gap = 16;
  const width = container.clientWidth;
  const columnWidth = (width - (columns - 1) * gap) / columns;
  const colHeights = new Array(columns).fill(0);

  items.forEach((item, index) => {
    const col = colHeights.indexOf(Math.min(...colHeights));
    const x = col * (columnWidth + gap);
    const y = colHeights[col];

    const h = getRandomHeight();

    // create element
    const div = document.createElement("div");
    div.dataset.key = item.id + "-" + index;
    div.className =
      "absolute box-content rounded-[10px] shadow-lg bg-cover bg-center cursor-pointer";
    div.style.cssText = `
      width:${columnWidth}px;
      height:${h}px;
      background-image:url(${item.img});
      transform: translate(${x}px, ${y}px);
    `;
    div.onclick = () => window.open(item.url, "_blank");

    container.appendChild(div);

    // animate in
    gsap.fromTo(
      div,
      { opacity: 0, y: y + 100, filter: "blur(10px)" },
      {
        opacity: 1,
        y,
        filter: "blur(0px)",
        duration: 0.8,
        delay: index * 0.05,
        ease: "power3.out",
      }
    );

    colHeights[col] += h + gap;
  });

  // force bottom alignment
  const maxHeight = Math.max(...colHeights);
  container.style.height = maxHeight + "px";
}

window.addEventListener("resize", renderMasonry);
renderMasonry();

document.addEventListener("mouseover", (e) => {
  const target = e.target.closest("[data-key]");
  if (target) gsap.to(target, { scale: 0.95, duration: 0.3 });
});
document.addEventListener("mouseout", (e) => {
  const target = e.target.closest("[data-key]");
  if (target) gsap.to(target, { scale: 1, duration: 0.3 });
});

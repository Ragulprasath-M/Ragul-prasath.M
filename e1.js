document.addEventListener("DOMContentLoaded", () => {

  // --------------------
  // Loader
  // --------------------
  const loader = document.getElementById("loader");
  if(loader){
    setTimeout(() => {
      loader.classList.add("loaded");
      loader.style.display = "none";
    }, 1300);
  }

  // --------------------
  // Navbar toggle (mobile)
  // --------------------
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if(menuToggle && navLinks){
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // --------------------
  // Smooth scroll for internal links
  // --------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if(navLinks.classList.contains("show")) navLinks.classList.remove("show");
      }
    });
  });

  // --------------------
  // Scroll-to-top button
  // --------------------
  const scrollTop = document.getElementById("scrollTop");
  if(scrollTop){
    window.addEventListener("scroll", () => {
      scrollTop.style.display = window.scrollY > 600 ? "block" : "none";
    });

    scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --------------------
  // Typed.js animation
  // --------------------
  if(document.getElementById("typed")){
    new Typed("#typed", {
      strings: ["MERN Stack Developer", "IT Support Engineer", "Full Stack Enthusiast", "Cloud & DevOps Learner"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  // --------------------
  // Skill bars animation
  // --------------------
  const skillBars = document.querySelectorAll(".bar > div");
  const animateSkills = () => {
    skillBars.forEach(bar => {
      const value = bar.parentElement.getAttribute("data-value");
      const barTop = bar.getBoundingClientRect().top;
      if(barTop < window.innerHeight - 50){
        bar.style.width = value + "%";
      }
    });
  };
  window.addEventListener("scroll", animateSkills);
  animateSkills(); // initial check

  // --------------------
  // Vanilla Tilt for projects
  // --------------------
  if(window.VanillaTilt){
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.25
    });
  }

  // --------------------
  // ParticlesJS background
  // --------------------
  if(window.particlesJS){
    particlesJS("particles-js", {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 900 } },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: "#000", opacity: 0.15, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" } } },
      retina_detect: true
    });
  }

});

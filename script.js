const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const nav = document.querySelector("#nav");
const hero = document.querySelector("#hero");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const experience = document.querySelector("#experience");
const projects = document.querySelector("#projects");
const contactus = document.getElementById("contactus");

// MENU OPEN/CLOSE BUTTON
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// INTERSECTION OBSERVER
function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "nav") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }
      if (entry.target.id === "hero") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }

      if (entry.target.id === "about") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }

      if (entry.target.id === "skills") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }

      if (entry.target.id === "experience") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }

      if (entry.target.id === "projects") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }

      if (entry.target.id === "contactus") {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
      }

      observer.unobserve(entry.target);
    }
  });
}

const options = {
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(callbackFunction, options);

observer.observe(nav);
observer.observe(hero);
observer.observe(about);
observer.observe(skills);
observer.observe(experience);
observer.observe(projects);
observer.observe(contactus);

// Typing animation for the name
const text = "ᴄᴇᴊɪᴇ ᴍ. ʜᴇʀɴᴀɴᴅᴇᴢ";
let index = 0;
const typing = document.getElementById("typing-name");

function type() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

// Initialize when the page loads
window.addEventListener("load", () => {
  type();
  setupSmoothScroll();
  revealOnScroll(); // trigger initial reveal
});

window.addEventListener("scroll", revealOnScroll);
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll < lastScroll) {
    document.body.classList.add("scrolling-up");
    document.body.classList.remove("scrolling-down");
  } else {
    document.body.classList.add("scrolling-down");
    document.body.classList.remove("scrolling-up");
  }
  lastScroll = currentScroll;
});

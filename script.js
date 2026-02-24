// 1. Loader: Automatically hides after 2 seconds
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);
});

// 2. Smooth Scroll for "Explore" Button
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
}

// 3. Secure Visitor Counter (LocalStorage)
let n = localStorage.getItem("visit");
if (!n) {
    n = 1;
} else {
    n++;
}
localStorage.setItem("visit", n);
const counterElement = document.getElementById("counter");
if (counterElement) {
    counterElement.innerHTML = `DATABASE_ACCESS_LOGS: ${n} VISITORS`;
}

// 4. Initialize 3D Tilt Effect
// This targets all elements with the 'data-tilt' attribute
VanillaTilt.init(document.querySelectorAll(".glass, .box"), {
    max: 15,           // Max tilt rotation (degrees)
    speed: 400,        // Speed of the enter/exit transition
    glare: true,       // Enables the "shiny" glare effect
    "max-glare": 0.3,  // Sets the maximum opacity of the glare
});

// 5. Particles Config
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

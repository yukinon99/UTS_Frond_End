document.addEventListener("DOMContentLoaded", () => {
    // Initialize Typed.js for the animated text
    var typed = new Typed(".text", {
        strings: ["Us", "GelSound"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Select the "about-text" element
    const aboutText = document.querySelector(".about-text");

    // Create the IntersectionObserver to observe the "about-text" section
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation when the section is in view
                aboutText.style.opacity = '1'; // Make it visible
                aboutText.classList.add("animate"); // Add the class with CSS animation

                // Once the animation is triggered, stop observing
                observer.unobserve(aboutText);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Start observing the "about-text"
    observer.observe(aboutText);
});

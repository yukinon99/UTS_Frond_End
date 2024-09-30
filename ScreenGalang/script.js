document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed(".text", {
        strings: ["Us", "GelSound"], // Text to type
        typeSpeed: 100, // Typing speed
        backSpeed: 100, // Backspacing speed
        backDelay: 1000, // Delay before starting to backspace
        loop: true // Loop the typing effect
    });

    // Add the animation class to the about text after a delay
    setTimeout(() => {
        document.querySelector(".about-text").style.opacity = '1'; // Make it visible
        document.querySelector(".about-text").classList.add("animate"); // Add animation class
    }, 1200); // Adjust the delay to match your needs
});

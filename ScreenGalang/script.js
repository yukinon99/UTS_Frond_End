document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed(".text", {
        strings: ["Us", "GelSound"], 
        typeSpeed: 100, // speed buat animasi ngetik
        backSpeed: 100, // speed buat ganti tulisan
        backDelay: 1000, // delay sebelum ganti text
        loop: true // Loop  typing effect
    });

    // Add the animation class to the about text after a delay
    setTimeout(() => {
        document.querySelector(".about-text").style.opacity = '1'; // Make it visible
        document.querySelector(".about-text").classList.add("animate"); // Add animation class
    }, 1200); //timer delay nya
});

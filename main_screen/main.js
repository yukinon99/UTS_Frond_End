document.querySelectorAll('.icon-wrapper').forEach(icon => {

    icon.addEventListener('mouseenter', function () {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';


    });

    icon.addEventListener('mouseleave', function () {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});

//Berganti web
document.getElementById('accountButton').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default
    window.location.href = '/user/user.html'; // Pindah halaman ke user.html
});

//Untuk berganti gambar
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Ganti gambar secara otomatis setiap 15 detik
setInterval(function() {
    plusSlides(1);
}, 15000);
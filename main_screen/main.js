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
document.getElementById('accountButton').addEventListener('click', function (event) {
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
setInterval(function () {
    plusSlides(1);
}, 15000);
const headphoneData = {
    headphone1: {
        title: 'gelsound 1',
        rating: '★★★★☆',
        price: '$199.99',
        description: 'Experience the best sounding Headphones in its class.'
    }, headphone2: {
        title: 'gelsound 2',
        rating: '★★★★★',
        price: '$299.99',
        description: 'Latest Headphone with Active Noise canceling.'
    },
    headphone3: {
        title: 'gelsound 1 pro',
        rating: '★★★★☆',
        price: '$249.99',
        description: 'Improved version of the Gelsound 1 pro with better customization and sound.'
    }
};

function showDetails(headphoneId) {
    const modal = document.getElementById('headphoneDetailsModal');
    const title = document.getElementById('headphone-title');
    const rating = document.getElementById('headphone-rating');
    const price = document.getElementById('headphone-price');
    const description = document.getElementById('headphone-description');

    // Get data from headphoneData
    const data = headphoneData[headphoneId];

    title.innerText = data.title;
    rating.innerText = `Rating: ${data.rating}`;
    price.innerText = `Price: ${data.price}`;
    description.innerText = data.description;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('headphoneDetailsModal');
    modal.style.display = 'none';
}

function saveCustomizations() {
    const color = document.getElementById('color').value;
    alert('Your headphone color has been saved: ' + color);
}
const likeBtn = document.querySelector('.like-btn');
const dislikeBtn = document.querySelector('.dislike-btn');
const likeCountSpan = document.querySelector('.like-count');
const dislikeCountSpan = document.querySelector('.dislike-count');

let likeCount = 0;
let dislikeCount = 0;

likeBtn.addEventListener('click', () => {
    if (likeBtn.classList.contains('active')) {

        likeBtn.classList.remove('active');
        likeCount--;
    } else {
        likeBtn.classList.add('active');
        dislikeBtn.classList.remove('active');
        likeCount++;
        if (dislikeCount > 0) {
            dislikeCount--;
        }
    }
    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
});

dislikeBtn.addEventListener('click', () => {
    if (dislikeBtn.classList.contains('active')) {

        dislikeBtn.classList.remove('active');
        dislikeCount--;
    } else {

        dislikeBtn.classList.add('active');
        likeBtn.classList.remove('active');
        dislikeCount++;
        if (likeCount > 0) {
            likeCount--;
        }
    }

    likeCountSpan.textContent = dislikeCount;
    dislikeCountSpan.textContent = dislikeCount;
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.getElementById('navbar');

    menuBar.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

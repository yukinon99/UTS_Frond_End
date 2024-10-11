const likeBtn = document.querySelector('.like-btn');
const dislikeBtn = document.querySelector('.dislike-btn');
const likeCountSpan = document.querySelector('.like-count');
const dislikeCountSpan = document.querySelector('.dislike-count');

let likeCount = 0;
let dislikeCount = 0;
let isLiked = false;
let isDisliked = false;

likeBtn.addEventListener('click', () => {
    if (isLiked) {

        likeBtn.classList.remove('active');
        likeCount--;
        isLiked = false;
    } else {
        // If not liked, like the post
        likeBtn.classList.add('active');
        dislikeBtn.classList.remove('active');
        if (isDisliked) {
            dislikeCount--;
            isDisliked = false;
        }
        likeCount++;
        isLiked = true;
    }

    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
});

dislikeBtn.addEventListener('click', () => {
    if (isDisliked) {

        dislikeBtn.classList.remove('active');
        dislikeCount--;
        isDisliked = false;
    } else {

        dislikeBtn.classList.add('active');
        likeBtn.classList.remove('active');
        if (isLiked) {
            likeCount--;
            isLiked = false;
        }
        dislikeCount++;
        isDisliked = true;
    }

    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.getElementById('navbar');

    menuBar.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

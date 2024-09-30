let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


document.getElementById("search_button").onclick = function() {
    // Mendapatkan nilai dari input
    var query = document.getElementById("search-input").value;
    
    // Tentukan URL tujuan, bisa disesuaikan sesuai kebutuhan
    var targetUrl = "search.html" + encodeURIComponent(query);
    
    // Mengalihkan ke URL yang dituju
    window.location.href = targetUrl;
};
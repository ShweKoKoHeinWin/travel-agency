let navbar = document.querySelector('.header .navbar');

// Navbar Toggler function
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}


// video player
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


AOS.init({
    duration: 600,
    offset: 150,
});
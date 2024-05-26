document.addEventListener('DOMContentLoaded', function() {
    const artworks = document.querySelectorAll('.artwork');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    artworks.forEach(artwork => {
        observer.observe(artwork);
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
    menuOverlay.style.display = 'flex';
});

menuClose.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
});

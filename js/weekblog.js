document.addEventListener('DOMContentLoaded', () => {
    
    const paragraphs = document.querySelectorAll('.section-content p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 300); 
            }
        });
    }, {
        threshold: 0.1
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', () => {
        menuOverlay.style.display = 'flex';
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

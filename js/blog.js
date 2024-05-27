document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.blog-container');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Main menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', () => {
        menuOverlay.style.display = 'flex';
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });

    // Week menu toggle functionality
    const toggleWeekMenu = document.querySelector('.toggle-week-menu');
    const weekMenu = document.querySelector('.week-menu');

    toggleWeekMenu.addEventListener('click', () => {
        weekMenu.classList.toggle('expanded');
    });
});

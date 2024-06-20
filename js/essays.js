document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle 
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', () => {
        menuOverlay.style.display = 'flex';
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });

    // Submenu toggle 
    const submenuLinks = document.querySelectorAll('.overlay-nav > ul > li > a');
    submenuLinks.forEach(link => {
        if (link.nextElementSibling && link.nextElementSibling.classList.contains('submenu')) {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const submenu = link.nextElementSibling;
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            });
        }
    });

    // Essay read more
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const essayContent = button.parentElement.querySelector('.essay-content');
            essayContent.style.display = 'block';
        });
    });

    // Essay close
    const closeButtons = document.querySelectorAll('.essay-content .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const essayContent = button.parentElement;
            essayContent.style.display = 'none';
        });
    });

    // Horizontal scroll 
    const essayGrid = document.querySelector('.essay-grid');
    window.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            essayGrid.scrollLeft += event.deltaY * 3; // Increased scroll speed
        }
    });

    // Edge scrolling 
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const mouseX = event.clientX;
        const scrollSpeed = 20; // Speed of scrolling when mouse is near the edge

        if (mouseX > screenWidth * 0.9) { // 90% of the screen width
            essayGrid.scrollLeft += scrollSpeed;
        } else if (mouseX < screenWidth * 0.1) { // 10% of the screen width
            essayGrid.scrollLeft -= scrollSpeed;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const userName = localStorage.getItem('userName');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.querySelector('h2').style.transform = 'scale(1.1)';
            section.querySelector('img').style.transform = 'scale(1.1)';
        });

        section.addEventListener('mouseout', () => {
            section.querySelector('h2').style.transform = '';
            section.querySelector('img').style.transform = '';
        });
    });

    if (userName) {
        animateWelcomeText(`Welcome, ${userName}!`);
    } else {
        const nameInput = prompt('Please enter your name:');
        if (nameInput) {
            localStorage.setItem('userName', nameInput);
            animateWelcomeText(`Welcome, ${nameInput}!`);
        }
    }

    function animateWelcomeText(text) {
        const welcomeText = document.getElementById('welcomeText');
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                welcomeText.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    menuToggle.addEventListener('click', () => {
        menuOverlay.style.display = 'flex';
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const submenu = document.querySelector('nav ul .submenu');

    submenu.style.display = 'none';

    const blogLink = document.querySelector('nav ul li:nth-child(2) a'); 
    blogLink.addEventListener('click', () => {
        toggleSubMenu(submenu);
    });

    let lastClickTime = 0; 

    blogLink.addEventListener('click', (event) => {
        const currentTime = new Date().getTime(); 

        if (currentTime - lastClickTime < 500) {
            window.location.href = 'blog.html';
        }

        lastClickTime = currentTime; 
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.fontSize = '1.2em';
        });

        link.addEventListener('mouseout', () => {
            link.style.fontSize = '';
        });
    });

   
    const userName = localStorage.getItem('userName');
    if (userName) {
        animateWelcomeText(`Welcome, ${userName}!`);
    } else {
       
        const nameInput = prompt('Please enter your name:');
        if (nameInput) {
            localStorage.setItem('userName', nameInput);
            animateWelcomeText(`Welcome, ${nameInput}!`);
        }
    }
});

function toggleSubMenu(submenu) {
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

function animateWelcomeText(text) {
    const heading = document.querySelector('h1');
    const welcomeText = document.createElement('span');
    heading.textContent = ''; 
    heading.appendChild(welcomeText);

    let index = 0;

    function typeWelcomeText() {
        if (index < text.length) {
            welcomeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWelcomeText, 180); 
        }
    }

    typeWelcomeText();
}

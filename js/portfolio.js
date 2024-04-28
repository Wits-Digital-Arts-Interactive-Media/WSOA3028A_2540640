document.addEventListener('DOMContentLoaded', () => {


    const artworkContainer = document.getElementById('artworkContainer');
    const animatedHeading = document.createElement('h1');
    animatedHeading.textContent = "Please do not get scared. I swear I am sweet.";
    animatedHeading.id = "animatedHeading";
    animatedHeading.style.opacity = '0'; 
    animatedHeading.style.transform = 'translateY(-20px)'; 
    artworkContainer.prepend(animatedHeading);

   
    function animateHeading() {
        let opacity = 0;
        let yPos = -20;
        const animationInterval = setInterval(() => {
            opacity += 0.05; 
            yPos += 1; 
            animatedHeading.style.opacity = opacity;
            animatedHeading.style.transform = `translateY(${yPos}px)`;
            if (opacity >= 1) {
                clearInterval(animationInterval); 
            }
        }, 50); 
    }

    setTimeout(animateHeading, 500);



    const links = document.querySelectorAll('nav a');
    const submenu = document.querySelector('nav ul.submenu');
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
        link.style.color = 'white';

        link.addEventListener('mouseover', () => {
            link.style.fontSize = '1.2em';
        });

        link.addEventListener('mouseout', () => {
            link.style.fontSize = '';
        });
    });

    
    function toggleSubMenu(submenu) {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    }

const descriptionBtns = document.querySelectorAll('.descriptionBtn');

descriptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const description = btn.parentNode.querySelector('.description');
        if (description.style.display === 'block') {
            description.style.display = 'none';
        } else {
            description.style.display = 'block';
        }
    });
});
});

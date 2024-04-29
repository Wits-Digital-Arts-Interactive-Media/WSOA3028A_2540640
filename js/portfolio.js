document.addEventListener('DOMContentLoaded', () => {
    // Function to create and append navigation elements
    function createNavigation() {
        const nav = document.getElementById('navList');
        
        // Define navigation items
        const navItems = [
            { text: 'Home', href: 'index.html' },
            { text: 'Blog', href: '#', submenu: [
                { text: 'Week 1 Blog', href: 'Weekly blog/week1blog.html' },
                { text: 'Week 2 Blog', href: 'Weekly blog/week2blog.html' },
                { text: 'Week 3 Blog', href: 'Weekly blog/week3blog.html' },
                { text: 'Week 4 Blog', href: 'Weekly blog/week4blog.html' },
                { text: 'Week 6 Blog', href: 'Weekly blog/week6blog.html' },
                { text: 'Week 8 Blog', href: 'Weekly blog/week8blog.html' },
                { text: 'Week 9 Blog', href: 'Weekly blog/week9blog.html' },
                { text: 'Week 10 Blog', href: 'Weekly blog/week10blog.html' },
            ] },
            { text: 'Essays', href: 'essays.html' },
            { text: 'About', href: 'about.html' },
            { text: 'Design', href: 'websitedesign.html' },
            { text: 'Portfolio', href: 'portfolio.html' }
        ];

        // Create and append navigation links
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.text;
            a.href = item.href;
            li.appendChild(a);
            
            // If item has submenu, create submenu
            if (item.submenu) {
                const ul = document.createElement('ul');
                ul.classList.add('submenu');
                item.submenu.forEach(subItem => {
                    const subLi = document.createElement('li');
                    const subA = document.createElement('a');
                    subA.textContent = subItem.text;
                    subA.href = subItem.href;
                    subLi.appendChild(subA);
                    ul.appendChild(subLi);
                });
                li.appendChild(ul);
            }
            
            nav.appendChild(li);
        });
    }

    // Call the function to create navigation
    createNavigation();

    // Submenu toggle functionality
    const submenu = document.querySelector('nav ul.submenu');
    submenu.style.display = 'none';

    const blogLink = document.querySelector('nav > ul > li:nth-child(2) > a'); // Targeting the Blog link
    let lastClickTime = 0; // Initializing lastClickTime here

    blogLink.addEventListener('click', (event) => {
        const currentTime = new Date().getTime(); 
        if (currentTime - lastClickTime < 500) {
            window.location.href = 'blog.html';
        }
        lastClickTime = currentTime;
        
        const submenu = blogLink.nextElementSibling;
        toggleSubMenu(submenu);
    });

    function toggleSubMenu(submenu) {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    }

    // Link hover effect
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.fontSize = '1.2em';
        });

        link.addEventListener('mouseout', () => {
            link.style.fontSize = '';
        });
        link.style.color = 'white';
    });

    // Portfolio animation
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

    // Description toggle functionality
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


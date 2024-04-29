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
    blogLink.addEventListener('click', (event) => {
        const currentTime = new Date().getTime(); 
        if (currentTime - lastClickTime < 500) {
            window.location.href = 'blog.html';
        }
        lastClickTime = currentTime;
        
        const submenu = blogLink.nextElementSibling;
        toggleSubMenu(submenu);
    });

    let lastClickTime = 0; // Initializing lastClickTime here

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
    });

    // Like button implementation
    const likeButtons = document.querySelectorAll('.like-button');
    const likeCountDisplays = document.querySelectorAll('.like-count');

    likeButtons.forEach((likeButton, index) => {
        const postId = index + 1; 
        let liked = localStorage.getItem(`liked_${postId}`);
        let likeCount = parseInt(localStorage.getItem(`likeCount_${postId}`)) || 0;

        if (liked === 'true') {
            likeButton.disabled = true;
        }

        likeButton.addEventListener('click', () => {
            if (liked !== 'true') {
                likeCount++;
                localStorage.setItem(`liked_${postId}`, 'true');
                localStorage.setItem(`likeCount_${postId}`, likeCount);
                likeCountDisplays[index].textContent = likeCount;
                likeButton.disabled = true; 
            }
        });

        likeCountDisplays[index].textContent = likeCount;
    });

   
});

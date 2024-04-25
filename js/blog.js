document.addEventListener('DOMContentLoaded', () => {
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

    function toggleSubMenu(submenu) {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    }
});

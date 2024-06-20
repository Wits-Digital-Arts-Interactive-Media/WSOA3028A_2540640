document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-content');

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

    sections.forEach(section => {
        observer.observe(section);
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

    const category = 'happiness'; // Changed from var to const 
    $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/quotes?category=${category}`, 
        headers: { 'X-Api-Key': 'ROK/K3VcVJ3+Ry1lGeM2fw==0YM0ODLfKxWx4Z6M'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            if (result && result.length > 0) {
                document.getElementById('quote-display').innerText = result[0].quote;
            } else {
                document.getElementById('quote-display').innerText = 'No quotes available.';
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            document.getElementById('quote-display').innerText = 'Failed to fetch quote.';
        }
    });
});

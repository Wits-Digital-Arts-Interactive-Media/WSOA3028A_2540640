document.addEventListener('DOMContentLoaded', () => {
    // Function to create and append navigation elements
    function createNavigation() {
        const nav = document.getElementById('navList');
        
        // Define navigation items
        const navItems = [
            { text: 'Home', href: 'index.html' },
            { text: 'Blog', href: '#' },
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
            nav.appendChild(li);
        });
    }

    // Call the function to create navigation
    createNavigation();
});

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

    
    function toggleSubMenu(submenu) {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    }

    
    const apiKey = '07f4bab03ed0457895e232338242804';
    const city = 'Johannesburg'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
            const weatherContainer = document.getElementById('weather');
            const weatherInfo = document.createElement('div');
            weatherInfo.innerHTML = `
                <h3>Watch how cool this is....the weather now in ${city} is</h3>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
            `;
            weatherContainer.appendChild(weatherInfo);
        })
        .catch(error => {
            console.error('There was a problem fetching weather data:', error);
           
            const weatherContainer = document.getElementById('weather');
            const weatherError = document.createElement('div');
            weatherError.textContent = 'Unable to fetch weather data. Please try again later , my free trail has ended.';
            weatherContainer.appendChild(weatherError);
        });
});


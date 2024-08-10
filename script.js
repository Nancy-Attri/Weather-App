document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '05680bf308298f116635daed63b69bfd'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            const temperature = `Temperature: ${data.main.temp}°C`;
            const description = `Weather: ${data.weather[0].description}`;
            const humidity = `Humidity: ${data.main.humidity}%`;

            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;
            document.getElementById('humidity').textContent = humidity;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}


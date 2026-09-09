/* Krishok Bondhu - Weather JavaScript */

// Sample weather data (static placeholder for now)
const sampleWeatherData = {
    temperature: "28°C",
    humidity: "75%",
    rainfall: "12 mm",
    windSpeed: "10 km/h",
    location: "Dhaka, Bangladesh"
};

// Function to display weather data (placeholder until FastAPI is connected)
function displayWeatherData() {
    const weatherGrid = document.getElementById('weatherGrid');
    if (!weatherGrid) return;

    // Static data for now - will be replaced with API calls later
    const weatherItems = [
        { label: 'Temperature', value: sampleWeatherData.temperature, unit: '' },
        { label: 'Humidity', value: sampleWeatherData.humidity, unit: '' },
        { label: 'Rainfall', value: sampleWeatherData.rainfall, unit: '' },
        { label: 'Wind Speed', value: sampleWeatherData.windSpeed, unit: '' }
    ];

    weatherItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `
            <h4>${item.label}</h4>
            <div class="value">${item.value}</div>
            <div class="unit">${item.unit}</div>
        `;
        weatherGrid.appendChild(card);
    });
}

// Future function to connect to FastAPI
function fetchLiveWeather() {
    // TODO: Connect to FastAPI backend
    // const response = await fetch('/api/weather');
    // const data = await response.json();
    // Update the weather display
}

document.addEventListener('DOMContentLoaded', function() {
    displayWeatherData();
});

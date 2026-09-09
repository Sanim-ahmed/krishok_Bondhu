/* Krishok Bondhu - Weather JavaScript */

const sampleWeatherData = {
    temperature: "28°C",
    humidity: "75%",
    rainfall: "12 mm",
    windSpeed: "10 km/h",
    location: "Dhaka, Bangladesh"
};

function displayWeatherData() {
    const weatherGrid = document.getElementById('weatherGrid');
    if (!weatherGrid) return;
    weatherGrid.innerHTML = '';

    const weatherItems = [
        { key: 'weather_temperature', value: sampleWeatherData.temperature },
        { key: 'weather_humidity', value: sampleWeatherData.humidity },
        { key: 'weather_rainfall', value: sampleWeatherData.rainfall },
        { key: 'weather_wind_speed', value: sampleWeatherData.windSpeed }
    ];

    weatherItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `
            <h4>${I18n.t(item.key)}</h4>
            <div class="value">${item.value}</div>
        `;
        weatherGrid.appendChild(card);
    });
}

function onLanguageChange() {
    displayWeatherData();
}

document.addEventListener('DOMContentLoaded', function() {
    displayWeatherData();
});

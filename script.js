const apiKey = "d857b0114590fad3c2df9f590c024c50";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const description = document.getElementById("description");

async function getWeather(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        cityName.textContent =
            `${data.name}, ${data.sys.country}`;

        temperature.textContent =
            `🌡 Temperature: ${data.main.temp} °C`;

        humidity.textContent =
            `💧 Humidity: ${data.main.humidity}%`;

        windSpeed.textContent =
            `🌬 Wind Speed: ${data.wind.speed} m/s`;

        description.textContent =
            `☁ Condition: ${data.weather[0].description}`;

    }
    catch (error) {

        cityName.textContent = "";
        temperature.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";

        description.textContent =
            `❌ Error: ${error.message}`;
    }
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city !== "") {
        getWeather(city);
    } else {
        description.textContent = "❌ Please enter a city name.";
    }

});

cityInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const city = cityInput.value.trim();

        if (city !== "") {
            getWeather(city);
        } else {
            description.textContent = "❌ Please enter a city name.";
        }
    }

});
import React, { useState } from "react";

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = "f149a0b4097a4d2a96743e046af9f11f"; // replace with your Weatherbit API key
    const PROXY = "https://cors-anywhere.herokuapp.com/";

    const getWeather = async () => {
        if (!city) {
            setError("Please enter a city name");
            return;
        }

        try {
            setError(null);
            const response = await fetch(
                `${PROXY}https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&units=M`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            setWeather(data.data[0]);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    return (
        <section id="weather">
            <h2>Weather Info</h2>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {weather && (
                <div>
                    <h3>{weather.city_name}, {weather.country_code}</h3>
                    <p>Temperature: {weather.temp}°C</p>
                    <p>Weather: {weather.weather.description}</p>
                </div>
            )}
        </section>
    );
}

export default Weather;

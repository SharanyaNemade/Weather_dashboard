# Weather_dashboard
This is a simple and functional React Weather App that fetches and displays current weather data for any city using the Weatherbit API. The app allows users to input a city name, fetch its weather conditions, and display information like temperature, weather description, and city details.







# 🌦️ React Weather App

A simple and functional weather application built with **React** that allows users to check real-time weather information by entering a city name. This app utilizes the **Weatherbit API** to fetch current weather data and displays key weather details such as temperature and description.

---

## 📸 Demo

![Weather App Demo](./preview.png) <!-- Add a screenshot image to your repo and update the filename if needed -->

---

## ✨ Features

- 🔍 Search for current weather by city name
- 🌡️ Displays temperature, weather description, and city info
- ❌ Handles errors like invalid input or failed API calls
- 🛡️ Uses CORS proxy for local development support
- ⚛️ Built using React functional components and hooks

---

## 🧰 Technologies Used

- **React** – Front-end UI library
- **JavaScript (ES6+)**
- **Weatherbit API** – For real-time weather data
- **CORS Anywhere Proxy** – To bypass CORS issues in development

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js and npm/yarn installed
- A free Weatherbit API key ([get it here](https://www.weatherbit.io/pricing))

---

### 📁 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-weather-app.git
   cd react-weather-app



2. **Install dependencies:**

npm install
# or
yarn install



3. **Add your API key:**

Open Weather.jsx and replace:

const API_KEY = "f149a0b4097a4d2a96743e046af9f11f"; // Replace with your API key



4. **Start the development server:**

npm start
# or
yarn start




🌍 Usage

Enter the name of any city.
Click on Get Weather.
View the temperature and weather conditions instantly.




react-weather-app/
│
├── src/
│   ├── Weather.jsx         # Main weather component
│   ├── App.js              # App entry component
│   └── index.js            # ReactDOM renderer
│
├── public/
│   └── index.html
│
├── package.json
└── README.md




📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

"use strict";

const apiKey = "0636d93dfb4e67f1928b9614c7753064";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

var data;
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    data = await response.json();
    console.log(Math.round(data.main.temp));
    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + " °c";
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Clouds.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Clouds.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

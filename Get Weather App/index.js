const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeather");
const weatherResult = document.querySelector(".weather-result");
const API_KEY = "536c0b21ab22b719f2b7b4d3e0b83d50";
const showName = document.querySelector(".showName");
const showTemp = document.querySelector(".showTemp");
const showWeather = document.querySelector(".showWeather");
const err = document.querySelector(".error-message");

getWeather.addEventListener("click", async () => {
  const cityText = cityInput.value;
  if (!cityText) return;
  try {
    const gotData = await getData(cityText);
    showData(gotData);
  } catch (err) {
    showErr();
  }
});

async function getData(cityName) {
  const response =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}
`);
  if (!response.ok) {
    throw new err("city not found");
  }
  const data = await response.json();

  return data;
}

function showData(data) {
  const { name, weather, main } = data;
  showName.textContent = name;
  showTemp.textContent = `Temperature: ${(main.temp - 273.15).toFixed(2)}°C`;
  showWeather.textContent = `Weather: ${weather[0].description}`;
  weatherResult.classList.remove("hidden");
  err.classList.add("hidden");
}
function showErr() {
  err.classList.remove("hidden");
  weatherResult.classList.add("hidden");
}

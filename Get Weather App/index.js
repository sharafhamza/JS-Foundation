const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeather");
const weatherContainer = document.getElementsByClassName("weather-container");
const API_KEY = "536c0b21ab22b719f2b7b4d3e0b83d50";
getWeather.addEventListener("click", () => {
  const cityText = cityInput.value;
  if (!cityText) return;
  getData(cityText);
});

async function getData(cityName) {
  try {
    const response =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}
`);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log("the error");
  }
}

async function showData() {}

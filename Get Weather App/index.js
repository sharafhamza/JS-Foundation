const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeather");
const weatherResult = document.querySelector(".weather-result");
const API_KEY = "536c0b21ab22b719f2b7b4d3e0b83d50";
const showTemp = document.querySelector(".showTemp");

getWeather.addEventListener("click", async () => {
  const cityText = cityInput.value;
  if (!cityText) return;
  const gotData = await getData(cityText);
  showData(gotData);
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
    throw new err("City not found");
  }
}

function showData(data) {
  const { name, weather, main } = data;
  showTemp.textContent = name;
  weatherResult.classList.remove("hidden");
}

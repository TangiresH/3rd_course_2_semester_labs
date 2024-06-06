const cityElement = document.getElementById('city');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const description = document.getElementById('weather');
const icon = document.getElementById('img');
const input = document.getElementById('search');
const button = document.getElementById('search_btn');

const apiKey = '87b01ade56160da6989a7a97fc76dbe0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

button.addEventListener('click', function (event) {
  event.preventDefault();
  axios
    .get(`${apiUrl}q=${input.value}&appid=${apiKey}&units=metric`)
    .then(showWeather);
});

const showWeather = (response) => {
  icon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  cityElement.innerHTML = `${response.data.name}`;
  humidity.innerHTML = `${Math.round(response.data.main.humidity)} %`;
  pressure.innerHTML = `${Math.round(response.data.main.pressure)} hPa`;
  description.innerHTML = `${response.data.weather[0].main}`;
  temperature.innerHTML = `${Math.round(response.data.main.temp)} ℃`;
}

const handlePosition = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(showWeather);
}

function redirectToCard(city) {
  window.location.href = `/weather/${city}`;
}

navigator.geolocation.getCurrentPosition(handlePosition);

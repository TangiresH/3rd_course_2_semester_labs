const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();
const axios = require('axios');

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

const apiKey = '87b01ade56160da6989a7a97fc76dbe0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/weather', (req, res) => {
  res.render('cards_list');
});

app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  axios
    .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      temperature = Math.round(response.data.main.temp);
      humidity = Math.round(response.data.main.humidity);
      pressure = Math.round(response.data.main.pressure);
      description = response.data.weather[0].main;
      img = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
      res.render('card', {
        city,
        temperature,
        humidity,
        pressure,
        description,
        img,
      });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

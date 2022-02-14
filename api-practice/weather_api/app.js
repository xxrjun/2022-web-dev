const express = require('express');
const app = express();
const fetch = require('node-fetch');

// api key
let myKey = '1e7b802bb9013ce9246c047bfd098383';

// k to cel
function KtoC(k) {
  return k - 273.15;
}

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/:city', (req, res) => {
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

  let d = fetch(url);
  let djs = d.json();
  let { temp } = djs.main;
  let newTemp = KtoC(temp);
  res.render('weather.ejs', { djs, newTemp });
});

app.listen(3000, () => {
  console.log('Server in running on the port 3000.');
});

// // midlleware
// app.use(express.static('public'));
// app.set('view engine', 'ejs');

// // routing
// app.get('/', (req, res) => {
//   res.render('index.ejs');
// });

// app.get('/:city', async (req, res) => {
//   let { city } = req.params;
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

//   let d = await fetch(url);
//   let djs = await d.json();
//   console.log(djs);
//   let { temp } = djs.main;
//   let newTemp = KtoC(temp);
//   res.render('weather.ejs', { djs, newTemp });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000.');
// });

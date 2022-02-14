const express = require('express');
const app = express();
const fetch = require('node-fetch');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/:username/repos', async (req, res) => {
  let { username } = req.params;
  let url = `https://api.github.com/users/${username}/repos`;
  let d = await fetch(url);
  let djs = await d.json();
  let { type, direction, per_page, page } = d;
  console.log(djs);
  res.send(`${username}'s repository`);
  // res.render('repository.ejs', { d });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

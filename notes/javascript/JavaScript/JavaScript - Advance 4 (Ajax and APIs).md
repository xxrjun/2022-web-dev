# JavaScript - Advance 4 (Ajax and APIs)

---

# 1. Sync and Async

---

sync code 同步

- JavaScript is a single-thread programming language.

async code 非同步

- 因為 JS 是 single-thread，因此遇到 async code 時把 async code 丟到 Web API 然後繼續執行下面的 code，等到 Web API 執行完 async code 才會丟回 JS 執行

**Example**

```sql
// async code
console.log("start");

setTimeout(() => {
  console.log("Here's time out!")
}, 2000);

console.log("end")
```

output

```sql
start
end
Here's time out!

[Done] exited with code=0 in 2.08 seconds
```

# 2. Callback Hell

---

**我們希望事件可以依照我們要求的順序執行**，這種時候就會發生 **Callback Hell**

![callbackhell.gif](JavaScript%20-%20Advance%204%20(Ajax%20and%20APIs)%2086b530ef23874211ae6049d93c49e29b/callbackhell.gif)

# 3. Promises[pass]

---

## Mongoose Promises and Queries

## Promises Refactor

# 4. What is API ?

---

- API stands for Application Programming Interface.
- APIs are tools for programmers to build websites.

# 5. Endpoint, Path and Query

---

- 範例 jokeAPI→ [https://sv443.net/jokeapi/v2/](https://sv443.net/jokeapi/v2/)
- **example**
    
    Red: endpoint; Blue: path; Orange: query
    
    ```
    https://v2.jokeapi.dev/joke/Programming?type=single
    ```
    
- **example - get Joke**
    
    ```jsx
    async function getJoke() {
      let joke = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      let parseData = await joke.json();
      console.log(parseData.joke);
    }
    
    getJoke();
    ```
    

## Endpoints

An endpoint is an access point to send the HTTP requests to and get your response.

JokeAPI offers these following endpoints:

# 6. Postman

---

link →  [https://www.postman.com/](https://www.postman.com/)

Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

# 7. API with Authorization Key

---

- 範例 openWeather API →[https://openweathermap.org/api](https://openweathermap.org/api)
- 拿到 key 才能使用 API

**Example**

```jsx
let myKey = "1e7b802bb9013ce9246c047bfd098383";
let city = prompt("Where weather do you want to get?");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function getWeather() {
  let d = await fetch(url);
  let dj = await d.json();
  console.log(dj);
}

getWeather();
```

# 8. HTTP Request made by Node to API

---

trouble → see next

# 9. Node Fetch

OpenWeather API

```jsx
const express = require('express');
const app = express();
const fetch = require('node-fetch');

// api key
let myKey = '1e7b802bb9013ce9246c047bfd098383';

// k to cel
function KtoC(k) {
  return k - 273.15;
}

// midlleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/:city', async (req, res) => {
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

  let d = await fetch(url);
  let djs = await d.json();
  console.log(djs);
  let { temp } = djs.main;
  let newTemp = KtoC(temp);
  res.render('weather.ejs', { djs, newTemp });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
```
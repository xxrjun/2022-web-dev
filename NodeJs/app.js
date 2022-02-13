const express = require("express")
const app = express()  // 因為 express 裡面只有一個 function，因此導出的是 function 不是 object
const path = require("path")
const bodyParser = require("body-parser")

// serving a static file
//middleware
app.use(express.static("public"))



// middleware
app.use(bodyParser.urlencoded({extended: true}))

// handle different requst
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/Mike', (req, res) => {
  res.send("You are on the Mike page.")
})


app.get('/John', (req, res) => {
  res.send("You are on the John page.")
})

// routing for pattern
app.get('/formHandling', (req, res) => {
  let { fullname, age } = req.query;
  res.send("You fullname: ${fullname}; age: {age}")
})

// // routing for query
// app.post('/formHandling', (req, res) => {
//   let {fullname, age} = req.body
//   res.send("Your fullname: " + fullname + "; age: " + age)
// })

// routing for all
// 403
app.get(('Mike'), (req, res) => {
  res.status(302);
  res.sendFile(path.join(__dirname, 'moved.html'))
})

// 404
app.get('*', (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'error.html'))
})

app.listen(3000)  // port
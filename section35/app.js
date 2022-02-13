const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
// middlewares
app.use(express.static('public'));
app.use(cookieParser());

mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((e) => {
    console.log(e);
  });

const fruitSchema = new mongoose.Schema({
  type: {
    type: String,
    minlength: 3,
  },
});

const Fruit = new mongoose.model('Fruit', fruitSchema);

// // save to db
// app.get('/:type', (req, res) => {
//   let { type } = req.params;
//   let newFruit = new Fruit({ type: type });
//   newFruit
//     .save()
//     .then(() => {
//       res.send('Data has been saved.');
//     })
//     .catch((e) => {
//       console.log(e);
//       res.send('Data has not been saved.');
//     });
// });

// app.get('/', async (req, res, next) => {
//   try {
//     let foundData = await Fruit.findOne({ type: 'Apple' });
//     res.send(foundData);
//   } catch (e) {
//     next(e);
//   }
// });

app.get('/', (req, res) => {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies);

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies);

  let { name } = req.cookies;
  res.send(name + ', welcome to homepage.');
});

// app.get('/', (req, res) => {
//   res.cookie('name', 'rjun');
//   res.send('Welcome to Home Page.');
// });

// app.get('/', async (req, res, next) => {
//   try {
//     await Fruit.findOneAndUpdate(
//       { type: 'apple' },
//       { type: 'apple' },
//       { new: true, runValidators: true },
//     );
//     res.send('Data has been update.');
//   } catch (e) {
//     next(e);
//   }
// });

// // error handling
app.get('/*', (req, res) => {
  res.status(404);
  res.send('404 Page not found.');
});

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something is broken. We will fix it soon.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});

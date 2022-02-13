const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./modules/student');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// connect to mongoDB
mongoose
  .connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to mongoDB.');
  })
  .catch((e) => {
    console.log('Connection failed.');
    console.log(e);
  });

// routing
// Students page
app.get('/students', async (req, res) => {
  try {
    let data = await Student.find();
    res.send(data);
  } catch {
    res.send({ message: 'Error with finding data.' });
  }
});

// post data into DB
app.post('/students', (req, res) => {
  // get data
  let { id, name, age, merit, other } = req.body;
  let newStudent = new Student({
    id,
    name,
    age,
    merit,
    scholarship: { merit, other },
  });

  // save data
  newStudent
    .save()
    .then(() => {
      res.send({ message: 'Successfully post a new student.' });
    })
    .catch((e) => {
      res.status(404);
      res.send(e);
    });
});

app.get('/students/:id', async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Student.findOne({ id });
    if (data !== null) {
      res.send(data);
    } else {
      res.status(404);
      res.send({ message: 'Cannot find data.' });
    }
  } catch {
    res.send('Error!!!');
  }
});

app.put('/students/edit/:id', async (req, res) => {
  let { id, name, age, merit, other } = req.body;
  try {
    let data = await Student.findOneAndUpdate(
      { id },
      { id, name, age, scholarship: { merit, other } },
      {
        new: true,
        runValidators: true,
        overwrite: true,
      },
    );
    res.send('Succesfully updated the data.');
  } catch {
    res.status(404);
    res.send('Error with updating');
  }
});

class newData {
  constructor() {}
  setProperty(key, value) {
    if (key !== 'merit' && key !== 'other') {
      this[key] = value;
    } else {
      this[`scholarship.${key}`] = value;
    }
  }
}

app.patch('/students/:id', async (req, res) => {
  let { id } = req.params;
  let { name, age, merit, other } = req.body;
  let newObject = new newData();
  for (let property in req.body) {
    newObject.setProperty(property, req.body[property]);
  }
  try {
    let data = await Student.findOneAndUpdate({ id }, newObject, {
      new: true,
      runValidators: true,
    });
    res.send('Succesfully updated the data.');
  } catch {
    res.status(404);
    res.send('Error with updating');
  }
});

// using postman to delete
app.delete('/students/delete/:id', (req, res) => {
  let { id } = req.params;
  Student.deleteOne({ id })
    .then((meg) => {
      console.log(meg);
      res.send('Deleted succesfully.');
    })
    .catch((e) => {
      console.log(e);
      res.send('Delete failed.');
    });
});

app.get('/*', (req, res) => {
  res.status(404);
  res.send('Not allowed.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

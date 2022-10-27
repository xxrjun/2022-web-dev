# Express and Mongoose - Student Project

製作一個學生資料庫，有

- `/`
- `/students`
- `/students/:id`
- `/student/edit/:id`
- `/students/delete/:id`

**app.js**

```jsx
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./modules/student");
const methodOverride = require("method-override");

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// connect to mongoDB
mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch((e) => {
    console.log("Connection failed.");
    console.log(e);
  });

// routing
// Home page
app.get("/", (req, res) => {
  res.send("This is Home Page.");
});

// Students page
app.get("/students", async (req, res) => {
  try {
    let data = await Student.find();
    console.log(data);
    res.render("students.ejs", { data });
  } catch {
    res.send("Error with finding data.");
  }
});

// generate HTML form
app.get("/students/insert", (req, res) => {
  res.render("studentInsert.ejs");
});

// post data into DB
app.post("/students/insert", (req, res) => {
  // for testing
  // console.log(req.body);

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
      console.log("Student accepted.");
      res.render("accept.ejs");
    })
    .catch((e) => {
      console.log("Student not accepted.");
      console.log(e);
      res.render("reject.ejs");
    });
});

app.get("/students/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Student.findOne({ id });
    if (data !== null) {
      res.render("studentPage.ejs", { data });
    } else {
      res.send("Cannot find this student. Pleas enter a valid id.");
    }
  } catch {
    res.send("Error!!!");
  }
});

app.get("/students/edit/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Student.findOne({ id });
    if (data !== null) {
      res.render("edit.ejs", { data });
    } else {
      res.send("Cannot find this student.");
    }
  } catch {
    res.send("Error!!!");
  }
});

app.put("/students/edit/:id", async (req, res) => {
  let { id, name, age, merit, other } = req.body;
  try {
    let data = await Student.findOneAndUpdate(
      { id },
      { id, name, age, scholarship: { merit, other } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.redirect(`/students/${id}`);
  } catch {
    res.render("reject.ejs");
  }
});

// using postman to delete
app.delete("/students/delete/:id", (req, res) => {
  let { id } = req.params;
  Student.deleteOne({ id })
    .then((meg) => {
      console.log(meg);
      res.send("Deleted succesfully.");
    })
    .catch((e) => {
      console.log(e);
      res.send("Delete failed.");
    });
});

app.get("/*", (req, res) => {
  res.status(404);
  res.send("Not allowed.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
```

### 做成 RESTful API

RESTful API 一定要有 CRUD

|        | HTTP Verbs  |
| ------ | ----------- |
| Create | POST        |
| Read   | GET         |
| Update | PUT / PATCH |
| Delete | DELETE      |

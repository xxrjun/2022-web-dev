# Mongoose

# 1. Intro to Mongoose

- Mongoose is a **ODM (Object Document Modeling)** that is used to **connect MongoDB to our web projects**.
- SQL used ORM (Object Relational Modeling), NoSQL used ODM.
- It’s a **module** in npmjs.
- Mongoose → [https://mongoosejs.com/](https://mongoosejs.com/)

# 2. Model and Schema

- **Everything in Mongoose starts with a Schema**. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
- Models are higher-order constructors that take a schema and create an instance of a document equivalent to recodes in a database. (That’s why we don’t do finding in schema, instead, we do finding in model.)
- **Model** is just like a **table** in SQL, and **Schema** is the **creating table steps**.

# 3. 連接 MongoDB

```jsx
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((err) => {
    console.log("Connection Failed.");
    console.log(err);
  });
```

# 4. Defining your schema

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```jsx
// define a schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
  scholarship: {
    merit: Number,
    other: Number,
  },
});
```

# 5. Creating a model

To use our schema definition, we need to convert our `studentSchema` into a [Model](https://mongoosejs.com/docs/models.html) we can work with. To do so, we pass it into

第一個字要大寫，且為單數，會自動轉換

```jsx
// create a model for students.
const Student = mongoose.model("Student", studentSchema);
```

# 6. Create an object and Save to DB

```jsx
// create an object
const Jon = new Student({
  name: "Jon",
  age: 25,
  major: "EE",
  scholarship: { merit: 2500, other: 1300 },
});

// save Jon to DB
Jon.save()
  .then(() => {
    console.log("Jon has bee saved into DB.");
  })
  .catch((e) => {
    console.log("error happened.");
    console.log(e);
  });
```

# 7. Mongoose C.R.U.D

### 7.1 Finding in Mongoose

### 7.2 Updating in Mongoose

### 7.3 Deleting in Mongoose

# 8. Schema Types Validators

---

## 8.1 All Schema Types Validators

- `required`
- `default`
- more schema types→ [https://mongoosejs.com/docs/schematypes.html](https://mongoosejs.com/docs/schematypes.html)
- more validators → [https://mongoosejs.com/docs/validation.html](https://mongoosejs.com/docs/validation.html)

## 8.2 String Validators

| uppercase() |
| ----------- |
| lowercase() |
| enum[]      |
| minlength() |
| maxlength() |

## 8.3 Number Validators

| max  |
| ---- |
| min  |
| enum |

## 8.4 E**xample**

```jsx
// define a schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: [true, "Pleas input name."],
    maxlength: [15, "Name is too long."],
  },
  age: {
    type: Number,
    requried: [true, "Pleas input age."],
    max: 150,
    min: 0,
  },
  major: {
    type: String,
    enum: ["EE", "CS", "Chem", "Eco"],
    default: "undecideed",
  },
  scholarship: {
    merit: {
      type: Number,
      default: 0,
    },
    other: {
      type: Number,
      default: 0,
    },
  },
});
```

## 8.5 Update with Validators

新建物件時 validators 都會發會作用
不過 update 時要把 `runValidators` 設為 true 才會有用

```jsx
Student.findOneAndUpdate(
  { name: "Jon" },
  { age: 1000 },
  { new: true, runValidators: true } // 回傳 modified object and run validators
);
```

# 9. Instance Method

- We set methods to the schema so that all the instances in the schema can have the same method.
- 改變後要 save

**Example**

要放在 create model 前，並且不可以為 arrow function，不然 this 不知道會指到哪去

```jsx
// create an instance method
studentSchema.methods.totalScholarship = function () {
  return this.scholarship.merit + this.scholarship.other;
};
```

# 10. Static Method

- Static method **belongs to the model**, even though it looks like it belongs to the schema.

# 11. Middleware

- Mongoose - Middleware → [https://mongoosejs.com/docs/middleware.html](https://mongoosejs.com/docs/middleware.html)
- **Middleware** (also called **pre** and **post *hooks***) are **functions which are passed control during execution of asynchronous functions**. Middleware is specified on the schema level and is useful for writing [plugins](https://mongoosejs.com/docs/plugins.html).

## 11.1 Pre

Pre middleware functions are executed one after another, when each middleware calls `next`.

```jsx
const schema = new Schema(..);
schema.pre('save', function(next) {
  // do stuff
  next();
});
```

In [mongoose 5.x](http://thecodebarbarian.com/introducing-mongoose-5.html#promises-and-async-await-with-middleware), instead of calling `next()` manually, you can use a function that returns a promise. In particular, you can use `[async/await](http://thecodebarbarian.com/common-async-await-design-patterns-in-node.js.html)` .

```jsx
schema.pre("save", function () {
  return doStuff().then(() => doMoreStuff());
});

// Or, in Node.js >= 7.6.0:
schema.pre("save", async function () {
  await doStuff();
  await doMoreStuff();
});
```

## 11.2 Post middleware

[post](https://mongoosejs.com/docs/api.html#schema_Schema-post) middleware are executed *after* the hooked method and all of its `pre`middleware have completed.

```jsx
schema.post("save", function (doc) {
  console.log("%s has been saved", doc._id);
});
```

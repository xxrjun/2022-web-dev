# Express.js

# 1. What is Express ?

- It’s a npm **module**.
- It’s a **framework** for Node.js applications.
- It help up to write Node.js faster

# 2. Server

```jsx
const express = require("express");
const app = express(); // 因為 express 裡面只有一個 function，
// 因此導出的是 function 不是 object

app.get("/", (req, res) => {
  res.send("You are on the HomePage");
});

app.listen(3000); // port
```

# 3. HTTP Requests

- Get Request
- Post Request
- Put Request
- Patch Request
- Delete Request

# 4. Routing in Express

## 4.1 **Request Handling**

- handle different request
- **routing for pattern**: 要用 `:`
- **routing for al**l: `*`

```jsx
// handle different requst
app.get("/", (req, res) => {
  res.send("You are on the HomePage.");
});
app.get("/Mike", (req, res) => {
  res.send("You are on the Mike page.");
});
app.get("/John", (req, res) => {
  res.send("You are on the John page.");
});

// routing for pattern
app.get("/fruit/:someFruit", (req, res) => {
  let { someFruit } = req.params; // destructing and object
  res.send(`You are looking for ${someFruit}`);
});

// routing for all 一定要放在其他 request 的下面，不然都會被吃掉
app.get("*", (req, res) => {
  res.send("Cannot find this page.");
});
```

## 4.2 Send and SendFile

- `send()` 裡面可以放 object, text, html...
- **一次 request 只能 send 一次**
- 如果想 send 整個 html 檔案要用 `sendFile()`:

**Example**

```jsx
const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // 用 path.join 做串接
});
```

## 4.3 POST & GET

### 4.3.1 action

`**action=””` 設定提交後網頁路徑，並將 `input` 的資料給要前往的網頁\*\*

### 4.3.2 POST

- `**method=”POST"**`
- **需要 `body-parser` 跟 `middleware` 來取得資料**

**Example** 在 html 做一個 form

```jsx
<form action="/formHandling" method="POST">
  <label for="fullname">Your Name: </label>
  <input type="text" id="fullname" name="fullname" />
  <label for="age">Your Age:</label>
  <input type="number" id="age" name="age" />
  <button type="submit">Submit</button>
</form>
```

**method 為 `POST` 的話，取得資料要用 `body-parser` 這個 module，並在 middleware 中去執行**

```jsx
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
```

**使用 body 取得輸入的資料**

```jsx
// routing for query
app.post("/formHandling", (req, res) => {
  let { fullname, age } = req.body;
  res.send("Your fullname: " + fullname + "; age: " + age);
});
```

### 4.3.3 GET

- `**method=”GET"**`
- **直接從 `query` 取得資料**

**Example**

```jsx
// routing for pattern
app.get("/formHandling", (req, res) => {
  let { fullname, age } = req.query;
  res.send("You fullname: ${fullname}; age: {age}");
});
```

# 5. Static File

**架 nodejs server 後，如果網頁要導入 CSS 必須用 middleware 導入 static file**

```jsx
// serving a static file
// middleware
app.use(express.static("public")); // 習慣用 public
```

**創建 public folder ，將要用的 CSS 文件放入**，記得更改 `link`，路徑加不加 public 都行

```jsx
<link rel="stylesheet" href="./styles/style.css" />
```

# 6. HTTP Status Code

- Status codes are issued by a server in response to a client’s request made to the server.
- **HTTP status code represents the response of the server**.
- All HTTP response status code are separated into five classes or categories.

## 6.1 HTTP Status Code cheat sheet

| 1\*\* | Hold on. (something is gonna happen)                      |
| ----- | --------------------------------------------------------- |
| 2\*\* | Here you go. (successful code return)                     |
| 3\*\* | Go away. (some security issues invoked)                   |
| 4\*\* | User screw up. (You request something that doesn’t exist) |
| 5\*\* | I screw up. (You request something that doesn’t exist)    |

## 6.2 HTTP 404 Not Found

**Example**

```jsx
// 404
app.get("*", (req, res) => {
  res.status(404); // 設定 response 的 status code
  res.sendFile(path.join(__dirname, "error.html")); // 導入自己的 404 頁面
});
```

## 6.3 HTTP 302 Found

- **Moved Temporarily**。可以簡單的理解為該資源原本確實存在，但已經被**臨時**改變了位置

**Example**

```jsx
// 403
app.get("Mike", (req, res) => {
  res.status(302); // 設定 response 的 status code
  res.sendFile(path.join(__dirname, "moved.html")); // 導入自己的 302 頁面
});
```

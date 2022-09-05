**Middlewares and Error Handling**

## Middleware

- Middlewares are just **functions.**
- The function inside middleware **gets called every time the server handles a request**. (No matter what kind of request it is.)
- Middleware function are functions that have access to the request objet (**req**), the response object (**res**), and the **next** middleware function in the application’s request-response cycle. (From Express Documentation)

## Error Handling

[Express docs - Error Handling](https://devdocs.io/express/guide/error-handling)

### **Example1 - 一般**

上面 send 打錯下面就會接到 err

```jsx
app.get("/", (req, res) => {
  res.sends("This is homepage.");
});

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is broken. We will fix it soon.");
});
```

### Example2 - async function

然而如果遇到 `async` function，就得用 try catch 並用 next() 將 error 傳下去

You must catch errors that occur in asynchronous code invoked by route handlers or middleware and pass them to Express for processing. For example:

```jsx
app.get('/', function (req, res, next) {
  setTimeout(function () {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
}
```

### Example3 - Validator and findOneAndUpdate Error

```jsx
app.get("/", async (req, res, next) => {
  try {
    await Fruit.findOneAndUpdate({ type: "apple" }, { type: "watermelon" }, { new: true, runValidators: true });
    res.send("Data has been update.");
  } catch (e) {
    next(e);
  }
});
```

## Cookies and Sessions

### What is cookie ?

- Cookies are some information we can store in user’s browser (just like local and session storage).
- Cookies are mainly for reading server-side inly, whereas local and session storage can only be read on the client side.
- **When we are sending HTTP requests, cookies are part of the request, whereas storage is not.**
- Cookies are stored in **key-value** pair.

### Cookies in Server

`res.cookie()`

```jsx
app.get("/", (req, res) => {
  res.cookie("name", "rjun");
  res.send("Welcome to Home Page.");
});
```

`req.cookies()` ，需要 `cookie-parser`

```jsx
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);

  let { name } = req.cookies;
  res.send(name + ", welcome to homepage.");
});
```

### Signing a Cookie

對 cookie 做簽名(非加密)，若 cookie 被更改過，要求時便會出現 undefined

### Session

- There are problems with cookies:
  1. Cookies can only store a small amount of data (approximately 4KB).
  2. We cannot store important data, since it might be hacked on the way of transition.

Therefore, we come up with another tool, called sessions.

## Environment Variable

npm 套件 [dotenv](https://www.npmjs.com/package/dotenv)

避免敏感資訊外漏，將敏感資訊如密碼、token 等等資訊存在 `.env` 檔案中並加到 `.gitignore` 中

使用方法 `proccess.env.YOUR_DATA`

## Flash

- Flash is a place inside sessions, and we can store some flash message to the users. such as success message or failure message.
- The npm module name is “connect-flash”.
- When using flash, we need to make sure we are using sessions first.

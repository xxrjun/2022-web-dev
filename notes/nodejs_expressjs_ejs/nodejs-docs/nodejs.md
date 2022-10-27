# Node.js

- [Node.js](#nodejs)
  - [Static website and Dynamic website](#static-website-and-dynamic-website)
    - [網頁後端開發有很多語言](#網頁後端開發有很多語言)
  - [1. What is Nodejs ?](#1-what-is-nodejs-)
  - [2. What is a Nodejs module ?](#2-what-is-a-nodejs-module-)
  - [3. Module Wrapper](#3-module-wrapper)
    - [3.1 Difference of running codes in Node.js and Browser](#31-difference-of-running-codes-in-nodejs-and-browser)
    - [3.2 What is Module Wrapper](#32-what-is-module-wrapper)
  - [3. Self made module](#3-self-made-module)
    - [3.1 一次導入一個](#31-一次導入一個)
    - [3.2 一次導入多個](#32-一次導入多個)
  - [4. Common Node Built-in Module](#4-common-node-built-in-module)
    - [4.1 Path](#41-path)
    - [4.2 URL](#42-url)
    - [4.3 File System](#43-file-system)
  - [5. IP, DNS and Port](#5-ip-dns-and-port)
    - [5.1 IP](#51-ip)
    - [5.2 DNS (Domain Name System)](#52-dns-domain-name-system)
    - [5.3 Port](#53-port)
  - [6. Node Server](#6-node-server)
  - [7. npm](#7-npm)
    - [npm module - nodemon](#npm-module---nodemon)

## Static website and Dynamic website

| Static Website                                            | Dynamic Website                                      |
| --------------------------------------------------------- | ---------------------------------------------------- |
| Content of Web pages can not be change at runtime.        | Content of Web pages can be changed.                 |
| No interaction with database possible.                    | Interaction with database is possible                |
| It is faster to load as compared to dynamic website.      | It is slower than static website.                    |
| Cheaper Development costs.                                | More Development costs.                              |
| No feature of Content Management.                         | Feature of Content Management System.                |
| HTML, CSS, Javascript is used for developing the website. | Server side languages such as PHP, Node.js are used. |
| Same content is delivered every time the page is loaded.  | Content may change every time the page is loaded.    |

### 網頁後端開發有很多語言

- PHP
- Node.js + Express + MongoDB
- Java
- Ruby on Rails
- Python (Django)
- .NET
- ...

## 1. What is Nodejs ?

- Node.js allows us to run JavaScript _outside the browser_ (Therefore, it’s not only a programming language for front-end development.)

## 2. What is a Nodejs module ?

- Module in Node.js is **a simple or complex functionality** organized in single or multiple JavaScript files which **can be reused** throughout the Node.js application.
- There are built-in modules in Node.js, but we can also make our own modules or use modules from other people.

## 3. Module Wrapper

### 3.1 Difference of running codes in Node.js and Browser

- The **Module Wrapper**
- If we run JS code with Node.js, we can use modules and special Node.js syntax

### 3.2 What is Module Wrapper

- 參考文件: [Nodejs v16 Module Wrapper Docs](https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#the-module-wrapper)
- Before a module's code is executed, Node.js will **wrap it with a function wrapper** that looks like the following:
  ```jsx
  (function (exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
  });
  ```
- It keeps top-level variables (defined with `var`, `const` or `let`) scoped to the module rather than the global object.
- It helps to provide some global-looking variables that are actually specific to the module, such as:
  - The `module` and `exports` objects that the implementor can use to export values from the module.
  - The convenience variables `__filename` and `__dirname`, containing the module's absolute filename and directory path.

## 3. Self made module

### 3.1 一次導入一個

製作一個 `.js` 檔案，並設定其 `exports`

```jsx
function morning(myName) {
  console.log("Good Morning " + myName);
}

exports.morning = morning;
```

用 `require` 導入

```jsx
let try1 = require("./try1");

try1.morning("rjun");
```

### 3.2 一次導入多個

創建一個 directory 並把要導入 `app.js` 的 .js 檔案都丟進去，
並且在裡面創建一個 `index.js` 將要用的 module 都導入到裡面

**Index.js**

```jsx
let try1 = require("./try1");
let try2 = require("./try2");

exports.morning = try1.morning;
exports.sayHi = try2.sayHi;
```

**app.js**

```jsx
let greeting = require("./greeting"); // 會自動讀取到 index.js

greeting.morning("rjun");
greeting.sayHi("rjun");
```

## 4. Common Node Built-in Module

### 4.1 [Path](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)

The `path` module provides utilities for working with file and directory paths. It can be accessed using:

```jsx
const path = require("path");
```

| Syntax                        | Description                                                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path.basename(path[, ext]) ` | returns the last portion of a `path `                                                                                                               |
| `path.extname(path)`          | returns the extension of the `path`, from the last occurrence of the </br> `.` (period) character to end of string in the last portion of the path. |
| `path.join([...paths])`       | joins all given path segments together using the platform-specific separator </br> as a delimiter, then normalizes the resulting path.              |

### 4.2 [URL](https://nodejs.org/dist/latest-v16.x/docs/api/url.html)

### 4.3 [File System](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)

`writeFile`

```jsx
import { writeFile } from "fs";

writeFile("message.txt", "Hello Node.js", "utf8", callback);
```

`readFile`

```jsx
import { readFile } from "fs";

// macOS, Linux, and Windows
readFile("<directory>", (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
});
```

## 5. IP, DNS and Port

### 5.1 IP

- **IPv4** : 過去，IP 由 _4 個 bytes_ 組成 ⇒ 32 bits ⇒ 2 ^ 32 ⇒ 42 億 9000 萬。不夠用！
- **IPv6** : 現在，IP 由 _16 個 bytes_ 組成 ⇒ 128 bits ⇒ 2 ^ 128

### 5.2 DNS (Domain Name System)

- DNS 伺服器將*名稱*請求轉換為 _IP 地址_
- 例如將 www.example.com 這種人們可讀取的名稱轉換為 192.0.2.1 等數字 IP 地址
- 網際網路 DNS 系統的工作原理和電話簿類似，管理*名稱和數字之間的映射*關係

### 5.3 Port

這裡指邏輯意義上的 Port，一般是指 TCP/IP 協議中的 Port，Port 號的範圍從 0 到 65535，比如用於流覽網頁服務的 _HTTP_ 預設使用 80 Port，用於 _FTP_ 服務的 21 Port 等等

## 6. Node Server

架一個本地伺服器(localhost)，監聽 3051 這個 port

```jsx
// 取得 http module
const http = require("http")

// 建 server
const server = http.createServer((req, res) => {
	...
  res.write("Hello")
  res.end()
})

// 設定 port number
server.listen(3051, () => {
  console.log("Server is running on port 3501.")
})
```

但通常不會這樣寫，大多數人會使用 **Express** 框架來寫 node server

## 7. npm

- Stands for node package manager.
- It keeps tracks of what modules you get from outside.
- Npm was installed with Node.js
- 可以到 [npmjs.com](https://www.npmjs.com/) 找到別人做的 modules
- 每次要用別人的 modules 都要用 terminal 到當前位址輸入 `npm init` 做好設定

### npm module - nodemon

link → [npm nodemon](https://www.npmjs.com/package/nodemon)

好用的 module，當 js 檔案更新在 terminal 會自動更新

# JavaScript - Basics 1

# 如何在 html 檔案中使用 JavaScript ?

---

創建一個 `.js` 檔案，範例為 `test.js`

到 `.html` 檔案中的 `<body>` tag 下面加上 

```html
<script src="test.js"></script>
```

即可完成 html 檔案與 js 檔案的串接

# 1. 常見 Js 函數

---

`console.log()`

`alert()`

`prompt()` ：可以讓使用者輸入

# 2. Variables in Js

---

`=` : assignment

![variables.png](JavaScript%20-%20Basics%201%201586a4ae44744e9abfb0eb66b14217c9/variables.png)

# 3. Numbers Operators

---

| +, -, *, / |
| --- |
| % |
| ** |
| ++, -- |
| +=, -=, *+, /= |

# 4. Strings

---

### 文字 string

string concatenation ： `+` ; 沒辦法像 python 一樣使用 `*` ，也不能 `-` 、 `/`

### 數字 string

由上而下，由左而右。`string` 要 `+ number` 就會把 number 變成 string 再做 concat

`string + number ⇒ string`

1. number ⇒ string
2.  + ⇒ string

# 5. Comments

---

1. `//` : one line comments
2. `/* */` : multiple lines comments
3. 先輸入 `/**` 再按空格， VSCode 會自動補齊 `*/` : multiple lines comments in VSCode 

小功能：將要設為 comments 的行全部選取按 `ctrl + /` 就可以全部 comment

# 6. Primitive Data Types

---

Primitive data types with common functions or other easy things

### 6.1  Number

| .toString() | 變 string, 不改變原變數之型態 |
| --- | --- |
| toFixed() | 小數點選保留位數, 不改變原變數之型態與值 |

### 6.2  String

| .length |  取得字串長度， length is a string’s property |
| --- | --- |
| [] | 可以透過 index 來 retrieve characters  |
| .slice(start, end) | 包含 start 不包含 end |
| indexOf() | 回傳第一個找到的 substring 的 index，沒找到回傳 -1 |
| toLowerCase() | 全變小寫 |
| toUpperCase() | 全變大寫 |
| split() | 可以切割 string 成 array |
| Number() | 字串變成 number |

### 6.3  Boolean

`true` and `false`

### 6.4  Undefined

沒有被 assigned 值的變數 ⇒ undefined

Box is waiting for assignment.

### 6.5  Null

There’s “nothing (`null`)” in the box. 

跟 `undefined` 的差別就是一個 box 裡面沒東西，一個有 `null`

### 6.6  Symbol

表示獨一無二的值
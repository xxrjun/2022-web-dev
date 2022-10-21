# DOM (Document Object Model)

- [DOM (Document Object Model)](#dom-document-object-model)
  - [Introduction](#introduction)
    - [Why do we learn DOM ?](#why-do-we-learn-dom-)
    - [How to use JS in HTML ?](#how-to-use-js-in-html-)
  - [1. Window Object](#1-window-object)
    - [1.1 Window Object Methods](#11-window-object-methods)
    - [1.2 Window Object Properties](#12-window-object-properties)
      - [Window Object Properties](#window-object-properties)
      - [Console Object](#console-object)
      - [Document Object](#document-object)
  - [2. What exactly is DOM ?](#2-what-exactly-is-dom-)
    - [2.1 Document Object Properties](#21-document-object-properties)
    - [2.2 Document Object Methods](#22-document-object-methods)
  - [3. Arrow Function Expression](#3-arrow-function-expression)
    - [3.1 Function Declaration](#31-function-declaration)
    - [3.2 Arrow Function Expression](#32-arrow-function-expression)
    - [3.3 this Keyword](#33-this-keyword)
  - [4. forEach Function](#4-foreach-function)
    - [4.1 What is **CallBack function ?**](#41-what-is-callback-function-)
    - [4.2 forEach function](#42-foreach-function)
  - [5. Array, HTMLCollection and NodeList](#5-array-htmlcollection-and-nodelist)
  - [6. Element Object](#6-element-object)
    - [6.1 Children and ChildNode](#61-children-and-childnode)
    - [6.2 InnerHTML and InnerText](#62-innerhtml-and-innertext)
    - [6.3 Style Object](#63-style-object)
  - [7. Inheritance in DOM](#7-inheritance-in-dom)
  - [8. Events](#8-events)
    - [8.1 JS Events Introduction](#81-js-events-introduction)
    - [8.2 Events Inheritance](#82-events-inheritance)
    - [8.3 Event Object](#83-event-object)
  - [9. Event Bubbling](#9-event-bubbling)
  - [10. Dynamic Header](#10-dynamic-header)
  - [11. Local Storage and Session Storage](#11-local-storage-and-session-storage)
    - [11.1 What is Web Storage](#111-what-is-web-storage)
    - [11.2 Methods for both local and session storage](#112-methods-for-both-local-and-session-storage)
    - [11.3 Difference between Local Storage and Session Storage](#113-difference-between-local-storage-and-session-storage)
    - [11.4 How to store other types of data](#114-how-to-store-other-types-of-data)

## Introduction

### Why do we learn DOM ?

- It allow us to manipulate HTML elements.
- 製作動態網頁

### How to use JS in HTML ?

- 把 `<script>` tag 放在 `<body>` tag 下面
  ```jsx
  <script src="fileName.js"></script>
  ```
- 為什麼要為什麼放在最下面？

  - **It takes long time to render JS code. (We want to show something to user first)**
  - **Browser has to read all HTML and CSS before using DOM.**

## 1. Window Object

可以參考 : [The Window Object - w3school](https://www.w3schools.com/jsref/obj_window.asp)

### 1.1 Window Object Methods

| Name                 | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `alert()`            | 彈出警告視窗                                             |
| `prompt()`           | 彈出可以輸入的視窗                                       |
| `setInterval()`      | 間隔固定的延遲重複地時間執行一個函式呼叫或一個程式碼片斷 |
| `clearInteval(`)     | 清除 setInterval()                                       |
| `addEventListener()` | 加入事件監聽                                             |

### 1.2 Window Object Properties

**“OOP Concept : An object can be a property of another object.”**

#### Window Object Properties

| Name           |
| -------------- |
| Console        |
| Document       |
| LocalStorage   |
| SessionStorage |

上面這四個剛好都是 object，先討論前面兩個，後面兩個請看

#### Console Object

- is a property of window object.
- methods:
  - `log()` 、 `warn()` 、 `error()`

#### Document Object

- 進入本章重點

## 2. What exactly is DOM ?

- **Document is an Object.** (Also a property of window object.)
- **Document means the HTML document**.
- **This model means all HTML elements are objects.** (**It means that they all have its properties and methods.**)

- Big picture in DOM

![DOM.png](./src/DOM.png)

### 2.1 Document Object Properties

不常用到不討論

### 2.2 Document Object Methods

- `getElementsById()` 、 `getElementsByClass()` 這兩個不好用，現代少用，因此不多討論。
- 現在多用 `querySelector()` 、 `querySelectorAll()`
- `addEventListener()` 到 [8. Events](#8-events) 再討論
- `createElement()` 裡面放入 tag name (string) 就可以創建 new object
- `querySelector()`
  - 放入要查詢的 css seletor (string)
  - 只會 return 第一個滿足 css selector 條件的 html elements
- `querySelectorAll()`
  - 放入要查詢的 css seletor (string)
  - 只會 return 第一個滿足 css selector 條件的 html elements
  - return a NodeList, not an Array

## 3. Arrow Function Expression

- Js 中, function declaration 不一定要在使用的 code 上面 ([hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting))
  但 arrow function expression 有順序之分

### 3.1 Function Declaration

```jsx
// function declaration
sayHi("rjun");

function sayHi(name) {
  console.log("Hi, " + name);
}
```

### 3.2 Arrow Function Expression

```jsx
// arrow function expression
let sayHi = (name) => {
  console.log("Hi, " + name);
};

sayHi("rjun");
```

### 3.3 this Keyword

- 在 arrow function expression 裡面的 `this` 指的是 `Window` Object.
- 因此通常通常在 Object 內不會使用 arrow function expression
- **Example**

  ```jsx
  // this keyword
  let person = {
    name: "rjun",
    func() {
      console.log(this); // this is person Object here.
    },
    arrowFunc: () => {
      console.log(this); // this is Window Object here.
    },
  };

  person.func();
  person.arrowFunc();
  ```

  **console**

  ```jsx
  Object { name: "rjun", func: func(), arrowFunc: arrowFunc()}
  Window http://127.0.0.1:5500/index.html
  ```

## 4. forEach Function

### 4.1 What is **CallBack function ?**

function to execute on each element (array item).

### 4.2 forEach function

- **forEach function takes one parameter - function**
- **Example**

  ```jsx
  let nums = [215, 12, 512, 24, 56, 1, 7, 91];
  nums.forEach(function checkedNum(n) {
    if (n > 20) console.log(n);
  });
  ```

  forEach 內的 function 會自動執行，因此我們不需要設定 function 的名稱 (anonymous function)
  也因此可以搭配 arrow function expression

  ```jsx
  // 搭配 arrow function expression
  let nums = [215, 12, 512, 24, 56, 1, 7, 91];
  nums.forEach((n) => {
    if (n > 20) console.log(n);
  });
  ```

  也可以先在外面定義好 function 直接丟到 `forEach()` 裡

  ```jsx
  // forEach
  let nums = [215, 12, 512, 24, 56, 1, 7, 91];
  nums.forEach(checkedNum);

  function checkedNum(n) {
    if (n > 20) console.log(n);
  }
  ```

## 5. Array, HTMLCollection and NodeList

- **Array**, **HTMLCollection** and **NodeList** are similar ( `index` and `length` properties)
- **Array** and **NodeList** can use `forEach` method, but **HTMLCollection** cannot.
  這也是為什麼現在大家多用 NodeList 而非 HTMLCollection. - 例如：取得所有 class 為 second 的 object
  使用 `getElementsByClassName()` (現少用)

  ```jsx
  // HTMLCollection
  let secondElement = document.getElementsByClassName("second");
  ```

  使用 `querySelectorAll()` 已取得 NodeList

  ```jsx
  // NodeList
  let secondElement = document.querySelectorAll("second");
  ```

## 6. Element Object

- Different HTML element might have its own methods and property.
- **All HTML element must have properties and methods from this list**

  | Properties and Methods Name                               |
  | --------------------------------------------------------- |
  | `addEventListener() `                                     |
  | `appendChild()`                                           |
  | `children`                                                |
  | `childNode`                                               |
  | classList (`add()`, `remove()`, `toggle()`, `contains()`) |
  | `getAttribute()`                                          |
  | `innerHTML`, `innerText`                                  |
  | `parentElement`                                           |
  | `querySelector()`                                         |
  | `querySelectorAll()`                                      |
  | `remove()`                                                |
  | `style`                                                   |

### 6.1 Children and ChildNode

- `children` returns HTML elements
- `childNode` returns NodeList. (`document.querySelectorAll()` also returns NodeList)
- `parentElement`

### 6.2 InnerHTML and InnerText

- `innerHTML` 跟 `innerText` 後面都接 string，基本功能一樣
- 不同的是 `innerHTML` 可以放入 **html tag**，而 `innerText` 被當作**純文字**
- `.js` 中的程式碼可以覆蓋 `.html` 中的，因此可以透過此方式使網頁的 tag 或文字為動態的
- **Example**

  ```jsx
  let h1 = document.querySelector("h1.myH1");
  h1.innerHTML = "<mark>This is rjun.</mark>";
  ```

### 6.3 Style Object

- is a property of element object.
- is an object that is controlling the CSS styling of an element.
- hyphen (`-`) in JS is not allowed, therefore, CSS properties are changed to **"camelCase"**
- JS style object 是 inline-styling ( > id > class > ...)
- **Example** 兩種寫法

  ```jsx
  let button = document.querySelector("button");
  button.style = "background-color: red; color: white";
  ```

  ```jsx
  let button = document.querySelector("button");
  button.style.backgroundColor = "red";
  button.style.color = "white";
  ```

## 7. Inheritance in DOM

- All HTML elements inherit properties and methods from “element object.
- But some of them have its own methods.

## 8. Events

### 8.1 JS Events Introduction

- JS event are occurred when things happen in browser. (For example, resize the screen, click on a button, press a key on keyboard.)
- 事件發生時，需要偵探
- JS Events 發生時，需要 event listener.
- `addEventListener(event type, callback)`
- JS Events 都是 Object

### 8.2 Events Inheritance

![JS+Event+Inheritance.png](./src/JSEventInheritance.png)

參考: [DOM Events - W3Schools](https://www.w3schools.com/jsref/dom_obj_event.asp)

### 8.3 Event Object

| Propeties and Methods Name | Description                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| `target`                   | 事件的目標，an Object                                                            |
| `preventDefault()`         | 如果事件可以被取消，就取消事件的預設行為。但不會影響事件的傳遞，事件仍會繼續傳遞 |
| `stopPropagation()`        | 停止 bubble                                                                      |

## 9. Event Bubbling

若內外層都有 add 一樣 的 event listener ，內層啟動 event 會使外層也啟動 event，會像 bubble 一樣擴散到最外層。不過外層不會影響內層

**Example - 點擊內層 b 也會觸發 a**

```jsx
let a = document.querySelector("div.a");
let b = document.querySelector("div.b");

a.addEventListener("click", () => {
  alert("a's eventlistener's callback is running");
});

b.addEventListener("click", () => {
  alert("b's eventlistener's callback is running");
});
```

**如何停止呢？ 使用** `stopPropagation()` 。把 b 改成以下

```jsx
b.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("b's eventlistener's callback is running");
});
```

## 10. Dynamic Header

學會一點 event 後就可以來製作 dynamic header 了。要用到的有

- `window.pageYOffset` property
- `scroll` event
- `style` object

```jsx
let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "";
    });
  }
});
```

## 11. Local Storage and Session Storage

### 11.1 What is Web Storage

- Storage is a place to store data **in browser** (This is not database)
- `key-value` pair (Both have to be **string**. If the value is not a string, it would be typecast to a string.)

**怎麼看到網頁 storage ?**

- **FireFox**: f12 → Storage
- **Chrome**: f12 → Application

**小補充 Cookies :**

Briefly，Cookies are smaller and send server information back with every HTTP request, while LocalStorage is larger and can hold information on the client side.

### 11.2 Methods for both local and session storage

| Methods               | Description             |
| --------------------- | ----------------------- |
| `setItem(key, value)` | 新增 key-value pair     |
| `getItem(key)`        | 透過 key 取得 value     |
| `removeItem(key)`     | 透過 key 移除 key-value |
| `clear()`             | 清空 storage            |

### 11.3 Difference between Local Storage and Session Storage

生命週期不同, local > session.

Session storage is “destroyed” once the user closes the browser whereas, Local storage stores data with no expiration data.

### 11.4 How to store other types of data

- **JSON** means JavaScript Object Notation
- `JSON.stringify()` : 將 JSON 檔案變成字串
- `JSON.parse()` ：將 string 轉型成 JSON 格式

**Object, Array, Boolean .... 都可以用**

**Example:** 把 array 存進 local storage 拿出來還是 array

```jsx
let friends = ["John", "Evelyn", "Mike"];

localStorage.setItem("friends", JSON.stringify(friends));
let getFriends = JSON.parse(localStorage.getItem("friends"));
```

**Steps:**

**存進：array → `JSON.stringfy()` → string → `setItem()` → Local Storage**

**取出：Local Storage → `getItem()` → string → `JSON.parge()` → array**

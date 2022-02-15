# JavaScript - Advance 3

本章為零散但必須認識的小章節

## 1. How to make a copy of an array

---

```jsx
let arr1 = ['a', 'b', 'c']

let arr2 = arr1  // shallow copy : 只有複製記憶體，兩種還是同個物件

let arr3 = [...arr3]  // deep copy : 複製出一個新物件
```

## 2. Higher Order Function

---

- Higher Order function means a function that takes a function as a parameter.

## 3. Default Parameter

---

設置 default parameter 預防 `undefined`

**Example - 有設置 default parameter**

```jsx
function mutiply(a = 1, b = 1) {
  return a * b;
}

console.log(mutiply()) // 1
```

**若沒設置 default parameter，沒傳入的變數會變成 `undefined`**  

```jsx
function mutiply(a, b) {
  return a * b;
}

console.log(mutiply())  // NaN
```

## 4. Back-tick

---

using ```` 避免輸出字串時放入一堆 `+`
裡面的變數要用 `${}` 包起來

**Example**

```jsx
let myName = "rjun"
console.log(`Hi, my name is ${myName}`)  //Hi, my name is rjun
```

## 5. Strong and Weak Typing

---

這裡的 typing 是指 **data type.**

- **Strongly Typed** **宣告時就要決定 data type**
    - 如: Java, Ruby...
- **Weakly Typed**  **宣告時不需決定 data type**
    - 如: JS, Python...

## 6. Floating point

---

- 電腦是二進制，沒辦法把小數點表示得非常精確
- 因此要比較兩小數時可以透過 `toFix()` 決定位數以達到較為準確的比較

## 7. IIFE

---

IIFE means **Immediately Invoked Function Expression**

- 用 `()` 把 function 包起來，會直接執行
- 通常在 library source code 才會看到
- 可以放入 anonymous function ，也能省去過多 global variables

**Example** 

```jsx
(function (name) {
  console.log("Hello! " + name)
})("rjun")
```

## 8. Destructing an Object

---

提取物件中的資料，使用 `let{} =` 可以一次提取多個

**Example**

```jsx
let rjun = {
  myName: "rjun",
  myAge: 19,
  height: 178
}

let { myName, myAge } = rjun
console.log("rjun's name is " + myName + " and the age is " + myAge)  
// rjun's name is rjun and the age is 19
```

## 9. Switch expression

---

**Syntax**

```jsx
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```
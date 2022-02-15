# JavaScript - Advance 1

# What is JavaScript

---

- JavaScript 並不是由任何語言並不是由任何語言所寫成。
它只是一個由 ECMA 制定的標準。
- 最有名的更新在 2015，ES6 (ECMA Script 6)
- 每個瀏覽器都有各自的 JS 引擎。引擎專門理解與處理 JavaScript 的程式碼

# 1. 串接陣列

---

## 1.1  在 Js 如何串接陣列

- 在 JS 中如果使用 `+`
    
    ```jsx
    let arr1 = ['a', 'b', 'c']
    let arr2 = ['d', 'e', 'f']
    
    let res = arr1 + arr2
    console.log(res)
    ```
    
    會變成字串
    
    ```jsx
    a,b,cd,e,f
    ```
    
- 如果要串接後仍為陣列，我們要用 `concat()` function
    
    ```jsx
    let res = arr1.concat(arr2)
    console.log(res)
    ```
    
    出來就還是陣列
    
    ```jsx
    [ 'a', 'b', 'c', 'd', 'e', 'f' ]
    ```
    
- 也可以使用 Spread operator & rest parameter `...`
    
    ```jsx
    let res = [...arr1, ...arr2]
    console.log(res)
    ```
    
    output
    
    ```jsx
    [ 'a', 'b', 'c', 'd', 'e', 'f' ]
    ```
    

## 1.2  判斷是否為陣列

使用 `Array.isArray()`

```jsx
arr = ['a', 'b', 'c']
```

## Spread Operators and Rest Parameters

- `...` is a spread operator
- The rest parameter syntax allow us to represent an indefinite number of arguments as an array.

# 2. NaN and Infinity

---

- `NaN` is a number (data type)
- `Infinity` is a number (data type)
- `NaN` appears when we are trying to do some math calculations of numbers with string, or other kinds of weird things.

微積分裡面的不定型就會變成 `NaN` , for example

```jsx
console.log(Infinity / Infinity)  // NaN
console.log(0 * Infinity)  // NaN
console.log(0 / 0)  // Nan
```

NaN 不等於 NaN，因為 NaN 可能是不定型的任何一種，因此他們的值是不會相等的

```jsx
console.log(NaN == NaN)  // false
console.log(NaN === NaN)  // false
```

因此要確認一個值是不是 NaN 要用 `isNaN()`

```jsx
let res = 0 / 0;
console.log(isNaN(res))  // true
```

# 3. Primitive and Reference

---

## 3.1  Primitive Data Type

- Primitive Data Types means that they are not objects, and they don’t have its own properties and methods
- Also, these primitive data types container variables do own the value, not just a reference to the memory.

### Why do primitive still own properties and methods ?

- We stated that primitive don’t have properties and methods, but apparently, we still access properties and use methods. Why is that possible ? (ex. A string can use .length to get the property and toLowerCase() function)
- JavaScript has a property called **coercion**, when it comes to primitives; it silently **converts the primitive to an object** and then accesses the prototype method of the newly constructed object.
- If we want to, their is an object syntax to create a string, but what it does is just making extra memory allocation to this string, JS doesn’t recommend using this kind of string declaration.

## 3.2  Reference Data Type

- Objects and Array are reference data type.
- Variable that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

# 4. Advanced Array Functions

### `map()`

- **creates a new array** populated with the results of calling a provided function (callback function) on every element in the calling array

### `find()` 、 `filter()`

- find 只回傳在 array 中第一個符合條件的 element。若沒有符合條件的則回傳 `undefined`.
- filter 回傳在 array 中所有符合條件的 elements。若沒有符合條件的則回傳一個 empty array.

### `some()` 、`every()`

- some 檢查 array 中只要有一個 element 符合條件就回傳 `true`
- filter 檢查 array 中所有 element 都要符合條件才回傳 `true`

### `sort()`

- 可以透過 callback function 改變排序的規則，若沒設置一率視為 string comparison (一個一個字比)
- **EX1 - 按照字串長度**
    
    ```jsx
    let arr = ["Apple", "Lemon", "Watermelon", "Orange"]
    console.log(arr.sort((a, b) => {
      return a.length - b.length
    }))  // [ 'Apple', 'Lemon', 'Orange', 'Watermelon' ]g
    ```
    
- **EX2 - 數字小到大**
    
    ```jsx
    let arr = [125, 12, 41, 51, 25, 120]
    console.log(arr.sort((a, b) => {
      return a - b;
    }))  // [ 12, 25, 41, 51, 120, 125 ]
    ```
    
- **EX3 - 數字大到小**
    
    ```jsx
    console.log(arr.sort((a, b) => {
      return b - a;
    }))  // [ 125, 120, 51, 41, 25, 12 ]
    ```
    

# 5. More For Loop

---

- 前面學了 for loop 以及 forEach ，現在就來學第三種以及第四種

## 5.1  for of loop

- The for...of statement creates a loop iterating over **iterable objects**, including: built-in String, Array, array-like objects (e.g., NodeList)
- 只能用在 iterable 的物件
- 可以增加程式碼閱讀性

**EX**

```jsx
let arr = ['a', 'b', 'c']

for (let c of arr) {
  console.log(c)
}
```

## 5.2  for in loop

- The for..in statement iterates over **all enumerable properties of an object** that are keyed by strings
- 可以用在 array 也能用在 object

**EX**

```jsx
let person = {
  name: "rjun",
  age: 19,
  height: 178
}

for (let i in person) {
  console.log(i)  // name age height
  console.log(person[i])  // rjun 19 178
}
```
# JavaScript - Basics 2

## Table of Contents

- [JavaScript - Basics 2](#javascript---basics-2)
  - [Table of Contents](#table-of-contents)
  - [1. Logical Operators](#1-logical-operators)
  - [2. If statement and condition](#2-if-statement-and-condition)
  - [3. Truthy and Falsy Values](#3-truthy-and-falsy-values)
  - [4. Variable Naming Convention and Restriction](#4-variable-naming-convention-and-restriction)
    - [4.1 Naming convention](#41-naming-convention)
    - [4.2 Naming restriction](#42-naming-restriction)
  - [5. Array](#5-array)
  - [6. Function](#6-function)
  - [7. Object](#7-object)
    - [7.1 Object Property and Method](#71-object-property-and-method)
    - [7.2 this](#72-this)
    - [7.3 typeof](#73-typeof)
  - [8. Loops](#8-loops)
    - [8.1 Loops](#81-loops)
    - [8.2 Keywords in loop](#82-keywords-in-loop)
- [9. Math Objects](#9-math-objects)

## 1. Logical Operators

Returns a Boolean value

| Logical Operators Name | Description        |
| ---------------------- | ------------------ |
| `===` 、 `!==`         | 比較 type 跟 value |
| `==` 、`!=`            | 只比較 value       |
| `&&` 、 `\|\|`         | AND & OR           |

## 2. If statement and condition

**補充**

在 JavaScript 中，無法與 `NaN` 比較，一定會回傳 `false`，
必須使用 `isNaN()` 才能達到正確判別

**Example**

```jsx
let a = 10;

if (a > 10) {
  console.log("a is bigger than 10.");
} else if (a == 10) {
  console.log("a is equal to 10.");
} else {
  console.log("a is smaller than 10.");
}
```

## 3. Truthy and Falsy Values

**Falsy Value is considered to be `false` when encountered in Boolean context.**

1. `false`
2. `0`
3. `“”`
4. `null`
5. `undefined`
6. `NaN`

除此 6 個外都是 _truthy value_。truthy 不代表 true，而是依照 value 為 `true` 或是 `false`。

## 4. Variable Naming Convention and Restriction

### 4.1 Naming convention

| Name                       | Example    | Description                                                              |
| -------------------------- | ---------- | ------------------------------------------------------------------------ |
| **camelCase**              | `isPrime`  |                                                                          |
| **underline**              | `is_prime` |                                                                          |
| **`const` with uppercase** | `PI`       | A variable declaration. That can be assigned a value one and _only once_ |

### 4.2 Naming restriction

- cannot start with number
- cannot using hyphen in Js
  - hyphen `-` 是留給減法用的所以不能用在 variable naming
- cannot using reserved words in Js

## 5. Array

**Introduction to Array**

1. is a special type of _object_, not a primitive type.
2. comes in handy when you need to store data together.
3. syntax : `[]`
4. array’s property : `index` 、`length`

**Common Methods**

| Method Name | Description              |
| ----------- | ------------------------ |
| `push()`    | 增加一個元素在陣列最後   |
| `pop()`     | 減少陣列最後一個元素     |
| `shift()`   | 減少陣列最前一個元素     |
| `unshift()` | 增加一個元素在陣列最前面 |

## 6. Function

- A **_function_** in JavaScript is similar to a procedure - a set of statements that perform a task or calculate a value
- There are JS built-in functions, and you can create your own functions too.
- function 裡面還可以有 function

**Example**

```jsx
function plusTen(x) {
  return x + 10;
}

num = plusTen(5);
console.log(num);
```

## 7. Object

### 7.1 Object Property and Method

```jsx
let person = {
  // properties setting
  name: "rjun",
  age: 19,
  isStudent: true,

  // methods setting
  sayHi() {
    console.log("rjun says hi");
  },
  walk() {
    console.log("rjun is walking on the street.");
  },
};

// getting object's properties : [], dot notation
console.log(person["name"]);
console.log(person.name);

// using methods
person.walk();
```

### 7.2 this

`this` refers to the object that us calling the method.

otherwise, it refers to the `window` object.

### 7.3 typeof

回傳輸入參數的型別

```jsx
console.log(typeof person); // object
```

## 8. Loops

### 8.1 Loops

Loops offer a quick and easy way to do something repeatedly

- for loop
- while loop

### 8.2 Keywords in loop

| Syntax      | Descriptioon   |
| ----------- | -------------- |
| `continute` | 跳到下一個迴圈 |
| `break`     | 中斷整個迴圈   |

# 9. Math Objects

| Math Properties and Functions | Description   |
| ----------------------------- | ------------- |
| `Math.PI`                     | pi            |
| `Math.pow(a, b)`              | power         |
| `Math.random()`               | return [0, 1) |
| `Math.sqrt()`                 | square root   |
| `Math.abs()`                  | absolue       |
| `Math.floor()`                | 小數取下      |
| `Math.ceiling()`              | 小數取上      |

(For those who understand Java) In JavaScript, many methods and properties are **_static_**, therefore, we don’t have to instantiate Math Object first.

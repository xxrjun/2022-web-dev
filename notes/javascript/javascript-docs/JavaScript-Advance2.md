# JavaScript - Advance 2

- [JavaScript - Advance 2](#javascript---advance-2)
  - [1. Global Execution Context](#1-global-execution-context)
    - [1.1 Creation Phase](#11-creation-phase)
    - [1.2 Execution Phase](#12-execution-phase)
  - [2. Hoisting](#2-hoisting)
  - [3. Scope](#3-scope)
    - [3.1 What is Scope ?](#31-what-is-scope-)
    - [3.2 Closure (Scope Chaining)](#32-closure-scope-chaining)
  - [4. CallStack](#4-callstack)
  - [5. Constructor Function](#5-constructor-function)
  - [6. Prototype](#6-prototype)
  - [7. Function Methods](#7-function-methods)
  - [8. Class](#8-class)
    - [8.1 What is Class ?](#81-what-is-class-)
    - [8.2 Class Inheritance](#82-class-inheritance)
    - [8.3 Static Properties and Methods](#83-static-properties-and-methods)

## 1. Global Execution Context

### 1.1 Creation Phase

- Window object gets **_instantiated_**
- _scope chain_ gets created, follow the principle of _closure_
- `this` keyword gets generate (points to the window object)
- **memories get allocated** to all the functions declaration variable and `var` variables ad function declaration, except for the `let` and `const` and function expression. (**Hoisting**)

### 1.2 Execution Phase

- Run the code _line by line_ followed the principle of **callstack**

## 2. Hoisting

- **memories get allocated** to all the functions declaration variable and `var` variables ad function declaration, except for the `let` and `const` and function expression.
- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

## 3. Scope

### 3.1 What is Scope ?

- Scope determines the _accessibility_ (also called _visibility_) of these variables
- There are three types of scope in JS
  1. Global Scope (`var` 、 `let` 、 `const`)
  2. Function Scope (`var` 、 `let` 、 `const`)
  3. Block Scope (`let` 、 `const`)

![variables.png](./src/variables.png)

### 3.2 Closure (Scope Chaining)

- In function execution context, if they find a variable that was not declared inside the function, JavaScript will **go to the global variables and find**.
- Global means
  1. where the memory was allocated to the function
  2. a lower function of the call stack where the memory was allocated to, and keep searching down.

⇒ 簡單來說，先在 block 裡面找，找不到就往外找

## 4. CallStack

- **stack** is a type of data structure (**LIFO**, Last In First Out).
- CallStack means that since JS is a **single-thread** programming language, so it _only does one thing at one time_, therefore, it needs a way to keep track of the execution context, and that is the callstack.

## 5. Constructor Function

- Naming convention: starts with Uppercase letter
- Used with `new` keyword

可以用來創造大量相似的物件

**Example**

```jsx
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + " says hi.");
  };
}

let Mike = new Person("Mike", 23);
let John = new Person("John", 19);

console.log(Mike);
console.log(John);

Mike.sayHi();
John.sayHi();
```

```jsx
Person { name: 'Mike', age: 23, sayHi: [Function (anonymous)] }
Person { name: 'John', age: 19, sayHi: [Function (anonymous)] }
Mike says hi.
John says hi.
```

**Problem**

使用 `new` 出來的物件擁有各自的記憶體，連 funtion 也變成各自都有
這樣 `new` 100 個 objects，就會有 100 個 `sayHi` 。將造成不必要的記憶體浪費

```jsx
console.log(Mike.sayHi === John.sayHi); // false
```

因此我們希望當 Mike 跟 John 要執行 `sayHi()` 的時候，都能找到同一個 `sayHi` 。
而這是下一章 [Prototype](#6-prototype) 要討論的概念。

## 6. Prototype

- Prototype is **a simple reference to another object**; this object contains common properties and methods across all instances

**偏難用，特別牽涉到 inheritance 時，因此 ES6 推出 class**

(真的超難用，我這邊看了一下索性跳過)

## 7. Function Methods

- Functions are **objects** in JS.
- Several Functions

  | Name      | Description                                                                     |
  | --------- | ------------------------------------------------------------------------------- |
  | `bind()`  | 讓 function **綁定**特定物件，會回傳綁定物件後的原 function.                    |
  | `call()`  | 跟 bind 類似，不過更實用，因為會直接執行，不需回傳新的 function.                |
  | `apply()` | 跟 call 類似，直接執行。不過後面除了綁定的物件外，輸入的參數需要放進一個 array. |

## 8. Class

### 8.1 What is Class ?

- JavaScript classes, introduced in ES6, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance.
- The class syntax does not introduce a new object-oriented inheritance model to JavaScript (只是換語法，因此跟 Java 不同)

**Example**

```jsx
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  sayHi() {
    console.log(this.name + " says hi.");
  }

  intro() {
    console.log("Hi, I'm " + this.name);
  }
}

let Mike = new Person("Mike", 23);
let John = new Person("John", 19);
console.log(Mike.sayHi === John.sayHi); // true
```

### 8.2 Class Inheritance

使用 `extends` 去做繼承
可以做 `override` ，記憶體也會指向不同地方

```jsx
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  // override
  sayHi() {
    console.log("Student " + this.name + "says Hi");
  }
  study() {
    console.log("I'm study " + this.major);
  }
}

let Jack = new Student("Jack", 23, "CS");
console.log(Mike.sayHi === Jack.sayHi); // false
```

### 8.3 Static Properties and Methods

當一個 class 中的 property 或是 method 設為 _static_ 時，**該 property 或 method 屬於 class，而不屬於新增的物件**

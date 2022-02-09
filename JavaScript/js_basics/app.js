let rjun = {
  myName: "rjun",
  myAge: 19,
  height: 178
}

let { myName, myAge } = rjun
console.log("rjun's name is " + myName + " and the age is " + myAge)


// (function (name) {
//   console.log("Hello! " + name)
// })("rjun")

// let myName = "rjun"
// console.log(`Hi, my name is ${myName}`)  //Hi, my name is rjun


// function mutiply(a, b) {
//   return a * b;
// }

// console.log(mutiply())

// let arr1 = ['a', 'b', 'c']
// let arr2 = arr1  // swallow copy : 只有複製記憶體，兩種還是同個物件

// let arr3 = [...arr3]  // deep copy : 複製出一個新物件

// class Person {
//   constructor(name, age) {
//     this.name = name,
//     this.age = age
//   }

//   sayHi() {
//     console.log(this.name + " says hi.")
//   }

//   intro() {
//     console.log("Hi, I'm " + this.name)
//   }
// }

// let Mike = new Person("Mike", 23)
// let John = new Person("John", 19)
// console.log(Mike.sayHi === John.sayHi)


// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age)
//     this.major = major
//   }
//   sayHi() {
//     console.log("Student " + this.name + "says Hi")
//   }
//   study() {
//     console.log("I'm study " + this.major)
//   }
// }

// let Jack = new Student("Jack", 23, "CS")
// Jack.sayHi()
// Jack.study()
// console.log(Mike.sayHi === Jack.sayHi)

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function() {
//     console.log(this.name + " says hi.")
//   }
// }



// console.log(Mike.sayHi === John.sayHi)



// let person = {
//   name: "rjun",
//   age: 19,
//   height: 178
// }

// for (let i in person) {
//   console.log(i)  // name age height
//   console.log(person[i])  // rjun 19 178
// }

// let arr = ['a', 'b', 'c']

// arr.forEach(c => {
//   console.log(c)
// })


// for (let c of arr) {
//   console.log(c)
// }


// let arr = ["Apple", "Lemon", "Watermelon", "Orange"]
// console.log(arr.sort((a, b) => {
//   return a.length - b.length
// }))  // [ 'Apple', 'Lemon', 'Orange', 'Watermelon' ]


// console.log(arr.sort((a, b) => {
//   return a - b;
// }))  // [ 12, 25, 41, 51, 120, 125 ]

// console.log(arr.sort((a, b) => {
//   return b - a;
// }))  // [ 125, 120, 51, 41, 25, 12 ]

// arr = ['a', 'b', 'c']
// console.log(Array.isArray(arr))  // true

// let res = 0 / 0;
// console.log(isNaN(res))  // true


// console.log(Infinity / Infinity)  // NaN
// console.log(0 * Infinity)  // NaN
// console.log(0 / 0)  // Nan

// let arr1 = ['a', 'b', 'c']
// let arr2 = ['d', 'e', 'f']

// let res = [...arr1, ...arr2]
// console.log(res)


// console.log(4 * "hi");

// let friends = ['John', 'Evelyn', 'Mike']
// localStorage.setItem("friends", friends);
// let val = JSON.parse(localStorage.getItem("friends"))
// console.log(val);
// let a = document.querySelector("div.a");
// let b = document.querySelector("div.b");

// a.addEventListener("click", () => {
//     alert("a's evnetlistener's callback is running");
// })

// b.addEventListener("click", e => {
//     e.stopPropagation();
//     alert("b's evnetlistener's callback is running");
// })


// HTMLCollection
// let secondElement = document.getElementsByClassName("second");


// let h1 = document.querySelector("h1.myH1");
// h1.innerHTML = "<mark>This is rjun.</mark>"

// let button = document.querySelector("button");
// // button.style = "background-color: red; color: white";
// button.style.backgroundColor = "red";
// button.style.color = "white";


// // forEach
// let nums = [215, 12, 512, 24, 56, 1, 7, 91]
// nums.forEach( (n) => {
//     if (n > 20) console.log(n);
// })




// // this keyword
// let person = {
//     name: "rjun",
//     func() {
//         console.log(this)
//     },
//     arrowFunc: () => {
//         console.log(this)
//     }
// }

// person.func()
// person.arrowFunc()


// // function declaration
// sayHi("rjun");

// function sayHi(name) {
//     console.log("Hi, " + name);
// }




// // arrow function expression
// let sayHi = (name) => {
//     console.log("Hi, " + name);
// };

// sayHi("rjun");

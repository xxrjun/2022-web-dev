let friends = ['John', 'Evelyn', 'Mike']
localStorage.setItem("friends", friends);
let val = JSON.parse(localStorage.getItem("friends"))
console.log(val);
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

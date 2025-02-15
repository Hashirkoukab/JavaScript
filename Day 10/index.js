// Data type in JavaScript:

// A) Primitive Data Types
// 1) String --> "ABC" / 'abc'
// 2) Numbers --> 0-9
// 3) Boolean --> True / False
// 4) Null --> null
// 5) Undefined --> undefined
// 6) Symbol --> X
// 7) BigINT --> X

// B) Non-Primitive Data Types
// 1) Objects -->
// 2) Arrays --> List of elements

// B) Non-Primitive Data Types
// 1) Objects -->
// 2) Arrays --> List of elements
console.log("run")
// Name
let greetings = document.getElementById("starting")
let userName = prompt("Enter your name:")
let greet = `Assalamu Alaikum Wa Rahmatu Allahi Wa Brakatuh, ${userName}!`
greetings.innerText = greet
// Add
let add = document.getElementById("add")
let num1 = +prompt("Enter a bigger num than next question:")
let num2 = +prompt("Enter a small number:")
let op1 = `${num1} + ${num2} = ${num1 + num2}`
add.innerText = op1
// subtract
let sub = document.getElementById("sub")
let op2 = `${num1} - ${num2} = ${num1 - num2}`
sub.innerText = op2

// Data type in JavaScript:

// A) Primitive Data Types
// 1) String --> "ABC" / 'abc'
// 2) Numbers --> 0-9
// 3) Boolean --> True / False
// 4) Null --> null
// 5) Undefined --> undefined
// 6) Symbol --> ❌
// 7) BigINT --> ❌

// B) Non-Primitive Data Types
// 1) Objects -->
// 2) Arrays --> List of elements

// B) Non-Primitive Data Types
// 1) Objects -->
// 2) Arrays --> List of elements
console.log("run")

// Conditional Statement
let fryPan = true

console.log("I am hungry!")

if (fryPan) {
    console.log("Egg Fry")
} else {
    console.log("Egg Boil")
}

console.log("Now, I am full.")

let vote = document.getElementById("vote")
let age = +prompt("Enter your age:")
if (age > 18) {
    vote.innerText = "Eligible to vote!"
} else {
    vote.innerText = "Not eligible to vote." 
}

let str1 = prompt("Lets check if the string you choose will be long or not!")
let lenOfstr1 = str1.length
if (lenOfstr1 > 10) {
    console.log("The string is too long.")
} else {
    console.log("The string is fine.")
}

// Practice

let hour = +prompt("What is hour?")
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
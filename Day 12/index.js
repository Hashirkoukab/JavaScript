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

// Comparison Operators

// < = less than
// > = greater than
// == = EQUAl
// != = NOT EQUAL
// <= = less than or equal
// >= = greater than or equal

let num1 = 5
let num2 = 3
let num3 = 10
let num4 = 5

console.log(num1 < num2)
console.log(num1 > num2)
console.log(num1 == num2)
console.log(num1 != num3)
console.log(num1 > num4)
console.log(num1 <= 8)

// If / Else  'Nested'
let userNames = prompt("Enter your Full Name for logining UTech Account")
let password1 = prompt("Enter your Password for logining UTech Account")

//if (userNames = )
if (userName = 'Muhammad Hashir') {
if (password1 = 'Nicyykidshashir') {
      console.log("You are logged in ✅")
    } else {
         console.log("Invalid Password ❌")
     }
 } else {
     console.log('Create an account')
 }

// If / Else 'Nested'
let userName = prompt("Enter your Full Name for logining UTech Account")
let password = prompt("Enter you password:")

if (userName == 'Shaheer') {
    if (password == 'fashaheer'){
        console.log("Welcome Shaheer Ahmed! You are logged in✅")
    } else {
        console.log("Invalid password")
    }
} else if (userName == 'Hashir') {
    if (password == 'Nkihashir') {
        console.log("Welcome Muhammad Hashir! You are logged in✅")
    } else{
        console.log("Invalid password")
    }
} else {
    console.log("Create an account")
}
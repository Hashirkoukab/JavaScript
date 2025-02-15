// Personal Greeting
let FirstName = prompt("Enter your first name:")
let LastName = prompt("Enter your last name:")
console.log("Hello, " + FirstName + " " + LastName + "! Nice to meet you!.")

// Number Manipulation
let number = 5
number++
console.log("After incrementing: " + number)

number--
console.log("After decrementing: " + number)

// Simple Addition Program
let num1 = +prompt("Enter a digit for num1:")
let num2 = parseInt(prompt("Enter a digit for num2:"))
console.log(num1 + num2)

// Type Casting practice
let userInput = prompt("Please enter a number:")
console.log("Type of userInput (before conversion):", typeof userInput)
let numberInput = parseInt(userInput)
console.log("Type of numberInput (after conversion):", typeof numberInput)

// Simple Calculator
let numb1 = +prompt("Enter a number:")
let numb2 = +prompt("Enter another number:")
console.log(numb1 + numb2)
console.log(numb1 - numb2)
console.log(numb1 * numb2)
console.log(numb1 / numb2)

// Calculating Square
let length = +prompt("Enter Length:")
let width = +prompt("Enter Width:")
console.log(length * width)
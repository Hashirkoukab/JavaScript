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
console.log("run")
 // Type Casting
 //String data type --> Number data type ( Manual )
 let numb1 = +prompt("Store any number in numb1:")
 console.log(numb1 + 1)

 // Number data type --> String data type (Auto)
 let numb2 = +prompt("Store any other number in numb2:")
 console.log(numb2 + '1')

 // Welcome Message
 let userName = prompt("Enter your name")
 console.log("Hello, " + userName + "! Welcome to our site!")

  //Simple Calculator

 let num1 = +prompt("Enter the first number:")
 let num2 = +prompt("Enter the second number:")

 console.log(num1 + num2) // 62
 console.log(num1 - num2) // 63
 console.log(num1 * num2)
 console.log(num1 / num2)

 // Calculating the Square

let length = +prompt("Enter any Number for Length:")
let height = +prompt("Enter any Number for Height:")
console.log("The area of the Square is " + length * height)
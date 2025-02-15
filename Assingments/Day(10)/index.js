// Task 1
let para1 = document.getElementById("para1")
let UserName = prompt("Enter you Name!")
let color = prompt("What is you favourite color!")
let sen1 = `Assalamu Alaikum Wa Rahmatu Allahi Wa Barakatuh, ${UserName}!, 
your favourite color is ${color}!`
para1.innerText = sen1

// Task 2
// Take it in JS file
let sum = document.getElementById("sumResult")
let sub = document.getElementById("subResult")
let mul = document.getElementById("mulResult")
let div = document.getElementById("divResult")

// Use their own number
let num1 = +prompt("Enter your first favourite num to change with...")
let num2 = +prompt("me?")

// Calculate
sum.innerText = `${num1 + num2}`
sub.innerText = `${num1 - num2}`
mul.innerText = `${num1 * num2}`
div.innerText = `${num1 / num2}`

// Task 3
let para2 = document.getElementById("introParagraph")
para2.innerText = "Welcome to my first JavaScript project!"

// Task 4
let favnum = document.getElementById("favNumber")
let favoriteNumber = prompt("What is your favorite number?")
favnum.innerText = favoriteNumber

// Task 5
let square = document.getElementById("squareResult")
let squarenum = +prompt("Enter square number?")
square.innerText = squarenum * squarenum
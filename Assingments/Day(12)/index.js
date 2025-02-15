// Task 1
let voteResult = document.getElementById("voteResult")
let userAge = +prompt("Enter your age?")
if (userAge > 17) {
    voteResult.innerText = "Eligible to vote🎉🎉🎉"
} else {
    voteResult.innerText = "Not Eligible to vote🏫"
}

// Task 2
let num1 = 8
let num2 = 13

console.log("Is num1 less than num2?", num1 < num2); // true
console.log("Is num1 greater than num2?", num1 > num2); // false
console.log("Are num1 and num2 equal?", num1 === num2); // false
console.log("Is num1 not equal to num2?", num1 !== num2); // true
console.log("Is num1 greater than or equal to num2?", num1 >= num2); // false
console.log("Is num1 less than or equal to 8?", num1 <= 8); // true

// Task 3
let hour = +prompt("Please enter the current hour (0-23):")
if (hour >= 5 && hour <= 11) {
    console.log("Good Morning🌅!")
} else if (hour >= 12 && hour <= 17) {
    console.log("Good Afternoon!")
} else if (hour >= 18 && hour <= 21) {
    console.log("Good Evening🌆!")
}  else {
    console.log("Good Night🌃!")
}

// Task 4
let password = prompt("Please enter your password:")
if (password.length >= 8) {
    console.log("Strong password 💪")
} else {
    console.log("Weak password")
}

// Task 5
let temperature = +prompt("Enter the current temperature in °C:")
let tempStatusElement = document.getElementById("tempStatus")

if (temperature > 30) {
    tempStatusElement.innerText = "It's hot🔥!"
} else if (temperature >= 15 && temperature <= 30) {
    tempStatusElement.innerText = "It's moderate."
} else if (temperature < 15) {
    tempStatusElement.innerText = "It's cold🥶!"
} else {
    tempStatusElement.innerText = "Please enter a valid number."
}

// Task 6
let num3 = +prompt("Enter first number.")
let num4 = +prompt("Enter second number.")
let num5 = +prompt("Enter third number.")
let largest
if (num1 >= num2 && num1 >= num3) {
    largest = num1
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2
  } else {
    largest = num3
  }
// Task 7
let num6 = +prompt("enter an even or odd number")
if (num6%2 == 0) {
    console.log("The number is even")
} else {
    console.log("The number is odd")
}

// Task 8
let secretNumber = 20

// Prompt the user to guess the number
let userGuess = +prompt("Guess the secret number (between 1 and 10):")

// Check the user's guess
if (userGuess == secretNumber) {
    console.log("Correct! You guessed the number!")
} else if (userGuess > secretNumber) {
    console.log("Too high! Try again.")
} else {
    console.log("Too low! Try again.")
}

// Task 9
let year = +prompt("Enter a year:")
if (year % 4 == 0) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year")
}

// Task 10
let genre = prompt("What's your favorite genre? (action, comedy, drama)").toLowerCase()
if (genre == "action") {
    console.log("You might enjoy: Mad Max Fury Road")
} else if (genre == "comedy") {
    console.log("You might enjoy: The Grand Budapest Hotel")
} else if (genre == "drama") {
    console.log("You might enjoy: The Shawshank Redemption")
} else {
    console.log("Try something new!")
}

// Task 11
let num7 = +prompt("Enter the first number:")
let num8 = +prompt("Enter the second number:")
let operation = prompt("Enter an operation (+, -, *, /):")
if (operation == "+") {
    console.log(num7 + num8)
} else if (operation == "-") {
    console.log(num1 - num2)
} else if (operation == "*") {
    console.log(num1 * num2)
} else if (operation == "/") {
    if (num2 !== 0) {
        console.log(num1 / num2)
    } else {
        console.log("Error: Division by zero is not available.")
    }
} else {
    console.log("Please enter one of +, -, *, /.")
}
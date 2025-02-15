// Number Gussing Game
let number = Math.ceil(Math.random() * 100)
let ans = false

for (let i = 0; i < 10; i++) {
    let guess = +prompt("Guess a number between 1 and 100:")

if(number > guess) {
    console.log("You Guess a Smaller number")
} else if (number < guess) {
    console.log("You Guess a Bigger Number")
} else {
    console.log("You Won")
    break
    }
 }

 if (ans == false) {
    console.log('The correct answer was ' + number)
 }
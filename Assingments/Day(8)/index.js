console.log("running")

// Task 1
let numt1 = 3.14159
let floatedNum = numt1.toFixed(2)
console.log(floatedNum)

// Task 2
let numt2 = 52
let tostringnum = numt2.toString()
console.log("Type of num after coversion:", typeof tostringnum)

// Task 3
let numt3 = 25
let str3 = "nan task"
console.log(isNaN(numt3)) // false
console.log(isNaN(str3)) // true

// Task 4
let numt4 = "9"
let innum = parseInt(numt4)
console.log(innum)
 
// Task 5
// function = functionName()
// method = object.function()
// property = object.property

// Task 6
let Name6 = prompt("Enter your name:")
console.log(Name6.length)

// Task 7
let str7 = prompt("Enter a random string:")
let upstr7 = str7.toUpperCase()
let lowstr7 = str7.toLowerCase()
console.log(upstr7)
console.log(lowstr7)

// Task 8
let str8 = "Hello, World!"
console.log(str8[0])

// Task 9
let Name9 = prompt("Enter your name")
console.log("The last letter of your name is: " + Name9.slice(-1))

// Task 10
let sentence = prompt("Please enter a sentence")
let letter = prompt("Please enter a letter that contains in the sentence for finding the position of the letter")
let position = sentence.indexOf(letter);

if (position !== -1) {
    console.log(`The first occurrence of ${letter} is at position: ${position}`)
} else {
    console.log(`The letter ${letter} is not found in the sentence.`)
}

// Task 11
let sentence11 = prompt("Please enter a sentence:")
let wordToReplace = prompt("Enter the word you want to replace:")
let newSentence = sentence11.replace(wordToReplace, "JavaScript")
console.log("Updated sentence: " + newSentence)

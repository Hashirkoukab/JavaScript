// More on functions
function calculation(num1, num2, operator) {
    let result
    if (operator == "+") {
        result = num1 + num2
    } else if (operator == "-") {
        result = num1 - num2
    } else if (operator == "*") {
        result = num1 * num2
    } else if (operator == "/") {
        result = num1 / num2
    } else (
        result = null
    )
    return result
}

let userNum1 = +prompt("Enter the first number:")
let userNum2 = +prompt("Enter the second number:")
let useroperator = prompt("Enter the operator(+, -, *, /):")

let calling = calculation(userNum1, userNum2, useroperator)

if (calling != null) {
    console.log(calling)
} else {
    console.log("Invalid Operation")
}
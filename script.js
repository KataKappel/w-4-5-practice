function myFunc() {
    console.log("This is my function")
}

myFunc()

function greetMe(name) {
    console.log(`Hello ${name}!`)
}

greetMe("Kata")

function addTwoNumbers(number1, number2) {
    let sum = number1 + number2;
    console.log(`The sum of two numbers (${number1}, ${number2}) is: ${sum}.`)
    return sum
}

addTwoNumbers(10, 2)

let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log(`the result of resultOfAddTwoNumbers is: ${resultOfAddTwoNumbers}`)

function cbExample() {
    console.log("I am a callback function")
}

cbExample()

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Ricsi", cbExample)






const greet = () => 'Hello, World!'
console.log(greet())

// eslint-disable-next-line no-unused-vars
const calcOrderCost = (order) => order.quantity * order.priceEa

function doSomethingWithNumber(number, callbackFunction) {
  return callbackFunction(number)
}

function divideByTwo(number) {
  return number / 2
}

function double(number) {
  return number * 2
}

function triple(number) {
  return number * 3
}

doSomethingWithNumber(10, divideByTwo) // 5
doSomethingWithNumber(10, double) // 20
doSomethingWithNumber(10, triple) // 30
console.log(doSomethingWithNumber(10, divideByTwo)) // 5

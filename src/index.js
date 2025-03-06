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

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map((number) => {
  return number * 2
})

console.log(doubledNumbers) // [2, 4, 6, 8, 10]

const backpackFullOfAmmo = [
  { item: 'bullet', qunatity: 10, priceEa: 0.5 },
  { item: 'shotgun shells', qunatity: 4, priceEa: 0.5 },
  { item: 'rockets', qunatity: 1, priceEa: 5.0 },
  { item: 'energy cell units', qunatity: 20, priceEa: 0.2 },
]

function calculateOrderCost(order) {
  return order.quantity * order.priceEa
}

const totalValue = backpackFullOfAmmo.map((ammo) => {
  console.log(ammo)

  return 'hi'
})
console.log(totalValue)

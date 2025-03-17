const greet = () => 'Hello, World!'
//console.log(greet())

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
//console.log(doSomethingWithNumber(10, divideByTwo)) // 5

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map((number) => {
  return number * 2
})

//console.log(doubledNumbers) // [2, 4, 6, 8, 10]

const backpackFullOfAmmo = [
  { item: 'bullet', quantity: 10, priceEa: 0.5 },
  { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
  { item: 'rockets', quantity: 1, priceEa: 5.0 },
  { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
]

const tableRows = backpackFullOfAmmo
  .map((ammo) => {
    return `<tr>
              <td>${ammo.item}</td>
              <td>${ammo.quantity}</td>
              <td>${ammo.priceEa}</td>
            </tr>`
  })
  .join('\n')

//console.log(tableRows)

// eslint-disable-next-line no-unused-vars
const number = [1, 2, 3, 4, 5]
// eslint-disable-next-line no-unused-vars
const doubleNumbers = []

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(`<li>${numbers[i] * 2}</li>`)
}

//console.log(doubledNumbers.join('\n'))

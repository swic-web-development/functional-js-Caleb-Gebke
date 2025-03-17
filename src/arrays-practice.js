// trying out imperative and declarative programming
// Imperative programming
const numb = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numb.length; i++) {
  doubled.push(numb[i] * 2)
}

console.log(doubled)

// Declarative programming
const number = [1, 2, 3, 4, 5]
const double = number.map((number) => number * 2)

console.log(double)

const numbers = [1, 2, 3, 4, 5]
const oddNumbers = numbers.filter((number) => number % 2)

console.log(oddNumbers) // [1, 3, 5]

//Practicing the reduce method
const players = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const totalFrags = players.reduce((total, player) => {
  return total + player.frags
}, 0)
console.log(totalFrags)

//practicing the find method
const firstPlayerWithMoreFragsThanDeaths = players.find((player) => player.frags > player.deaths)

console.log(firstPlayerWithMoreFragsThanDeaths)
// { name: 'DoomGuy', frags: 25, deaths: 0 }

//practicing the some method
const hasFrags = players.some((player) => player.frags)

console.log(hasFrags) // true

//practicing the every method
const allPlayersHaveFrags = players.every((player) => player.frags)

console.log(allPlayersHaveFrags) // false

//practicing the sort method
const sortedPlayers = players.sort((a, b) => b.frags - a.frags)

console.log(sortedPlayers)

const numbas = [5, 3, 8, 1, 2] //testing the sort method
const sortedNumbers = numbas.sort((a, b) => {
  console.log(`Now comparing a: ${a}, b: ${b}`)

  return a - b
})

console.log(sortedNumbers)
// [1, 2, 3, 5, 8]

///coding challenge

const backpackFullOfAmmo = [
  { item: 'bullets', quantity: 10, priceEa: 0.5 },
  { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
  { item: 'rockets', quantity: 1, priceEa: 5.0 },
  { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
]
const totalValue = backpackFullOfAmmo.reduce((total, ammo) => {
  return total + ammo.quantity * ammo.priceEa
}, 0)

console.log(totalValue) // 16
//the reduce method is used to calculate the total value of the items in the backpackFullOfAmmo array
// the total value is calculated by multiplying the quantity of each item by the price of each item and then adding the result to the total value
// We saw this in a previous exercise where we used the accumulator to add each total to the next price of each item

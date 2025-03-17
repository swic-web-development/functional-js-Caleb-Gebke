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

const monsters = [
  // Deals 10-60 damage per bite
  { name: 'Cacodemon', health: 400, damage: 35 },

  // Deals 15-75 damage per claw/fireball
  { name: 'Baron of Hell', health: 1000, damage: 45 },

  // Deals 20-200 damage per rocket
  { name: 'Cyberdemon', health: 4000, damage: 125 },

  // Deals 5-50 damage per bite
  { name: 'Hell Knight', health: 800, damage: 25 },

  // Deals 10-100 damage per bite
  { name: 'Imp', health: 200, damage: 20 },

  // Deals 5-25 damage per bite
  { name: 'Lost Soul', health: 100, damage: 10 },

  // Deals 5-50 damage per bite
  { name: 'Pinky', health: 300, damage: 15 },

  // Deals 10-100 damage per bite
  { name: 'Revenant', health: 500, damage: 30 },

  // Deals 5-50 damage per bite
  { name: 'Spectre', health: 200, damage: 20 },

  // Deals 5-50 damage per bite
  { name: 'Spider Mastermind', health: 2000, damage: 50 },

  // Deals 5-50 damage per bite
  { name: 'Vile', health: 1000, damage: 40 },

  // Deals 5-50 damage per bite
  { name: 'Zombie', health: 100, damage: 5 },

  // Deals 5-50 damage per bite
  { name: 'Zombieman', health: 200, damage: 10 },
]

const namesOfMonsters = monsters.map((monster) => {
  return monster.name
})
console.log(namesOfMonsters)
// The names of all the monsters are returned in an array

const monstersWithOver150Health = monsters.filter((monster) => {
  return monster.health > 150
})
console.log(monstersWithOver150Health)
// The monsters with health greater than 150 are returned in an array

const totalHealthOfAllMonsters = monsters.reduce((total, monster) => {
  return total + monster.health
}, 0)
console.log(totalHealthOfAllMonsters)
// 10800

const monstersSortedHighestToLowestDamage = monsters.sort((a, b) => b.health - a.health)
console.log(monstersSortedHighestToLowestDamage)
// The monsters are sorted from highest to lowest damage

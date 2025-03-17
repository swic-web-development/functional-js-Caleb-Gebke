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

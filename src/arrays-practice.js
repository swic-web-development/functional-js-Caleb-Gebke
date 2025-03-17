const numb = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numb.length; i++) {
  doubled.push(numb[i] * 2)
}

console.log(doubled)

const number = [1, 2, 3, 4, 5]
const double = number.map((number) => number * 2)

console.log(double)

const numbers = [1, 2, 3, 4, 5]
const oddNumbers = numbers.filter((number) => number % 2)

console.log(oddNumbers) // [1, 3, 5]

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

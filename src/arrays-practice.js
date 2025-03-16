const numbers = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

console.log(doubled)

const number = [1, 2, 3, 4, 5]
const double = number.map((number) => number * 2)

console.log(double)

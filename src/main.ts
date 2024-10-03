// Composition
const increment: Increment = (n) => n + 1
console.log(increment(1))

const toString: ToString = (n) => `${n}`
console.log(toString(2))

const incrementToString: IncrementToString = (n) => toString(increment(n))
console.log(incrementToString(3))


const compose: Compose = (f, g) => x => f(g(x))

const cpIncrementToString = compose(toString, increment)
console.log(cpIncrementToString(3))

// Currying
const nSum: NSum = (a, b) => a + b
console.log(nSum(1, 2))

const sum: Sum = (a) => (b) => a + b
const addOne: Increment = sum(1)
console.log(addOne(2))
const decrement: Increment = sum(-1)
console.log(decrement(2))

const curry2: Curry2 = f => a => b => f(a, b)

const sum2 = curry2(nSum)
console.log(sum2(1)(2))


// Recursion
const normalSumAll: NormalSumAll = (xs) => {
  const result = xs.reduce((a, c) => a + c, 0)
  return result
}

console.log(normalSumAll([1, 2, 3]))
const sumAll: NormalSumAll = (xs) => {
  if (xs.length === 0) return 0
  const [head, ...rest] = xs
  return head + sumAll(rest)
}
console.log(sumAll([1,2,3]))
console.log(sumAll([]))

const sumAll2: SumAll = (xs: number[]) => xs.length === 0 ? 0 : xs[0] + sumAll2(xs.slice(1))

console.log(sumAll2([1,2,3]))

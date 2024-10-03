// Composition
const increment: Increment = (n) => n + 1
console.log(increment(1))

const toString: ToString = (n) => `${n}`
console.log(toString(2))

const incrementToString: IncrementToString = (n) => toString(increment(n))
console.log(incrementToString(3))


const compose: Compose = (f, g) => x => f(g(x))

const cIncrementToString = compose(toString, increment)
console.log(cIncrementToString(3))

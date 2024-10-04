// Composition
const increment: Increment = (n) => n + 1
console.log(increment(1))

const toString: ToString = (n) => `${n}`
console.log(toString(2))

const incrementToString: IncrementToString = (n) => toString(increment(n))
console.log(incrementToString(3))

const compose: Compose = (f, g) => (x) => f(g(x))

const cpIncrementToString = compose(toString, increment)
console.log(cpIncrementToString(3))

// Currying
const nSum: Arithmetic = (a, b) => a + b
console.log(nSum(1, 2))

const sum: Sum = (a) => (b) => a + b
const addOne: Increment = sum(1)
console.log(addOne(2))
const decrement: Increment = sum(-1)
console.log(decrement(2))

const curry2: Curry2 = (f) => (a) => (b) => f(a, b)

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
console.log(sumAll([1, 2, 3]))
console.log(sumAll([]))

const sumAll2: SumAll = (xs: number[]) =>
  xs.length === 0 ? 0 : xs[0] + sumAll2(xs.slice(1))

console.log(sumAll2([1, 2, 3]))

// Option, Maybe and null value
const divideTwo: Increment = (n) => 2 / n
console.log(divideTwo(2))
console.log(divideTwo(0))

const composed = compose(increment, divideTwo)
console.log(composed(2))

const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x })
const none: Option<never> = { _tag: 'None' }
const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'

const div2: Div2 = (x) => (x === 0 ? none : some(2 / x))
const increment1: Increment = (n) => n + 1
const cDiv2Inc = compose(
  (x: Option<number>) => (isNone(x) ? none : some(increment1(x.value))),
  div2
)

console.log(cDiv2Inc(2))
console.log(cDiv2Inc(0))

// Either
const div2IfEven = (n: number) => {
  if (n === 0) {
    throw 'can not divide by 0'
  } else if (n % 2 !== 0) {
    throw `${n} is not an even number`
  } else {
    return 2 / n
  }
}

console.log(div2IfEven(8))

const left = <E, A = never>(e: E): Either<E, A> => ({
  _tag: 'Left',
  left: e,
})

const right = <A, E = never>(a: A): Either<E, A> => ({
  _tag: 'Right',
  right: a,
})

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === 'Left'
const d2ie = (num: number): Either<string, number> => {
  if (num === 0) {
    return left('can not divide by 0')
  } else if (num % 2 !== 0) {
    return left('it is not even')
  } else {
    return right(2/num)
  }
}

console.log(d2ie(0))

const composedIncD2ie = compose((x => isLeft(x) ? x : right(increment(x.right))), d2ie)

console.log(composedIncD2ie(2))
console.log(composedIncD2ie(0))


const nil: List<never> = { _tag: 'Nil' }
const cons = <A>(head: A, tail: List<A>): List<A> => ({
  _tag: 'Cons',
  head,
  tail
})

const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === 'Nil'

const myList = cons(1, cons(2, cons(3, nil)))

const showList: ShowList = xs => isNil(xs) ? '' : `${xs.head}` + (isNil(xs.tail) ? '' : `, ${showList(xs.tail)}`)
console.log(showList(myList))

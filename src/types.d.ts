type Increment = (n: number) => number
type ToString = (n: number) => string
type IncrementToString = (n: number) => string
type NSum = (a: number, b: number) => number
type Sum = (a: number) => (b: number) => number

type Compose = <A, B, C>(f: (n: B) => C, g: (n: A) => B) => (n: A) => C
type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z

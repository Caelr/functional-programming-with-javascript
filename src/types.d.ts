type Increment = (n: number) => number
type ToString = (n: number) => string
type IncrementToString = (n: number) => string
type Arithmetic = (a: number, b: number) => number
type Sum = (a: number) => (b: number) => number
type NormalSumAll = (xs: number[]) => number
type Compose = <A, B, C>(f: (n: B) => C, g: (n: A) => B) => (n: A) => C
type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z

type SumAll = (xs:number[]) => number

type Option<A> = Some<A> | None

interface Some<A> {
  _tag: 'Some'
  value: A
}

interface None {
  _tag: 'None'
}

type Div2 = (n: number) => Option<number>

type Either<E, A> = Left<E> | Right<A>

interface Right<A> {
  _tag: 'Right'
  right: A
}
interface Left<E> {
  _tag: 'Left'
  left: E
}

type List<A> = Nil | Cons<A>

interface Nil {
  _tag: 'Nil'
}

interface Cons<A> {
  _tag: 'Cons',
  head: A,
  tail: List<A>
}

type ShowList = <A>(xs: List<A>) => string

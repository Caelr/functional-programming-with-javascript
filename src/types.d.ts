type Increment = (n: number) => number
type ToString = (n: number) => string
type IncrementToString = (n: number) => string
type Compose = <A, B, C>(f: (n: B) => C, g: (n: A) => B) => (n: A) => C

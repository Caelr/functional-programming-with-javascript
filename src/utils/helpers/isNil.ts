export const nil: List<never> = { _tag: 'Nill' }
export const cons = <A>(head: A, tail: List<A>): List<A> => ({
  _tag: 'Cons',
  head,
  tail
})

export const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === 'Nil'

export const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === 'Left'
export const left = <E, A = never>(e: E): Either<E, A> => ({
  _tag: 'Left',
  left: e,
})

export const right = <A, E = never>(a: A): Either<E, A> => ({
  _tag: 'Right',
  right: a,
})

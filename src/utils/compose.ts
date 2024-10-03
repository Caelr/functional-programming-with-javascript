export function compose<TArgs extends any[], R1>(
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R1

export function compose<TArgs extends any[], R1, R2>(
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2

export function compose<TArgs extends any[], R1, R2, R3>(
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R3

export function compose<TArgs extends any[], R1, R2, R3, R4>(
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R4

export function compose(...funcs: any[]) {
  return function (...args: any[]) {
    return funcs.reduceRight((acc, fn) => {
      return fn(acc)
    }, args[0])
  }
}

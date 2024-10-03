export const compose: Compose = (f, g) => x => f(g(x))

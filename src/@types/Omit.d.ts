/**
 * Omite as propriedades `K` do objeto `T`.
 * @example
 * type A = { a: number, b: number, c: number };
 *
 * type B = Omit<A, 'a'>;
 * //=> { b: number; c: number; }
 *
 * const b: B = { b: 100, c: 100 };
 */
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

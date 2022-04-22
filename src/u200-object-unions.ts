// UNIONS OF OBJECTS

type A = { a: number };
type B = { b: string };

type U = A | B;

// return a for A and b.length for B
export function numerize(obj: U): number {
    return 0;
}

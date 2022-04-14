// Let's ALGEBRAIC DATA TYPES

type A = { tag: 'A'; a: number; x: number; y: string };
type B = { tag: 'B'; b: string; x: number; y: string };

type U = A | B;

// return a for A and b.length for B
export function numerize(obj: U): number {
    switch (obj.tag) {
        case 'A':
            return obj.a;
        case 'B':
            return obj.b.length;
        default:
            throw unreachable(obj);
    }
}

function unreachable(n: never) {
    return new Error(n);
}

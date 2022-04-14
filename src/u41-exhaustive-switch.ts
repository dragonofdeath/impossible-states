// Lets EXHAUST THEM WITH SWITCH!!!!!

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };
type C = { tag: 'C'; b: Array<string> };

type U = A | B | C;

// return a for A and b.length for B and b.length*2 for C
export function numerize(obj: U): number {
    switch (obj.tag) {
        case 'A':
            return obj.a;
        case 'B':
            return obj.b.length;
        case 'C':
            return obj.b.length * 2;
        default:
            throw unreachable(obj);
    }
}

function unreachable(n: never) {
    return new Error(n);
}

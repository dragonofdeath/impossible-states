// Lets EXHAUST THEM till its never and add runtime check!!!!!

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };
type C = { tag: 'C'; b: Array<string> };

type U = A | B | C | { tag: 'D' };

// return a for A and b.length for B and b.length*2 for C
export function numerize(obj: U): number {
    if (obj.tag === 'A') {
        return obj.a;
    }
    if (obj.tag === 'B') {
        return obj.b.length;
    }
    if (obj.tag === 'C') {
        return obj.b.length * 2;
    }
    throw unreachable(obj);
}

function unreachable(n: never) {
    return new Error(n);
}

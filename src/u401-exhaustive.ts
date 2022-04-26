// Let's EXHAUST THEM till its never!!!!!

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };
type C = { tag: 'C'; b: Array<string> };

type U = A | B | C;

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
    return obj; // kinda ok, but in runtime we could do better
}

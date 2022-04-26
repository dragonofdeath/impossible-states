// Let's EXHAUST THEM!!!!!

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };
type C = { tag: 'C'; b: Array<string> };

type U = A | B | C;

// return a for A and b.length for B and b.length*2 for C
export function numerize(obj: U): number {
    if (obj.tag === 'A') {
        return obj.a;
    }
    obj; // U - A = Type B | C
    return obj.b.length;
}

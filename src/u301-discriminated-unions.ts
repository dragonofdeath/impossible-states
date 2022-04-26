// LET'S DISCRIMINATE THEM!!!!!!!!!!

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };

type U = A | B;

// return a for A and b.length for B
export function numerize(obj: U): number {
    if ('a' in obj) {
        return obj.a;
    }
    obj; // U - A = Type B
    return obj.b.length;
}

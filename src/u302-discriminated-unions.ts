// LET'S DISCRIMINATE THEM!!!!!!!!!!

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };

type U = A | B;

// return a for A and b.length for B
export function numerize(obj: U): number {
    if (obj.tag === 'A') {
        return obj.a;
    }
    obj; // U - A = Type B
    return obj.b.length;
}

const indirect = { tag: 'B', b: 'hello', a: undefined } as const
numerize(indirect); // YEASSSSSSSSS!!!!

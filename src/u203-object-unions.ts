// UNIONS OF OBJECTS

type A = { a: number };
type B = { b: string };

type U = A | B;

// return a for A and b.length for B
export function numerize(obj: U): number {
    if ('a' in obj) {
        return obj.a;
    }
    obj; // U - A = Type B
    return obj.b.length;
}

numerize({ a: 7 }); // OK
numerize({ b: 'hello' }); // OK

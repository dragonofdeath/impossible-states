// UNIONS OF OBJECTS

type A = { a: number; c: boolean };

type B = { b: string; c: boolean };

function numerize(value: A | B): number {
    //
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
numerize({ c: true, a: 7 });
numerize({ c: true, b: '7' });

const a: A = { a: 1, c: true };

const b: B = { ...a, b: '7' };

console.log(numerize(b));

//
//
//
//
//
//
//
//

export function numerize2(value: A | B): number {
    if ('a' in value) {
        return value.a;
    }
    return value.b.length;
}

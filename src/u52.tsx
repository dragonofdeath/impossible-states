// Let's ALGEBRAIC DATA TYPES

type F = { luckyNumber: number };

type A = { tag: 'number'; payload: number };

type B = { tag: 'string'; payload: string };

type C = { tag: 'boolean'; payload: boolean };

type D = { tag: 'array'; payload: Array<number> };

type U = (A | B | C | D) & F;

function numberize(val: U): number {
    if (val.luckyNumber === 7) return 8;
    switch (val.tag) {
        case 'number':
            return val.payload;
        case 'boolean':
            return val.payload ? 1 : 0;
        case 'string':
            return val.payload.length;
        case 'array':
            return val.payload[0] ?? 0;
        default:
            throw unreachable(val);
    }
}

function unreachable(n: never) {
    return new Error(n);
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
//
//
//
//
//
//

export { numberize };

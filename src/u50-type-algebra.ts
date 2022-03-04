// Let's ALGEBRAIC DATA TYPES

type A = { tag: 'number'; payload: number; luckyNumber: number };

type B = { tag: 'string'; payload: string; luckyNumber: number };

type C = { tag: 'boolean'; payload: boolean; luckyNumber: number };

type D = { tag: 'array'; payload: Array<number>; luckyNumber: number };

type U = A | B | C | D;

function numerize(val: U): number {
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

export { numerize as numberize };

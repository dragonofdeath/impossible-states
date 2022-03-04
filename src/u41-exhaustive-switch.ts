// Lets EXHAUST THEM WITH SWITCH!!!!!

type A = { tag: 'number'; payload: number };

type B = { tag: 'string'; payload: string };

type C = { tag: 'boolean'; payload: boolean };

type D = { tag: 'array'; payload: Array<number> };

type U = A | B | C | D;

function numerize({ tag, payload }: U): number {
    switch (tag) {
        case 'number':
            return payload;
        case 'boolean':
            return payload ? 1 : 0;
        case 'string':
            return payload.length;
        case 'array':
            return payload[0] ?? 0;
        default:
            throw unreachable(payload);
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

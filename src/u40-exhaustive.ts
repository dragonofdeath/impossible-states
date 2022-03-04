// Lets EXHAUST THEM!!!!!

type A = { tag: 'number'; payload: number };

type B = { tag: 'string'; payload: string };

type C = { tag: 'boolean'; payload: boolean };

// type D = { tag: 'array'; payload: Array<number> };

type U = A | B | C;

function numerize({ tag, payload }: U): number {
    if (tag === 'number') {
        return payload;
    }
    if (tag === 'boolean') {
        return payload ? 1 : 0;
    }
    if (tag === 'string') {
        return payload.length;
    }
    // if (tag === 'array') {
    //     return payload[0] ?? 0;
    // }
    throw unreachable(payload);
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

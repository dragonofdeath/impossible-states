// LET'S DISCRIMINATE THEM!!!!!!!!!!

type A = { tag: 'number'; payload: number };

type B = { tag: 'string'; payload: string };

type C = { tag: 'boolean'; payload: boolean };

type U = A | B | C;

function numerize({ tag, payload }: U): number {
    if (tag === 'number') {
        return payload;
    }
    if (tag === 'boolean') {
        return payload ? 1 : 0;
    }
    return payload.length;
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

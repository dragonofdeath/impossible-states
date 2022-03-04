// MOST PRIMIVE UNION: UNION OF PRIMITIVES

// where value is primitive

type Primitive = ???;
function numerize(value: Primitive): number {

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
export function numerize1(value: number | string | boolean): number {
    if (typeof value === 'number') {
        return value;
    }
    value; // 3 - 1 = 2
    if (typeof value === 'string') {
        return value.length;
    }
    value; // 2 - 1= 1;
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    value; // 1 - 1 = 0
    return value;
    // return value;
}


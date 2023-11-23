// MOST PRIMITIVE UNION: UNION OF PRIMITIVES

type Primitive = number | string | boolean;

// Returns number for number, string length for string, and 0/1 for false/true
export function numerize(value: Primitive): number {
    if (typeof value === 'number') {
        return value;
    }
    value; // Primitive - number = string | boolean;

    if (typeof value === 'string') {
        return value.length;
    }
    value; // Primitive - number - string = boolean;

    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    value; // Primitive - number - string - boolean = ?;

    return 0;
}

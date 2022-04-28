// EXPLORING THE UNKNOWN

// The only way to break out of it is explicit cast.
export function numerizeAll(value: unknown): number {
    if (typeof value === 'number') {
        return value;
    }
    value;

    if (typeof value === 'string') {
        return value.length;
    }
    value;

    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    value;

    return 0;
}

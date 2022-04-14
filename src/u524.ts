// Let's ALGEBRAIC DATA TYPES

export type U = ({ tag: 'A'; a: number } | { tag: 'B'; b: string }) & {
    x: number;
    y: string;
};

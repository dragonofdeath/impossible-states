// Let's ALGEBRAIC DATA TYPES

type A = { tag: 'A'; a: number; x: number; y: string };
type B = { tag: 'B'; b: string; x: number; y: string };

export type U = A | B;

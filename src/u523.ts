// Let's ALGEBRAIC DATA TYPES

type A = { tag: 'A'; a: number };
type B = { tag: 'B'; b: string };
type C = { x: number; y: string };

export type U = (A | B) & C;

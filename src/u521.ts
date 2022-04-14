// Let's ALGEBRAIC DATA TYPES

type A = { tag: 'A'; a: number } & C;
type B = { tag: 'B'; b: string } & C;
type C = { x: number; y: string };

export type U = A | B;

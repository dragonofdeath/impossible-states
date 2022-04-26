enum Tag {
    A = 'A',
    B = 'B',
}

type A = { tag: Tag.A; a: number };
type B = { tag: Tag.B; b: string };

export type U = A | B;

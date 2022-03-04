interface Base {
  a: number;
  b: string;
}

interface E extends Base {
  c: boolean;
  a: string;
}

function getA(val: Base): number {
  return val.a;
}

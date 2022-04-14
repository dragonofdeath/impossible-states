export type MyData = { items: string[] };
export const fetchStuff: () => Promise<MyData> = (() => {}) as any;
export const MyDataView: React.FC<{ data: MyData }> = (() => {}) as any;
export const Spinner: React.FC<{}> = (() => {}) as any;
export const Button: React.FC<{ onClick: () => void }> = (() => {}) as any;
export const unreachable = (a: never) => {
    throw new Error(a);
};

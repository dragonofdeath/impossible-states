import * as React from 'react';
global {
    type MyData = { items: string[] };

    declare const fetchStuff: () => Promise<MyData>;
    declare const MyDataView: React.FC<{ data: MyData }>;
    declare const Spinner: React.FC<{}>;
    declare const Button: React.FC<{ onClick: () => void }>;
    declare const unreachable = (a: never) => {
        throw new Error(a);
    };
    declare const React: React
}

export {};

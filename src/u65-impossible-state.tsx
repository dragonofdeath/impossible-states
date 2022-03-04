import React from 'react';

type State =
    | { type: 'INITIAL' }
    | { type: 'READY'; myData: MyData }
    | { type: 'LOADING' }
    | { type: 'ERROR'; message: string };

export const useMyState = (): [State, () => void] => {
    const [state, setState] = React.useState<State>({ type: 'INITIAL' });

    const load = () => {
        setState((prevState) => ({ type: 'LOADING' }));
        return fetchStuff()
            .then((result) =>
                setState((prevState) => ({
                    type: 'READY',
                    myData: result,
                }))
            )
            .catch(() => {
                setState(() => ({
                    type: 'ERROR',
                    message: 'Sorry..',
                }));
            });
    };
    return [state, load];
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
type MyData = { items: string[] };
declare const fetchStuff: () => Promise<MyData>;

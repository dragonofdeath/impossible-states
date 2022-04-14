import React from 'react';

type State =
    | { type: 'INITIAL' }
    | { type: 'READY'; myData: MyData }
    | { type: 'LOADING'; requestId: number }
    | { type: 'ERROR'; message: string };

type State1 =
    (| { type: 'INITIAL' }
    | { type: 'READY'}
    | { type: 'LOADING'}
    | { type: 'ERROR'};)
    & { errorMessage, myData?: MyData, requestId?: string }

export const useMyState = (): [State, () => void] => {
    const [state, setState] = React.useState<State>({ type: 'INITIAL' });

    const load = () => {
        const requestId = Math.random();
        setState((prevState) => ({ type: 'LOADING', requestId }));
        return fetchStuff()
            .then((result) =>
                setState((prevState) => {
                    if (
                        prevState.type === 'LOADING' &&
                        prevState.requestId === requestId
                    ) {
                        return {
                            type: 'READY',
                            myData: result,
                        };
                    }
                    return prevState;
                })
            )
            .catch(() =>
                setState((prevState) => {
                    if (
                        prevState.type === 'LOADING' &&
                        prevState.requestId === requestId
                    ) {
                        return {
                            type: 'ERROR',
                            message: 'ups',
                        };
                    }
                    return prevState;
                })
            )
    });
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

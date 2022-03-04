import React from 'react';

type State = {
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
    isError: boolean;
    errorMessage?: string;
};

export const useMyState = (): [State, () => void] => {
    const [state, setState] = React.useState<State>({
        isLoading: false,
        isInitial: true,
        isError: false,
    });

    const load = () => {
        setState((prevState) => ({ ...prevState, isLoading: true }));
        return fetchStuff()
            .then((result) =>
                setState((prevState) => ({
                    ...prevState,
                    isLoading: true,
                    myData: result,
                }))
            )
            .catch(() => {
                setState((prevState) => ({
                    ...prevState,
                    isError: true,
                    errorMessage: 'Sorry..',
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

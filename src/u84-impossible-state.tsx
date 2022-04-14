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
        setState((prevState) => ({
            ...prevState,
            isInitial: false,
            isError: false,
            isLoading: true,
        }));
        return fetchStuff()
            .then((result) =>
                setState((prevState) => ({
                    ...prevState,
                    isError: false,
                    errorMessage: undefined,
                    isLoading: true,
                    myData: result,
                }))
            )
            .catch(() => {
                setState((prevState) => ({
                    isError: true,
                    myData: undefined,
                    isLoading: false,
                    isInitial: false,
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

import React from 'react';

type State =
    | { type: 'INITIAL' }
    | { type: 'READY'; myData: MyData }
    | { type: 'LOADING' }
    | { type: 'ERROR'; message: string };

declare const useMyState: () => [State, () => void];

export const MyApp = () => {
    const [state, fetch] = useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
            {(() => {
                switch (state.type) {
                    case 'INITIAL':
                        return 'Click to fetch';
                    case 'READY':
                        return <MyDataView data={state.myData} />;
                    case 'LOADING':
                        return <Spinner />;
                    case 'ERROR':
                        return state.message;
                    default:
                        throw unreachable(state);
                }
            })()}
        </div>
    );
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
declare const MyDataView: React.FC<{ data: MyData }>;
declare const Spinner: React.FC<{}>;
declare const Button: React.FC<{ onClick: () => void }>;
function unreachable(n: never) {
    return new Error(n);
}

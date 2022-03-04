import React from 'react';

type State = {
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
    isError: boolean;
    errorMessage?: string;
};
// State has 2^5=32 pssible combinations: how many variations human mind
// can work with? For me - its max 6 (in the morning, and only 3 in the evening)

declare const useMyState: () => [State, () => void];

export const MyApp = () => {
    const [{ myData, isLoading, isInitial, isError, errorMessage }, fetch] =
        useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
            {!isLoading && isError && errorMessage ? errorMessage : null}
            {!isLoading && isInitial && 'Click to fetch'}
            {!isLoading && !isError && myData && <MyDataView data={myData} />}
            {isLoading && <Spinner />}
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
declare const MyDataView: React.FC<{ data: MyData }>;
declare const Spinner: React.FC<{}>;
declare const Button: React.FC<{ onClick: () => void }>;

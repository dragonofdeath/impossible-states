import React from 'react';

type State = {
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
    fetch: () => void;
};

declare const useMyState: () => State;

export const MyApp = () => {
    const { myData, fetch, isLoading, isInitial } = useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
            {isInitial && 'Click to fetch'}
            {myData && <MyDataView data={myData} />}
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
declare const fetchStuff: () => Promise<MyData>;
declare const MyDataView: React.FC<{ data: MyData }>;
declare const Spinner: React.FC<{}>;
declare const Button: React.FC<{ onClick: () => void }>;

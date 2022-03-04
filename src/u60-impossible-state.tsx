import React from 'react';

type State = {
    myData?: MyData;
    isLoading: boolean;
    fetch: () => void;
};

declare const useMyState: () => State;

export const MyApp = () => {
    const { myData, fetch, isLoading } = useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
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

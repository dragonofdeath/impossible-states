import { Button, MyData, MyDataView, Spinner } from './impossible-state-utils';

declare const useMyState: () => {
    fetch: () => void;
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
    isError: boolean;
    errorMessage?: string;
};
// State has 2^5=32 pssible combinations: how many variations human mind
// can work with?

export const MyApp = () => {
    const { myData, isLoading, isInitial, isError, errorMessage, fetch } =
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

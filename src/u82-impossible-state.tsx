declare const useMyState: () => {
    fetch: () => void;
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
    isError: boolean;
    errorMessage?: string;
}; // How many variations of this can I have?

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

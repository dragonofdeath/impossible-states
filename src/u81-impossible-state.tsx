declare const useMyState: () => {
    fetch: () => void;
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
};

export const MyApp = () => {
    const { myData, fetch, isLoading, isInitial } = useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
            {!isLoading && isInitial && 'Click to fetch'}
            {!isLoading && myData && <MyDataView data={myData} />}
            {isLoading && <Spinner />}
        </div>
    );
};

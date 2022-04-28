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
            {isInitial && 'Click to fetch'}
            {myData && <MyDataView data={myData} />}
            {isLoading && <Spinner />}
            {/* does initial resets flag on load start/reoload ?*/}
        </div>
    );
};

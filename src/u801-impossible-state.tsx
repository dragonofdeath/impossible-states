declare const useMyState: () => {
    fetch: () => void;
    myData?: MyData;
    isLoading: boolean;
};

export const MyApp = () => {
    const { myData, fetch, isLoading } = useMyState();
    return (
        <div>
            <Button onClick={fetch}>ReFetch</Button>
            {myData && <MyDataView data={myData} />}
            {isLoading && <Spinner />}
            {/* what if there is no data and it's not loading? */}
            {/* what if there is data and its loading? */}
        </div>
    );
};

import { Button, MyData, MyDataView, Spinner } from './impossible-state-utils';

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
        </div>
    );
};

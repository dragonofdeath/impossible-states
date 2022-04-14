import { Button, MyData, MyDataView, Spinner, unreachable } from './impossible-state-utils';

type State =
    | { tag: 'INITIAL' }
    | { tag: 'READY'; myData: MyData }
    | { tag: 'LOADING' }
    | { tag: 'ERROR'; message: string };
declare const useMyState: () => [State, () => void];

export const MyApp = () => {
    const [state, fetch] = useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
            {(() => {
                switch (state.tag) {
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

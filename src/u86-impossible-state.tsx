type State =
    | { type: 'INITIAL' }
    | { type: 'LOADING'; requestId: number }
    | { type: 'READY'; myData: MyData }
    | { type: 'ERROR'; message: string };

export const useMyState = (): State & { fetch: () => void } => {
    const [state, setState] = React.useState<State>({ type: 'INITIAL' });

    const fetch = () => {
        setState(() => ({ type: 'LOADING' }));
        return fetchStuff()
            .then((result) =>
                setState(() => {
                    return { type: 'READY', myData: result };
                })
            )
            .catch(() => setState({ type: 'ERROR', message: 'ups' }));
    };
    return { ...state, fetch };
};

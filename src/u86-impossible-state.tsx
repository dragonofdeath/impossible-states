type State =
    | { type: 'INITIAL' }
    | { type: 'LOADING'; requestId: number }
    | { type: 'READY'; myData: MyData }
    | { type: 'ERROR'; message: string };

export const useMyState = (): State & { fetch: () => void } => {
    const [state, setState] = React.useState<State>({ type: 'INITIAL' });

    const fetch = () => {
        const requestId = Math.random();
        setState(() => ({ type: 'LOADING', requestId }));
        return fetchStuff()
            .then((result) =>
                setState((prevState) => {
                    return prevState;
                })
            )
            .catch(() => setState({ type: 'ERROR', message: 'ups' }));
    };
    return { ...state, fetch };
};

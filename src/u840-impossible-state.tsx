type State = {
    myData?: MyData;
    isLoading: boolean;
    isInitial: boolean;
    isError: boolean;
    errorMessage?: string;
};

export const useMyState = (): State & { fetch: () => void } => {
    const [state, setState] = React.useState<State>({
        isLoading: false,
        isInitial: true,
        isError: false,
    });

    const fetch = () => {
        setState((prevState) => ({ ...prevState, isLoading: true, isInitial: false }));
        return fetchStuff()
            .then((result) =>
                setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    myData: result,
                }))
            )
            .catch(() => {
                setState((prevState) => ({
                    ...prevState,
                    isError: true,
                    errorMessage: 'Sorry..',
                }));
            });
    };
    return { ...state, fetch };
};

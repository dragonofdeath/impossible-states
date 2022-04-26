import { variant, variantModule, VariantOf, fields, TypeNames, match } from 'variant';

export const State = variantModule({
    INITIAL: fields(),
    LOADING: fields(),
    READY: fields<{ myData: MyData }>(),
    ERROR: fields<{ message: string }>(),
});

// optional, but very helpful.
export type State<T extends TypeNames<typeof State> = undefined> = VariantOf<
    typeof State,
    T
>;

declare const useMyState: () => [State, () => void];

export const MyApp = () => {
    const [state, fetch] = useMyState();
    return (
        <div>
            <Button onClick={fetch}>Fetch</Button>
            {match(state, {
                INITIAL: () => 'Click to fetch',
                READY: ({ myData }) => <MyDataView data={myData} />,
                LOADING: () => <Spinner />,
                ERROR: ({ message }) => message,
            })}
        </div>
    );
};

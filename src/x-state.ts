export type xStateType = (
    | { type: 'INITIAL' }
    | { type: 'LOADING' }
    | { type: 'READY' }
    | { type: 'ERROR' }
) & Context;

type Context = {
    myData?: MyData;
    errorMessage?: string;
};

import { MyData } from './impossible-state-utils';

// LET'S REFACTOR TO SUM TYPES!

export type StateClassic = {
    isInitial: boolean;
    isLoading: boolean;
    myData?: MyData;
    isError: boolean;
    errorMessage?: string;
};

export type StateModern =
    | { tag: 'INITIAL' }
    | { tag: 'LOADING' }
    | { tag: 'READY'; myData: MyData }
    | { tag: 'ERROR'; message: string };

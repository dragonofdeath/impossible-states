// LET'S REFACTOR TO SUM TYPES!

export type StateClassic = {
    isInitial: boolean;
    isLoading: boolean;
    myData?: MyData;
    isError: boolean;
    errorMessage?: string;
};

export type StateModern = {};

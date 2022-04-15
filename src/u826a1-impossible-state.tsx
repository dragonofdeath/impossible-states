/* Complexity
  ______    ______
 /      \  /      \
/$$$$$$  |/$$$$$$  |
$$ ___$$ |$$____$$ |
  /   $$<  /    $$/
 _$$$$$  |/$$$$$$/
/  \__$$ |$$ |_____
$$    $$/ $$       |
 $$$$$$/  $$$$$$$$/

*/
export type StateClassic = {
    isLoading: boolean;
} & {
    myData?: MyData;
} & {
    isInitial: boolean;
} & {
    isError: boolean;
} & {
    errorMessage?: string;
};

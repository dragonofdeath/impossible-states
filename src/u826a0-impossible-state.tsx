import { MyData } from './impossible-state-utils';

/* Complexity
  ______
 /      \
/$$$$$$  |
$$ \__$$ |
$$    $$<
 $$$$$$  |
$$ \__$$ |
$$    $$/
 $$$$$$/

*/
export type StateClassic = {
    isLoading: boolean;
} & {
    myData?: MyData;
} & {
    isInitial: boolean;
};

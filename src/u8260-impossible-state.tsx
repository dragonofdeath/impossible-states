import { MyData } from './impossible-state-utils';

/* Complexity
 __    __
/  |  /  |
$$ |  $$ |
$$ |__$$ |
$$    $$ |
$$$$$$$$ |
      $$ |
      $$ |
      $$/

*/
export type StateClassic = {
    isLoading: boolean;
} & {
    myData?: MyData;
};


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
export type StateModern =
  | { tag: 'LOADING' }
  | { tag: 'READY'; myData: MyData }
  | { tag: 'INITIAL' }
  | { tag: 'ERROR', message: string };

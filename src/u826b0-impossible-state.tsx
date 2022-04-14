import { MyData } from './impossible-state-utils';

/* Complexity
  ______
 /      \
/$$$$$$  |
$$____$$ |
 /    $$/
/$$$$$$/
$$ |_____
$$       |
$$$$$$$$/

*/
export type StateModern =
  | { tag: 'LOADING' }
  | { tag: 'READY'; myData: MyData };


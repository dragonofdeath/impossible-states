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

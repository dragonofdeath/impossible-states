/* Complexity
  ______
 /      \
/$$$$$$  |
$$ ___$$ |
  /   $$<
 _$$$$$  |
/  \__$$ |
$$    $$/
 $$$$$$/

*/
export type StateModern =
  | { tag: 'LOADING' }
  | { tag: 'READY'; myData: MyData }
  | { tag: 'INITIAL' };

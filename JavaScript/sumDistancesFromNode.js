/*
            1								=> 0
        2       3						=> 2
    4    5  6    7					=> 8
  8   9										  => 6

  4 [3,2]
  5 [1,0]
  2 [5,6]
  3 [3,2]
  1 [9,]
*/

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}

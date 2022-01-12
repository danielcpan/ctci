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

/*
Q) Find sum of distances from all nodes to selected Node


Find common ancestor between two nodes
return leftDist + rightDist

[5,3,6,1]
min = 5 -> 3
[{ val: 5, },3]
*/

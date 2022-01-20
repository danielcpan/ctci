// 4.4 Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.

import TreeNode from "../DataStructures/TreeNode";

const isBalanced = (root: TreeNode) => {
  if (!root) return true;

  const dfs = (node: TreeNode): [number, boolean] => {
    let isBalanced = true;
    let leftHeight = 0;
    let rightHeight = 0;

    if (node.left !== null) {
      const res = dfs(node.left);
      leftHeight += res[0];

      if (!res[1]) return [1, res[1]];
    }

    if (node.right !== null) {
      const res = dfs(node.right);
      rightHeight += res[0];

      if (!res[1]) return [1, res[1]];
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      isBalanced = false;
    }

    return [Math.max(leftHeight, rightHeight) + 1, isBalanced];
  };

  const [_, isBalanced] = dfs(root);

  return isBalanced;
};

/*
            1
      2          3
  4     5            6
          8  
Assumptions:
- Balanced meaning diff in heights cannot be greater than 1
- Is root guaranteed to exists?

Thoughts:
- DFS through tree, keep track of min and max depths

1) DFS all the way to leaves
2) init height
3) return height
4) if dfs(left) height  - dfs(right) height > 1 return false
5) return true
*/

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
// root.left.left.left = new TreeNode(4);

console.log(isBalanced(root));

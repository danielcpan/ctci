// 4.6 Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
// binary search tree. You may assume that each node has a link to its parent.

import TreeNode from "../DataStructures/TreeNode";

const dfs = (
  node: TreeNode | null,
  parent: TreeNode | null,
  parentDict: { [key: number]: TreeNode | null } = {}
) => {
  if (!node) return parentDict;

  parentDict[node.val] = parent;

  dfs(node.left, node, parentDict);
  dfs(node.right, node, parentDict);

  return parentDict;
};

const findParentSuccessor = (
  target: TreeNode,
  parentDict: { [key: number]: TreeNode | null }
): TreeNode | null => {
  let parent = parentDict[target.val];

  while ((parent?.val ?? Infinity) < target.val) {
    parent = parentDict[parent?.val];
  }

  return parent;
};

const findChildSuccessor = (target: TreeNode): TreeNode => {
  let cur = target.right;
  let prev = target;

  while (cur !== null) {
    prev = cur;
    cur = cur.left;
  }

  return prev;
};

const successor = (root: TreeNode | null, target: TreeNode | null): TreeNode | null => {
  if (!root || !target) return null;

  const parentDict = dfs(root, null, {});

  return target.right === null
    ? findParentSuccessor(target, parentDict)
    : findChildSuccessor(target);
};

const root = new TreeNode(5);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);

console.log(successor(root, root.left));
console.log(successor(root, root.left.right));

/*
          5
      2
  1       4
        3  

Assumptions
- assume we don't have link to parent
- valid bst

Thoughts

1) Make parentDict
2) if node.right does not exist, return parent
3) else move to node right and then all the way left
*/

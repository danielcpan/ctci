import TreeNode from "../DataStructures/TreeNode";

// 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height.

const minimalTree = (nums: number[]) => {
  const buildTree = (start: number, end: number) => {
    if (start > end) return null;

    const mid = start + Math.floor((end - start) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = buildTree(start, mid - 1);
    node.right = buildTree(mid + 1, end);

    return node;
  };

  return buildTree(0, nums.length - 1);
};

console.log(minimalTree([1, 2, 3, 4, 5, 6, 7]));

// BONUS Generic arr to Binary Tree
const arrToTree = (nums: (number | null)[]) => {
  const buildTree = (idx: number) => {
    const num = nums[idx];

    if (num === undefined || num === null) return null;

    const node = new TreeNode(nums[idx]);

    node.left = buildTree(idx * 2 + 1);
    node.right = buildTree(idx * 2 + 2);

    return node;
  };

  return buildTree(0);
};

console.log(arrToTree([1, 2, 3, 4, 5, 6, 7]));
console.log(arrToTree([1, null, 3, null, null, 6, 7]));

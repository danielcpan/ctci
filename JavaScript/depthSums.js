class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}

// #1) DepthSums from root
const depthSums = (root) => {
  let depthSums = 0;

  const dfs = (node, depth) => {
    if (!node) return;

    depthSums += depth;

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 0);

  return depthSums;
};

// #2 All DepthSums in tree
const allDepthSums = (root) => {
  let allDepthSums = 0;

  const dfs = (node) => {
    let [count, sum] = [1, 0];

    if (node.left !== null) {
      const [leftCount, leftSum] = dfs(node.left);
      count += leftCount;
      sum += leftCount + leftSum;
    }

    if (node.right !== null) {
      const [rightCount, rightSum] = dfs(node.right);
      count += rightCount;
      sum += rightCount + rightSum;
    }

    allDepthSums += sum;

    return [count, sum];
  };

  dfs(root);

  return allDepthSums;
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);

// console.log(depthSums(root));
console.log(allDepthSums(root));

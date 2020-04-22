// Write an algorithm that checks if a BST is balanced (i.e., a tree where 
//   no 2 leaves differ in distance from the root by more than 1).

// Return boolean if bst is balanced
const isBalancedBst = (bst) => {
  // Helper function to find the smallest depth
  const _minDepth = (node) => {
    // Return 0 if we hit a dead end
    if (node === null) {
      return 0;
    }
    // Recursively call the minimum of the left and right nodes
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  }
  // Helper function to find the largest depth
  const _maxDepth = (node) => {
    // Return 0 if we hit a dead end
    if (node === null) {
      return 0;
    }
    // Recursively call the maximum of the left and right nodes
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  }

  // Return true if original BST is empty (technically balanced)
  if (bst === null) {
    return true;
  }
  // Find our max and subtract the min
  return _maxDepth(bst) - _minDepth(bst) <= 1;
}

// Setup for tests
const BinarySearchTree = require('./BinarySearchTree');

const insertInts = [1,2,3,4,5,6,7,8];
const BSTint = new BinarySearchTree();
insertInts.forEach(int => BSTint.add(int, int));

const insertInts2 = [50,25,75,12,100,60];
const BSTint2 = new BinarySearchTree();
insertInts2.forEach(int => BSTint2.add(int, int));

console.log(isBalancedBst(BSTint)); // Expects false
console.log(isBalancedBst(BSTint2)); // Expects true
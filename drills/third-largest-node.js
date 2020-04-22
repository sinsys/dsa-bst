// Write an algorithm to find the 3rd largest node in a binary search tree.

const thirdLargestNode = (bst) => {
  const results = [];
  const _inOrderTraverse = (node) => {
    if (node.left) {
      _inOrderTraverse(node.left);
    } 
    
    results.push(node.val);
      
    if (node.right) {
      _inOrderTraverse(node.right);
    }
  };

  _inOrderTraverse(bst);
  if ( results.length >= 3 ) {
    return results[results.length - 3];
  } else {
    return "Under 3 nodes exist";
  }
}


const BinarySearchTree = require('./BinarySearchTree');

const insertInts = [4,1,2,5234,52,2,235,64,223]; // Expected 223
const BSTint = new BinarySearchTree();
insertInts.forEach(int => BSTint.add(int, int));

console.log(thirdLargestNode(BSTint));
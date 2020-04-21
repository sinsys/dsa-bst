// Write an algorithm to check whether an arbitrary binary tree is a 
// binary search tree, assuming the tree does not contain duplicates.


const isBst = (bst) => {

  if ( !bst.left && !bst.right ) {
    return true;
  }

  if ( bst.left ) {
    if ( bst.left.val >= bst.val ) {
      return false;
    }
    isBst(bst.left);
  }

  if ( bst.right ) {
    if ( bst.right.val <= bst.val ) {
      return false;
    }
    isBst(bst.right);
  }

  return true;
};

const BinarySearchTree = require('./BinarySearchTree');

// Valid binary search tree tests
const insertInts = [3,1,4,6,9,2,5,7];
const insertChars = ["E","A","S","Y","Q","U","E","S","T","I","O","N"];

const BSTint = new BinarySearchTree();
insertInts.forEach(int => BSTint.add(int));

const BSTalpha = new BinarySearchTree();
insertChars.forEach(char => BSTalpha.add(char));

console.log(isBst(BSTint));
console.log(isBst(BSTalpha));

// Invalid binary search tree test
const insertDupes = [2,2,3,2,3,4,3,2,1];
const BSTdupes = new BinarySearchTree();
insertDupes.forEach(int => BSTdupes.add(int, int));

console.log(isBst(BSTdupes));
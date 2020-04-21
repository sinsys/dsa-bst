// Write an algorithm to find the height of a binary search tree. What is the 
// time complexity of your algorithm?

const BinarySearchTree = require('./BinarySearchTree');

const insertInts = [3,1,4,6,9,2,5,7];
const insertChars = ["E","A","S","Y","Q","U","E","S","T","I","O","N"];

const BSTint = new BinarySearchTree();
insertInts.forEach(int => BSTint.add(int));

const BSTalpha = new BinarySearchTree();
insertChars.forEach(char => BSTalpha.add(char));

const findHeight = (bst, height = 0) => {

  // If its empty, return 0
  if ( bst === null ) return 0;
  else {

    // Find left and right depths
    leftDepth = findHeight(bst.left);
    rightDepth = findHeight(bst.right);
    
    // Return the greater depth + 1 for the root node
    return leftDepth > rightDepth
      ? leftDepth + 1
      : rightDepth + 1;

  };
};

console.log(findHeight(BSTint));
console.log(findHeight(BSTalpha));
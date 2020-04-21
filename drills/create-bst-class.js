// Walk through the binary search tree code in the curriculum and understand it well. 
// Then write a BinarySearchTree class with its core functions (`insert()`, `remove()`,
// `find()`) from scratch.

//  - Create a binary search tree called BST and insert `3,1,4,6,9,2,5,7` into your tree.
//    Compare your result with the result from the 1st exercise.

//  - Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
//    Compare your result with the result from the 1st exercise.  

const BinarySearchTree = require('./BinarySearchTree');

const insertInts = [3,1,4,6,9,2,5,7];
const insertChars = ["E","A","S","Y","Q","U","E","S","T","I","O","N"];

const BST = new BinarySearchTree();
insertInts.forEach(int => BST.add(int));

console.log(BST);

const BST2 = new BinarySearchTree();
insertChars.forEach(char => BST2.add(char));

console.log(BST2);
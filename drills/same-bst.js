// You are given two arrays which represent two sequences of keys that 
// are used to create two binary search trees. Write a program that will 
// tell whether the two BSTs will be identical or not without actually 
// constructing the tree. You may use another data structure such as an 
// array or a linked list but don't construct the BST. What is the time 
// complexity of your algorithm? 

// E.g., 
// 3, 5, 4, 6, 1, 0, 2 
// and 
// 3, 1, 5, 2, 4, 6, 0 
// are two sequences of arrays but will create the exact same BSTs and 
// your program should return true.

// Check if two arrays will be the same bst
const isSameBst = (arrA, arrB) => {
  
  // Base Cases
  // If they aren't the same length, its false
  if ( arrA.length !== arrB.length ) return false;
  // If they have no length, it will be true
  if ( arrA.length === 0 ) return true;
  // If the root values don't match, return false
  if ( arrA[0] !== arrB[0] ) return false;

  // Gather our left and right "branches" for each array
  let arrAleft = arrA.filter(i => i < arrA[0]);
  let arrAright = arrA.filter(i => i > arrA[0]);

  let arrBleft = arrB.filter(i => i < arrB[0]);
  let arrBright = arrB.filter(i => i > arrB[0]);

  // Recursively call the left branch
  return !isSameBst(arrAleft, arrBleft)
    ? false
    // If the left branch is true, recursively call the right branch
    : isSameBst(arrAright, arrBright)
      ? true
      : false;
};

let arr1 = [3,5,4,6,1,0,2];
let arr2 = [3,1,5,2,4,6,0];

console.log(isSameBst(arr1, arr2)); // Expects true

arr1 = [3,5,4,6,12,0,2];
arr2 = [3,12,5,2,4,6,0];

console.log(isSameBst(arr1, arr2)); // Expects false
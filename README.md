# Data Structures & Algorithms

## Binary Search Trees

### 1. Draw a BST  

Given the data `3,1,4,6,9,2,5,7` if you were to insert this into an empty binary search tree, what would the tree look like? (Draw the tree, no coding needed here.)

  > ![Binary-Search-Tree-1](https://raw.githubusercontent.com/sinsys/dsa-bst/master/img/binary_tree_1.png)  

Draw the BST with the keys - E A S Y Q U E S T I O N  

  > ![Binary-Search-Tree-3](https://raw.githubusercontent.com/sinsys/dsa-bst/master/img/binary_tree_3.png)  

### 2. Remove the root  

Show how the above trees would look like if you deleted the root of each tree. (Draw the trees, no coding needed here.)

  > ![Binary-Search-Tree-1-root-removed](https://raw.githubusercontent.com/sinsys/dsa-bst/master/img/binary_tree_1_root_removed.png)  

  > ![Binary-Search-Tree-3-root-removed](https://raw.githubusercontent.com/sinsys/dsa-bst/master/img/binary_tree_3_root_removed.png)  

### 3. Create a BST class  

  > [BinarySearchTree.js](../master/drills/BinarySearchTree.js)  
  > [create-bst-class.js](../master/drills/create-bst-class.js)  

Walk through the binary search tree code in the curriculum and understand it well. Then write a BinarySearchTree class with its core functions (`add()`, `remove()`, `find()`) from scratch.

 - Create a binary search tree called BST and insert `3,1,4,6,9,2,5,7` into your tree. Compare your result with the result from the 1st exercise.
 - Create a binary search tree called BST and insert `E A S Y Q U E S T I O N` into your tree. Compare your result with the result from the 1st exercise.  

### 4. What does this program do?  

Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

  > This function will sum all of the values in the tree  

```javascript
     20
    /  \
  10    30
       /  \
     25    40
```  

  > This function with this tree as an argument would return 125.

```javascript
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
```  

### 5. Height of a BST  

  > [height-of-bst.js](../master/drills/height-of-bst.js)  
  > `O(n)`  

Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

### 6. Is it a BST?  

  > [is-it-bst.js](../master/drills/is-it-bst.js)  
  
Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

### 7. 3rd largest node  

  > [third-largest-node.js](../master/drills/third-largest-node.js)  
  
Write an algorithm to find the 3rd largest node in a binary search tree.

### 8. Balanced BST  

  > [balanced-bst.js](../master/drills/balanced-bst.js)  
  
Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

### 9. Are they the same BSTs?  

  > [same-bst.js](../master/drills/same-bst.js)  

You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.
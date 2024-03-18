// Arrays

// Arrays are the simplest data structure and we used them to store a list of items
// like a list of strings, numbers , objects etc. These items stored in the memory 
// sequentially. 
// e.g if we have 5 items in memory then the it get stored in the memory like this 
// 1=> 100, 2=>104, 3=>108, 4=>112, 5=>116 as an address.
// For this very reason finding the element using index is very fast.

// But there are some weakness and limitations of arrays, in many languages like Java 
// and C++ arrays ara static we have to define specify the length of them when alloc-
// ating and size cant be change later on. If we dont know about the length then we 
// have to guess the size and if our guess is to large memory is going to be wasted 
// and if the guess is so small then the array is going to fill very qucikly and then
// we have to create a new array then copying the prev items and adding them in new 
// array and the run time complexity of this is going to be O(n) depends on the size.

// For deleting the item we have to find the item and if that is going to be the last 
// then our run time complexity is going to be increased. For such kind of things we 
// use LINKED LIST.

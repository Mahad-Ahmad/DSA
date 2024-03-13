// O(n)

const example = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
// Here we have an array and we are iterating over the items and in this example
// size of the input matters. As if we have a single item in array we are gonna
// have one print operations and if we have millions items obviously we are gonna
// have million print operations so run time cost of this function grows LINEARLY
// and in direct relation to the size of the input and we represent this as O(n)
// where n represent the size of the inputs as it grows cost will also grows.

const anotherExample = (arr, names) => {
    console.log('something'); // O(1)
  for (let i = 0; i < arr.length; i++) { 
    console.log(arr[i]); // O(n)
  }

  for (let j = 0; j < names.length; j++) { 
    console.log(names[j]); // O(m)
  }
  console.log('something'); // O(1)
};
// O(1 + n + m + 1) ==> O(2 + n + m)

// In this example we have a run time complexity of O(2 + n + m). When using the 
// Big O notation we drop the constants because they don't really matters. e.g: if
// an array has one million in puts adding these 2 operations doesn't really 
// matters this is not going to add any significant impact on the cost of our algo-
// rithm as it cost still increases linearly. For n + m our time complexity is dire-
// ctly proportional to the input so we have to find the complexity and we can 
// write O(n) instead of O(n + m).



// O(n) Graph
//                                             -
//                                         -
//                                     -
//                                 -
//                             -
//                         -
//                     -
//                 - 
//             -  
//          -
//     -
// -

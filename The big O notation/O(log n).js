// O(log n)

// This is Logarithmic growth represented as O(log n) which is faster then the 
// Linear growth O(n) as Linear curve grows as the same rate as it is directly
// proportional to the size of the input whereas Logarithmic curve slows down at
// some point. So Algorithm that runs on Logarithmic time is faster and more sca-
// lable.

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


// O(log n) Graph
//                         -  -  -  -  -  -  -     
//                     -
//                 - 
//             -  
//          -
//     -
// -

// As we can see Linear curve grows with the same rate and Logarithmic curve 
// slows down at some point

const arr = [1,2,3,4,5,6,7,8,9,10]
// If we have to find 10 and we are using for loop then we have to iterate over
// the entire loop to find that number and if the size of the input grows then 
// the run time of algorithm also grows linearly

// Another approach is Binary Seach that runs in Logarithmic time much faster t-
// hen tha Linear one. In this search we sort our array then check the middle el-
// ement if its smaller then the searching number or not if yes then we will skip
// the first half elements and only search withing last half and then we again ch-
// eck the middle element if its smaller or not and skip the left ones and then 
// we will get our number, in every step we narrowing down by half.

// If we have 1 Million items in array we can find the element in maximun of 19
// comparison

// In short in Algorathmic growth algorithm we reduce our work by half in each step
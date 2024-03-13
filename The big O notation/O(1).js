// O(1)

const log = (arr) => {
  console.log(arr[0]); // O(1)
};

// Here we are consoling the fisrt item of the array no matter how big the array is it
// will print the first element on the console. This method has single operation here
// and take constant amount of time to run that and we represent that using O(1). This is
// the run time complexity of the method.

const log2 = (arr) => {
  console.log(arr[0]); // O(1)
  console.log(arr[0]); // O(1)
};
// O(1)

// If we duplicate the console and print the same element again the run time complexity
// is going to be same as O(1) because when we are checking the run time complexity we dont
// really care about the number of operations we just wanna know how much the alogrithm
// will slow down as input grows larger

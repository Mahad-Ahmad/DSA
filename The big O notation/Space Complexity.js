// Space Complexity

// In ideal world we want our alogorithm to be super fast and scalable and take
// min amount of memory but unfortunately thats not possible. Most of the time
// we have to to a trade between saving time and saving space. There is time
// when we have more space so we can use that to optimize our algorithm and make
// it faster and more scalable. Sometimes we have limited space like building an
// app for mobile in this situation we have to optimize for the space because sca-
// labilty is not a big factor only one user is going to use our application that
// moment.
// So we need a way to talk about how much space a algorithm requires thats where
// we use the Big O notation again.

const example = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
  }
};

// In this method we are declaring a loop variable that is independent of the size
// of the input. so weather our input array has Million items this method will only
// allocate some additional memory for this loop variable i. So it takes O(1) Space.

const anotherExample = (arr) => {
  const copy = arr;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
  }
};

// Now we are copying the array and the length of the new array is equal to the len-
// gth of the input so the space complexity of this method is O(n) Space. The more 
// item we have in array the more space this method gonna take and direct proportio-
// nal to the size of the input array thats why we have O(n) here. 

// When we talk about the Space Complexity we only look at the additional space that
// we should allocate relative to the size of the input so we have input of size "n"
// so we dont count it so just analize how much extra space we need to allocate for
// this algorithm.
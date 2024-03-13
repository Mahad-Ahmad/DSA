// O(n^2)

const example = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      // O(n)
      console.log(arr[i].firstName, ",", arr[j].firstName);
    }
  }
};
// O(n * n) ==> O(n ^ 2)

// Here we have a nested loop and we are printing all combination of names in an array.
// First loop runs on the time complexity of O(n) and on each time inner loop will run
// so its time complexity is also O(n) and by combining both we have O(n ^ 2). This al-
// gorithm will runs on QUADRATIC time. This is slower then O(n) and matters on the si-
// ze of the input.

const anotherExample = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    console.log(arr[i].firstName);
  }

  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      // O(n)
      for (let k = 0; k < arr.length; k++) {
        // O(n)
        console.log(
          arr[i].firstName,
          ",",
          arr[j].firstName,
          ",",
          arr[k].firstName
        );
      }
    }
  }
};
// O(n + n * n * n) ==> O(n ^ 3)

// Here we have 3 nested loops and one separate loop and the run time complexity of
// this algorithm is O(n + n ^ 3) but we can simplify that to O(n ^ 3) as n ^ 3 is 
// always greater then the n so it grows faster then n. So when working with Big O
// notation all we need is approx. run time complexity of the algorithm not the exact
// value.


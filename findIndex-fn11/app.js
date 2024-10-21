const customFindIndex = (
  arr = [],
  predicate = () => true // Default predicate always returns true
) => {
  // Handle edge case if array is not provided or empty
  if (arr.length === 0) {
    return -1;
  }

  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
    // If the predicate returns true, return the current index immediately
    if (predicate(arr[i])) {
      return i;
    }
  }

  // If no match is found, return -1
  return -1;
};

// Testing the function
console.log(customFindIndex([1, 2, 3], (n) => n === 2)); // Output: 1
console.log(customFindIndex([1, 2, 3], (n) => n === 4)); // Output: -1
console.log(customFindIndex([1, 2, 3])); // Output: 0
console.log(customFindIndex([], (n) => n === 4)); // Output: -1 (empty array)

/*
When no predicate is passed, the default predicate (() => true) will be used. This predicate is applied to each element of the array. Since it always returns true, the very first element of the array will satisfy this condition, and the function will return the index 0.
*/

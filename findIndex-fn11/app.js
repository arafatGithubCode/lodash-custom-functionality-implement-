const customFindIndex = (arr, predicate) => {
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

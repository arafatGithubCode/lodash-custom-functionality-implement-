const customDropRightWhile = (arr, predicate) => {
  // Iterate through the array from the end towards the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!predicate(arr[i])) {
      // Once predicate is false, return the array up to this point
      return arr.slice(0, i + 1);
    }
  }

  // If all elements satisfy the predicate, return an empty array
  return [];
};

// Test cases
const array = [1, 2, 3, 4];
console.log(customDropRightWhile(array, (n) => n > 2)); // Output: [1, 2]
console.log(customDropRightWhile(array, (n) => n < 5)); // Output: [] (all elements satisfy predicate)
console.log(customDropRightWhile(array, (n) => n > 4)); // Output: [1, 2, 3, 4] (no elements satisfy predicate)

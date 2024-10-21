const customDropWhile = (arr, predicate) => {
  // Iterate through the array from the beginning
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      // Once predicate is false, return the array from this point
      return arr.slice(i);
    }
  }

  // If all elements satisfy the predicate, return an empty array
  return [];
};

// Test cases
const array = [1, 2, 3, 4];
console.log(customDropWhile(array, (n) => n < 3)); // Output: [3, 4]
console.log(customDropWhile(array, (n) => n < 5)); // Output: [] (all elements satisfy predicate)
console.log(customDropWhile(array, (n) => n > 4)); // Output: [1, 2, 3, 4] (no elements satisfy predicate)

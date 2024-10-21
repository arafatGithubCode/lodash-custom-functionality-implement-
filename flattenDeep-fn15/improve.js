const customFlattenDeep = (arr = []) => {
  // Use reduce to recursively flatten the array
  return arr.reduce((flattened, item) => {
    // If item is an array, recursively flatten it and concat with the result
    return Array.isArray(item)
      ? flattened.concat(customFlattenDeep(item)) // Recursive call for nested arrays
      : flattened.concat(item); // Concatenate non-array items
  }, []);
};

// Test case
console.log(customFlattenDeep([1, 2, [3, [4, [5, [6, [7, [8]]]]]], "hero"]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, "hero"]

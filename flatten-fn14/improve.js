const customFlatten = (arr = []) => {
  return arr.reduce((flattened, item) => {
    return Array.isArray(item)
      ? flattened.concat(item) // If it's an array, concatenate it
      : flattened.concat([item]); // If it's not, just add the item
  }, []);
};

// Testing the function
console.log(customFlatten([1, [2, [3, [4]]], 5])); // Output: [1, 2, [3, [4]], 5]
console.log(customFlatten()); // Output: []
console.log(customFlatten([])); // Output: []

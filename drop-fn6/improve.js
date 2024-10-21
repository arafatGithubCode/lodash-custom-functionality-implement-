const customDrop = (arr, slicingPoint = 1) => {
  // If the slicing point is greater than or equal to the array length, return an empty array
  if (arr.length === 0 || slicingPoint >= arr.length) return [];

  // Return the array sliced from the slicing point
  return arr.slice(slicingPoint);
};

console.log(customDrop([1, 2, 3], 3)); // Output: []
console.log(customDrop([1, 2, 3])); // Output: [2, 3]
console.log(customDrop([1, 2, 3], 1)); // Output: [2, 3]
console.log(customDrop([], 1)); // Output: []

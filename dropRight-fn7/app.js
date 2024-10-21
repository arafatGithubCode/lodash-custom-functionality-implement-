const customDropRight = (arr, slicingPoint = 1) => {
  // If the array is empty or slicingPoint is greater than or equal to array length, return an empty array
  if (arr.length === 0 || slicingPoint >= arr.length) return [];

  // Return the array sliced from the start to the new endpoint
  return arr.slice(0, arr.length - slicingPoint);
};

// Testing the customDropRight function
console.log(customDropRight([1, 2, 3], 1)); // Output: [1, 2]
console.log(customDropRight([1, 2, 3], 2)); // Output: [1]
console.log(customDropRight([1, 2, 3], 3)); // Output: []
console.log(customDropRight([1, 2, 3])); // Output: [1, 2] (default dropping 1)
console.log(customDropRight([], 2)); // Output: []

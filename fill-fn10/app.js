const customFill = (arr, fillValue, sliceStart = 0, sliceEnd = arr.length) => {
  // Loop through the array and replace elements with fillValue
  for (let i = sliceStart; i < sliceEnd; i++) {
    arr[i] = fillValue;
  }

  // Return the modified array
  return arr;
};

// Testing the customFill function
console.log(customFill([1, 2, 3, 4, 5], "test", 1, 4)); // Output: [1, 'test', 'test', 'test', 5]

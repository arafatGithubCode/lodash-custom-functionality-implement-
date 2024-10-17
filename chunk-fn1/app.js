const customChunk = (arr, size) => {
  let chunked = [];

  // Check for an edge case where the chunk size is 0 or less
  if (size <= 0) {
    return chunked;
  }

  // Loop through the array and slice chunks of the specified size
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
};

const arr = [1, 2, 3, 4];
console.log(customChunk(arr, 2)); // Output: [[1, 2], [3, 4]]

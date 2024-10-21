const customFlatten = (arr = []) => {
  // if argument not provided
  if (arr.length === 0) return [];

  let flatten = [];

  // traverse first layer
  for (let i = 0; i < arr.length; i++) {
    // add base layer items
    if (!Array.isArray(arr[i])) {
      flatten.push(arr[i]);
    }
    // traverse and add second layer items
    if (Array.isArray(arr[i])) {
      arr[i].forEach((item) => flatten.push(item));
    }
  }

  return flatten;
};

console.log(customFlatten([1, [2, [3, [4]]], 5])); // [1, 2, [3, [4]], 5]
console.log(customFlatten()); // []
console.log(customFlatten([])); // []

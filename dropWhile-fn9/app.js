const customDropWhile = (arr = [], cb) => {
  let result = [];

  // traverse array items from starting
  for (let i = 0; i < arr.length; i++) {
    // all true value will be dropped -> if cb return true
    if (!cb(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(customDropWhile([1, 2, 8, 0, 26, 21, 100, 32], (n) => n < 80));

const customDifference = (arr1, arr2) => {
  return arr1.filter((item) => !arr2.includes(item));
};

console.log(customDifference([1, 2], [2, 3])); // Output: [1]

/*
The differenceBy function is similar to difference, but it allows for a custom function to be applied to each element of the arrays. It performs the comparison based on the result of applying this function.

_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 => [1.2]

 Here, Math.floor is applied to each element, so [2.1, 1.2] becomes [2, 1] and [2.3, 3.4] becomes [2, 3]. After comparison, only 1.2 remains.

*/

const customDifferenceBy = (arr1, arr2, iteratee) => {
  const transformedArr2 = arr2.map(iteratee);
  return arr1.filter((item) => !transformedArr2.includes(iteratee(item)));
};

console.log(customDifferenceBy([2.8, 1.9], [3.2, 2.9], Math.floor));

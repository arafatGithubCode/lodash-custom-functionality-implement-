// exactly same to findIndex just traverse from ending(right to left);

const findLastIndex = (arr = [], predicate = () => arr.length - 1) => {
  if (arr.length === 0) {
    return [];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) {
      return i;
    }
  }

  return -1;
};

const test = [1, 2, 3, 4];

console.log(findLastIndex([1, 2, 3, 4], (n) => n === 55)); // -1
console.log(findLastIndex([1, 2, 3, 4], (n) => n === 4)); // 3
console.log(findLastIndex([1, 2, 3, 4])); // 3 (last index)
console.log(findLastIndex()); // []

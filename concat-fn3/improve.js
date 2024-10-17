const customConcat = (...arg) => {
  let concat = [];

  if (arg.length === 0) {
    return concat;
  }

  if (arg.length > 0) {
    arg.forEach((item) => {
      item.forEach((item) => concat.push(item));
    });
  }

  return concat;
};

const arr1 = [1, 2, 3];
const arr2 = [4, "five", "six"];

console.log(customConcat(arr1, arr2));

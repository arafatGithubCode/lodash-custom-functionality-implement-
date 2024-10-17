const customConcat = (...arg) => {
  let concat = [];

  if (arg.length === 0) {
    return concat;
  }

  for (let i = 0; i < arg.length; i++) {
    for (let j = 0; j < arg[i].length; j++) {
      concat.push(arg[i][j]);
    }
  }

  return concat;
};

const arr1 = [1, 2, 3];
const arr2 = [4, "five", "six"];

console.log(customConcat(arr1, arr2));

const customCompact = (...arg) => {
  let compact = [];

  // check for handling empty case
  if (arg.length === 0) return compact;

  // fltten the arr and push the truthy values
  for (let i = 0; i < arg.length; i++) {
    arg[i].forEach((item) => {
      if (item) {
        compact.push(item);
      }
    });
  }

  return compact;
};

console.log(customCompact());

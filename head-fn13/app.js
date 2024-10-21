const customHead = (arr = []) => {
  // nothing passed -> return undefined
  if (arr.length === 0) return undefined;

  return arr[0];
};

console.log(customHead([1, "one", 2]));

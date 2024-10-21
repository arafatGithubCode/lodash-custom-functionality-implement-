const customDrop = (arr, slicingPoint) => {
  let drop = [];

  if (arr.length === 0 || slicingPoint >= arr.length) return drop;

  if (!slicingPoint) return arr.slice(1);
  if (slicingPoint) {
    return arr.slice(slicingPoint);
  }

  return drop;
};

console.log(customDrop([1, 2, 3], 3));

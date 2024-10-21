const customFlattenDeep = (arr = []) => {
  // return empty array for no-parameter & [];
  if (arr.length === 0) return [];

  const flattenDeep = [];

  // flatten down multiple layer
  const layerFlatten = (layer) => {
    layer.forEach((v) =>
      Array.isArray(v) ? layerFlatten(v) : flattenDeep.push(v)
    );
  };

  // traverse and check each item -> single item added -> array item passed to layerFlatten function
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      layerFlatten(arr[i]);
    } else {
      flattenDeep.push(arr[i]);
    }
  }

  return flattenDeep;
};

console.log(customFlattenDeep([1, 2, [3, [4, [5, [6, [7, [8]]]]]], "hero"]));

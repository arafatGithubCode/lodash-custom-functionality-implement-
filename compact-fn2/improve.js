const customCompact = (...args) => {
  let compact = [];

  // Return an empty array if no arguments are passed
  if (args.length === 0) return compact;

  // Flatten the array and filter out falsy values
  args.forEach((arg) => {
    arg.forEach((item) => {
      if (item) compact.push(item); // Push only truthy values
    });
  });

  return compact;
};

// Example usage
console.log(customCompact([0, 1, false, 2, "", 3, null, 4])); // Output: [1, 2, 3, 4]

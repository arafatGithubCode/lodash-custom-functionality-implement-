/*

I understand why `_.dropRightWhile` might be confusing! It's a bit more complex than the standard `dropRight` because it uses a **predicate function** to decide how many elements to drop from the end of an array.

Let's break down how `_.dropRightWhile` works and how you can implement it step by step.

### How `_.dropRightWhile` Works:

- `_.dropRightWhile` removes elements **from the end of the array**, but **only as long as** a certain condition (the predicate) is **true**.
- As soon as the condition becomes **false** for an element, it stops removing and keeps the rest of the array intact.

### Example:

```javascript
const array = [1, 2, 3, 4];
_.dropRightWhile(array, n => n > 2);
// => [1, 2]
```

**Explanation**:
- The function starts checking from the **end** of the array.
- The predicate is `n => n > 2`, so it drops `4` and `3` because they satisfy the condition (`n > 2`).
- When it encounters `2` (which doesn’t satisfy `n > 2`), it stops and keeps the remaining elements `[1, 2]`.

### Parameters:
1. **array**: The array you are operating on.
2. **predicate**: A function that determines whether an element should be dropped. It’s applied to each element from **right to left** (starting from the end).

### Steps to Implement:

1. **Iterate from the right**: You need to iterate over the array starting from the last element.
2. **Evaluate the predicate**: For each element, check if it satisfies the condition defined by the predicate.
3. **Drop elements**: Keep dropping elements as long as the predicate returns `true`.
4. **Stop when predicate returns false**: As soon as the predicate returns `false`, stop dropping and return the remaining part of the array.

---

### Custom Implementation of `dropRightWhile`:

```javascript
const customDropRightWhile = (arr, predicate) => {
  // Iterate through the array from the end towards the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!predicate(arr[i])) {
      // Once predicate is false, return the array up to this point
      return arr.slice(0, i + 1);
    }
  }

  // If all elements satisfy the predicate, return an empty array
  return [];
};

// Test cases
const array = [1, 2, 3, 4];
console.log(customDropRightWhile(array, n => n > 2)); // Output: [1, 2]
console.log(customDropRightWhile(array, n => n < 5)); // Output: [] (all elements satisfy predicate)
console.log(customDropRightWhile(array, n => n > 4)); // Output: [1, 2, 3, 4] (no elements satisfy predicate)
```

### Explanation:
1. **Iterating from the end**: The loop starts from the last element (`arr.length - 1`) and moves backward.
2. **Predicate evaluation**: If the predicate returns `false` for an element, the array is sliced up to (and including) that element. This stops the dropping process.
3. **Return early**: As soon as you find an element that does not match the predicate, you return the sliced array up to that point.
4. **Edge case**: If all elements match the predicate (i.e., the loop never finds a `false` predicate result), an empty array is returned.

### Key Concepts:
- **Predicate**: A function that determines whether to drop an element. It’s called on each element starting from the right.
- **Stopping point**: The process stops when the first element from the right doesn't match the condition.
- **Slicing**: The final array is the portion that’s left once you stop dropping elements.

### Example Walkthrough:

For `customDropRightWhile([1, 2, 3, 4], n => n > 2)`:

- The array is `[1, 2, 3, 4]`.
- Start checking from the right:
  - `4 > 2` → drop `4`.
  - `3 > 2` → drop `3`.
  - `2 > 2` → false (stop here).
- Slice the array up to index `1`, returning `[1, 2]`.

---

### Conclusion:

- `_.dropRightWhile` works by dropping elements from the right of an array **as long as** they satisfy a condition.
- The custom implementation iterates from the end and uses a predicate to decide when to stop dropping elements.

Does this breakdown help clarify how `_.dropRightWhile` works and how to implement it? Let me know if you'd like further clarification or more examples!

*/

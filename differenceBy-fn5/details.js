/* 
Ah, I see where the confusion is coming from! The difference between **calling** a function (e.g., `Math.floor()`) and **referencing** a function (e.g., `Math.floor`) is a very common question, and it’s important to understand this distinction when working with functions in JavaScript (or most programming languages).

Let’s break it down:

### Function **Referencing** vs **Calling**:

- **Referencing a function**: 
  When you write `Math.floor` (without parentheses), you are simply referring to the function itself. This doesn't execute the function, it just points to it, allowing you to pass it around as a value (like passing a variable). For example, this is useful when you want to pass a function to another function as an argument (like in `differenceBy`).

- **Calling a function**: 
  When you write `Math.floor()` (with parentheses), you are actually invoking (or executing) the function. This means the function runs right away and returns a result. The parentheses tell the program to execute the code inside the function.

---

### Applying this to `Math.floor` in the `differenceBy` example:

#### 1. **When you reference `Math.floor`**:
You are passing the function as an argument to another function, like this:
```javascript
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
```
Here, `Math.floor` is just a reference to the function, and `differenceBy` will call `Math.floor()` internally when it needs to transform each element for comparison. **You’re not running it directly**; you're just telling `differenceBy` to use this function to transform elements when comparing.

This is like giving instructions: "Hey `differenceBy`, whenever you need to transform an element, use `Math.floor` to do it."

#### 2. **When you call `Math.floor()`**:
If you were to write `Math.floor(2.1)`, for example, you are saying "run `Math.floor` **right now** with the argument `2.1` and give me the result." It will immediately return `2`. The function is executed at that moment, and the returned value can be used directly.

---

### Example:
Let's look at two versions to make this clearer:

#### **Referencing the function** (function passed as an argument):
```javascript
function customDifferenceBy(arr1, arr2, iteratee) {
  const transformedArr2 = arr2.map(iteratee); // Here we pass iteratee as reference
  return arr1.filter(item => !transformedArr2.includes(iteratee(item)));
}

console.log(customDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// Output: [1.2]
```
Here, `Math.floor` is **referenced** and passed into `customDifferenceBy`. Inside the function, `Math.floor()` will be called on each element when it’s needed.

#### **Calling the function directly** (executing right away):
```javascript
console.log(Math.floor(2.1)); // Calls the function immediately
// Output: 2
```
In this case, you're **calling** `Math.floor()` immediately and getting the result `2` right away.

### Summary:
- **Function reference** (e.g., `Math.floor`): You’re passing the function itself, so it can be called later when needed (useful in cases like `differenceBy` where the function is applied to each array element).
- **Function call** (e.g., `Math.floor(2.1)`): You’re executing the function immediately and getting its result at that moment.

---

Does this clear up your confusion between referencing and calling functions? Let me know if you'd like to dig deeper into this!

*/

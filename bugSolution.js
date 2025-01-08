function foo(x) {
  if (x === null || x === undefined || isNaN(x)) {
    return 0;
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(0)); // Output: 1
console.log(foo(NaN)); // Output: 0
console.log(foo(5)); // Output: 6
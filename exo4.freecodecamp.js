function steamrollArray(arr) {
  const result = [];

  (function flatten(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flatten(item[i]);
      }
    } else {
      result.push(item);
    }
  })(arr);

  return result;
}

//Examples
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([[["a"]], [["b"]]]));   // ["a", "b"]
console.log(steamrollArray([1, {}, [3, [[4]]], []])); // [1, {}, 3, 4]

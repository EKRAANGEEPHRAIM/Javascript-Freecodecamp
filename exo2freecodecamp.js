function whatIsInAName(collection, source) {
  // Get all keys from the source object
  const sourceKeys = Object.keys(source);

  // Filter the collection
  return collection.filter(obj => {
    // Check if every key-value pair in source exists in obj
    return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}

// Example usage:
const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

const source = { last: "Capulet" };

console.log(whatIsInAName(collection, source));
// Output: [ { first: "Tybalt", last: "Capulet" } ]

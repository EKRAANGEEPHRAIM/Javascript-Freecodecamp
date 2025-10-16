function diffArray (arr1,arr2) {

const filteredArr1 = arr1.filter(item => !arr2.includes(item));

const filteredArr2 = arr2.filter(item => !arr1.includes(item) )


return [...filteredArr1,...filteredArr2];
}

//An example

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //  [4]
console.log(diffArray(["a", "b"], ["a", "b"]));        //  []
console.log(diffArray([1, 2, 3], [3, 4, 5]));          //  [1, 2, 4, 5]
console.log(diffArray([], []));
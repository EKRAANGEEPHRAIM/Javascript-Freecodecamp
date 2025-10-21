// higher-order function

function makeMultiplier(multiple) {
    return function (x) {
        return x * multiple
    };
}

const double = makeMultiplier(20);
console.log(double(5));
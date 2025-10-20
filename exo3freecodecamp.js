function sumPrimes(num) {
  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

// Example usage:
console.log(sumPrimes(10)); // Output: 17 (2 + 3 + 5 + 7)
console.log(sumPrimes(1));  // Output: 0

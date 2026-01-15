function FibonacciNumber(n) {
  if (n <= 1) return n;
  return FibonacciNumber(n - 1) + FibonacciNumber(n - 2);
}

function main() {
  let n = 5;
  console.log("Total Fibonacci: ", FibonacciNumber(n));
  let result = "";
  for (let i = 0; i <= n; i++) {
    result += FibonacciNumber(i) + " ";
  }
  console.log("Fibonacci Series: ", result);
}

main();

// Time Complexity - O(2^n) - Exponential in nature,
// because calling 2 recursion calls in every one recursion call
// Space Complexity - O(N) - recursion call stack goes as deep as N

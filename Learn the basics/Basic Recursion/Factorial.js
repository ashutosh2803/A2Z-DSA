function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function main() {
  let n = 5;
  console.log(factorial(n));
}

main();

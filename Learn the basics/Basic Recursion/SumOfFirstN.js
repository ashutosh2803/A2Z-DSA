function SumOfFirstN(n) {
  if (n === 0) return 0;
  return n + SumOfFirstN(n - 1);
}

function main() {
  let n = 6;
  console.log(SumOfFirstN(n));
}

main();

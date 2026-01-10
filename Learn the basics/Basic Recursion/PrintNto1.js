function Print1toN(n) {
  if (n === 0) return;
  console.log(n);
  Print1toN(n - 1);
}

function main() {
  let n = 10;
  Print1toN(n);
}

main();

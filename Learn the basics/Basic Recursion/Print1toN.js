function Print1toN(n) {
  if (n === 0) return;
  Print1toN(n - 1);
  console.log(n);
}

function main() {
  let n = 10;
  Print1toN(n);
}

main();

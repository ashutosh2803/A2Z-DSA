function CountDigits(n) {
  return Math.floor(Math.log10(n) + 1);
}

function main() {
  let n = 412421;
  let count = CountDigits(n);
  console.log("Count: ", count);
}

main();

function PrintNTimes(n) {
  if (n === 0) return;
  console.log("Printing " + n + "th time");
  return PrintNTimes(n - 1);
}

function main() {
  let n = 10;
  PrintNTimes(n);
}

main();

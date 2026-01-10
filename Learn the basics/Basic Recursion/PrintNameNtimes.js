function PrintNameNtimes(n) {
  if (n === 0) return;
  console.log("Ashutosh");
  PrintNameNtimes(n - 1);
}

function main() {
  let n = 5;
  PrintNameNtimes(n);
}

main();

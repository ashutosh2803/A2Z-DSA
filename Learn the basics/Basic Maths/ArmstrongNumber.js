function ArmstrongNumber(n) {
  let digitCount = Math.floor(Math.log10(n) + 1);
  let original = n;
  let calculation = 0;
  while (n > 0) {
    let rem = n % 10;
    calculation = Math.pow(rem, digitCount) + calculation;
    n = Math.floor(n / 10);
  }
  return original === calculation;
}

function main() {
  let n = 153;
  console.log(ArmstrongNumber(n));
}

main();

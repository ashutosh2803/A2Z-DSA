function ReverseNumber(n) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -1 * Math.pow(2, 31);

  let revNum = 0;
  while (n > 0) {
    let temp = n % 10;
    n = Math.trunc(n / 10);
    if (
      revNum > Math.trunc(INT_MAX / 10) ||
      (revNum === Math.trunc(INT_MAX / 10) && revNum > 7)
    )
      return 0;
    if (
      revNum < Math.trunc(INT_MIN / 10) ||
      (revNum === Math.trunc(INT_MIN / 10) && revNum < -8)
    )
      return 0;
    revNum = revNum * 10 + temp;
  }
  return revNum;
}

function main() {
  // reverse in the limit of 32 bits
  let n = 12451;
  let result = ReverseNumber(n);
  console.log("Input: ", n);
  console.log("Output: ", result);
}

main();

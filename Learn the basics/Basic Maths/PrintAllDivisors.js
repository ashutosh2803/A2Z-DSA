function PrintAllDivisors(n) {
  let res = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      res.push(i);
      if (n / i !== i) res.push(n / i);
    }
  }
  return res;
}

function main() {
  let n = 36;
  console.log(PrintAllDivisors(n));
}

main();

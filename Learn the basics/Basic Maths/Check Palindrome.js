function checkPalindrome(num) {
  let revNum = 0;
  let original = num;
  while (num > 0) {
    let rem = num % 10;
    revNum = revNum * 10 + rem;
    num = Math.floor(num / 10);
  }
  return original === revNum;
}

function main() {
  let input = 121;
  let result = checkPalindrome(input);
  console.log(result);
}

main();

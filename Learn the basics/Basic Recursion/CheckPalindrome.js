function CheckPalindrome(i, str) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;
  return CheckPalindrome(i + 1, str);
}

function main() {
  let str = "madam";
  console.log(CheckPalindrome(0, str));
}

main();

// Time Complexity - O(N / 2) - Going till half
// Space Complexity - O(N/2) - recursion call stack

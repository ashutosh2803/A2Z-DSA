function LargestElement(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function main() {
  let arr = [8, 10, 5, 7, 9];
  console.log(LargestElement(arr));
}

main();

// Time Complexity = O(N)
// Space Complexity = O(1)

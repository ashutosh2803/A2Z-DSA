function ReverseArrayTwoPointer(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function ReverseArrayUsingRecursion(i, arr) {
  if (i >= arr.length / 2) return arr;

  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;

  return ReverseArrayUsingRecursion(i + 1, arr);
}

function main() {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Two Pointer: ", ReverseArrayTwoPointer(arr1));
  console.log("Recursion: ", ReverseArrayUsingRecursion(0, arr2));
}

main();

// Time Complexity = O(N)
// Space Complexity = O(N) - recursion call stack

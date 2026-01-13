function CountFrequency(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  map.forEach((value, key) => {
    console.log(key, value);
  });
}

function main() {
  let arr = [10, 5, 10, 15, 10, 5]; // Output: 10 3
  CountFrequency(arr);
}

main();

// Time Complexity - O(N)
// Space Complexity - O(N)

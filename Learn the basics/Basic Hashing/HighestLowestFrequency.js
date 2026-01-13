function HighestLowestFrequency(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let highest = 0;
  let lowest = arr.length;
  let highestElement = 0;
  let lowestElement = 0;
  map.forEach((value, key) => {
    if (highest < value) {
      highest = value;
      highestElement = key;
    }
    if (lowest > value) {
      lowest = value;
      lowestElement = key;
    }
  });
  console.log(highestElement, lowestElement);
}

function main() {
  let arr = [10, 5, 10, 15, 10, 5]; // 10 15    10 is highest and 15 is lowest
  HighestLowestFrequency(arr);
}

main();

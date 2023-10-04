let orderedArr = Array.from({
  length: 100},
  (value, index) => index
)
console.log(orderedArr);

let iterations = 0;
// create binary search
let findIndex = (arr, value, lo = 0, hi = (arr.length - 1)) => {
  iterations++;
  let m = Math.floor(lo + (hi - lo) / 2);
  console.log('currentValue: ', arr[m]);
  if (arr[m] === value) {
    return m
  } else if (value < arr[m]) {
    hi = m - 1;
  } else if (value > arr[m]) {
    lo = m + 1;
  }
  if (lo > hi) {
    return -1;
  } else {
    return (findIndex(arr, value, lo, hi));
  }
}

console.log('index: ', findIndex(orderedArr, -3));
console.log('iterations: ', iterations);

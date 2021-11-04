function myBinarySearch(arr, n) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < n) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > n) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
  return -1;
}

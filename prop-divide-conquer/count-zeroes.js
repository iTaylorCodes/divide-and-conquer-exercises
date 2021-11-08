function countZeroes(arr) {
  let zeroCount = 0;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === 0) {
      if (arr[middleIdx - 1] === 1 || arr[middleIdx - 1] === undefined) {
        zeroCount = arr.splice(middleIdx).length;
      }
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return zeroCount;
}

module.exports = countZeroes;

function consecutive(arr) {
  let maxCount = 0;
  let tempCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      tempCount++;
    } else if (tempCount > maxCount) {
      maxCount = tempCount;
      tempCount = 0;
    }
  }
  return maxCount;
}

console.log(consecutive([2, 1, 1, 1, 4, 1, 1]));

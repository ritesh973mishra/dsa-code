function checkIfArrayIsSorted(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}

console.log(checkIfArrayIsSorted([1, 2, 3, 4, 4, 5, 6, 88]));

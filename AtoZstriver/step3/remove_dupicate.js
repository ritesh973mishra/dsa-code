function removeDuplicate(arr) {
    let isSorted = true;
    let uniqueArr = [];
    uniqueArr.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] != arr[i -1]) {
        uniqueArr.push(arr[i])
      }
    }
    return uniqueArr;
  }
  
  console.log(removeDuplicate([1, 2, 3, 4, 4, 5, 6,6, 88]));
  
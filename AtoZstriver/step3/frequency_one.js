function getFrequency(arr) {
  let obj = {};
  console.log("===>>>>>>>>>>>><<<<<<<<");
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  for (let item in obj) {
    if (obj[item] == 1) {
      return item;
    }
  }
}

console.log(getFrequency([4, 1, 2, 1, 2]));

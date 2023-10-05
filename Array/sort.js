let arr = [23, 1, 45, 6, 78, 3];

function sortme1() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      //sort in desending
      // if(arr[j+1] > arr[j]){
      //     let temp = arr[i]
      //     arr[i] = arr[j]
      //     arr[j] = temp

      // }

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}



sortme();

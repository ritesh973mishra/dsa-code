function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }


  console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]



function bubblesort(data){
    
    for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data.length;j++){
          if(data[j]>data[j+1]){
            [data[j], data[j+1]] =  [data[j+1], data[j]]
          }
        }
    }
    return data
}


//desending order
function bubblesortDesc(data){
    
    for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data.length;j++){
          if(data[j+1]>data[j]){
            [data[j+1], data[j]] =  [data[j], data[j+1]]
          }
        }
    }
    return data
}

console.log(bubblesort([3, 5, 1, 2])) // [1, 2, 3, 5]

console.log(bubblesortDesc([3, 5, 1, 2])) // [1, 2, 3, 5]





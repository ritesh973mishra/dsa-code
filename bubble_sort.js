
function bubbleSort(data) {
    let arr = data
    // for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        let temp = arr[j];
        if (arr[j] > arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    // }
    return arr
}

// const result = bubbleSort([12, 3, 56, 78, 0.9])
// console.log(result)

function bubbleSortTwo(arr) {
    do {
        let checked

        checked = false
        for (var i = 0; i < arr.length; i++) {
            let temp = arr[i];
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                checked = true;
            }
        }

    }  while (true)
  
    return arr

}

const result = bubbleSortTwo([12, 3, 56, 78, 0.9])

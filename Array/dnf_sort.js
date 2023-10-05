let arr = [1, 1, 0, 1, 2, 0, 1, 2, 0]
let low = 0;
let mid = 0;
let high = arr.length - 1

function dnfSort() {
    while (mid <= high) {

        if (arr[mid] == 0) {
            swapme(low, mid)
            mid++
            low++
        } else if (arr[mid] == 1) {
            mid++
        } else {
            swapme(mid, high)
            high--
        }
    }

    console.log("========arr==============", arr)

}

function swapme(i, j) {

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


}


dnfSort()


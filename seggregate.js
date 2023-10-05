// problem link:https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/


function seggregation(arr, n) {

    let low = 0
    let mid = 0
    let high = arr[n - 1]
    let temp = 0

    while (mid <= high) {
        if (array[mid] == 0) {
            temp = arr[low]
            arr[low] = arr[mid]
            arr[mid] = temp
            mid++
            low++

        }
        else if (array[mid] == 1) {
            mid++;
        }
        else {
            temp = arr[high]
            arr[high] = arr[mid]
            arr[mid] = temp
            high--

        }
    }
}
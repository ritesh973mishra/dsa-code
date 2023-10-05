let arr = [12, 45, 67, 87, 34, 78]
let postion = 3
let element = 45



function deleteArrayElmt(arr,  position) {
    console.log(arr)

    for (let i = position; i <= arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    console.log(arr)

    arr.length =arr.length-1
    console.log(arr)
}




deleteArrayElmt(arr, postion)




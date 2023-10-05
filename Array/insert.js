let arr = [12, 45, 67, 87, 34, 78]
let postion = 3
let element = 45

// i wll start start reverse loop  and inscrease the position of element by one till the actual postion comes(descending)
// ones we reach at actual postion we will insert our new element

function insert(arr, elment, position) {
    console.log(arr)

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i >= postion) { // we will check if position is not reached 
            arr[i + 1] = arr[i]  
            if (i == position) {
                arr[i] = elment
            }
        }
    }
    console.log(arr)
}




insert(arr, element,postion)




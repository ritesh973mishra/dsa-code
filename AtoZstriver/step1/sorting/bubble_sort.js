
//Ascending order
function bubbleSort(arr){
    let n = arr.length;
    let swapped

    for(let i = 0; i <n-1; i++){
        swapped = false;
        
        for(let j  = 0; j < n- 1 - i ; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
            swapped = true
        }

        if(!swapped){
            break;
        }
    }


    return arr

}

//desecnding order

function bubbleSort(arr){
    let n = arr.length;
    let swapped

    for(let i = 0; i <n-1; i++){
        swapped = false;
        
        for(let j  = 0; j < n- 1 - i ; j++){
            if(arr[j]< arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
            swapped = true
        }

        if(!swapped){
            break;
        }
    }


    return arr

}

console.log(bubbleSort([34,1,4,22,56,1,44,3]))
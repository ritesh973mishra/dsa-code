

function maxInArray(arr){
    let max  =  arr[0]
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    return max
}


console.log(maxInArray([1,3,4,22,4,6]))
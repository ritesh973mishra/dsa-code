

function maxInArray(arr){
    let max  =  arr[0];
    let secondMax = null

    let min = arr[0]
    let secondMin = null;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            secondMax = max
            max = arr[i]
        }

        if(arr[i] < min){
            secondMin = min
            min = arr[i]
        }
        if(arr[i] < max && arr[i] > secondMax){
            secondMax  = arr[i]
        }

       
    }
    console.log("==>>>min>>>>",min,secondMin)

    return secondMax
}


console.log(maxInArray([2,1,3,4,22,4,6]))
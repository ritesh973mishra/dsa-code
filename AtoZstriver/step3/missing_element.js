function missingNumber(arr){
    let missingNumber =  null
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] != i+1){
            missingNumber = i+1
            break;
        }
    }

    return missingNumber

}

console.log(missingNumber([1,2,3,5,6]));
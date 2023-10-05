

function rotateArray(arr, k, position){

    const n = arr.length;
    if (n === 0 || k === 0) {
        return arr; // Nothing to rotate
    }
    
    let rotate =  [...arr.slice(-k), ...arr.slice(0,n-k)]
    console.log("=>>>>>>>>>>>>>>>",[...arr.splice(-k), ...arr.splice(0,n-k)])
    // return rotate
}


rotateArray([1,3,2,5,4,6],2,"right")
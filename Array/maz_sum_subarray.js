

//kindanes algorithm
let arr = [5,-1,5,6,-8,2]
function maxSum(){
    let max = arr[0]
    let current = 0
    let i = 0

    for(let i = 0; i<arr.length ; i++){
        current = arr[i] >arr[i] + current ? arr[i]:arr[i] + current;
        max = current >max? current:max;
    }

    console.log(max)

    // while(i<arr.length){
       
    // }

}

maxSum()
let arr = [1,2,3,4,5,6,7,8]

// [6,7,8,1,2,3,4,5]
let k =3;
let n = arr.length


function cyclicRotation(){
    swap(0,n-k-1)
    swap(n-k, n-1)
    swap(0,n-1)
    console.log(arr)

}

function swap(i,j){

    while(i<j){
        let temp = arr[i];
        arr[i] =arr[j];
        arr[j] =temp;
        i++
        j--
    }

}

cyclicRotation()
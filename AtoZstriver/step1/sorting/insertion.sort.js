

function insertion(arr){


    for(let i = 1; i < arr.length ; i++){
        let currentElement = arr[i];
        let j = i-1;

        while( j>=0 && arr[j]>currentElement){
            arr[j+1] =  arr[j];
            j--;
        }
        arr[j + 1] = currentElement;
   

    }

    return arr

}

console.log(insertion([7,8,9,2,1,0,8]))
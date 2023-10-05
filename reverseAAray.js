
function reverseArray(arr,start,end){
    
    let temp;
    
    while(start<=end){
        temp = arr[start];
        arr[start] = arr[end]
        arr[end] =temp
        start++
        end--
   }
 
}
reverseArray([1,2,3,4],0,3)
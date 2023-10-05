function minmax(arr,n){
    let minmax={}
    if(n==1){
        minmax.min = array[0]
        minmax.max = array[1]
        return minmax
    } 
       if(array[0] < array[1]) {
        minmax.min = array[0]
        minmax.max = array[1]
       }else{
        minmax.min = array[1]
        minmax.max = array[0]
       }
   
        for(let i = 2 ; i<n ; i++){
            if(array[i] > minmax.max){
                minmax.max =array[i]
            }else if(array[i] < minmax.max){
                minmax.min =array[i]
            }
    
    }

    

}
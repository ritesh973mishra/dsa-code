function rec(count,n){

    if(count  < n){
        console.log("ritesh")
        count ++;
        rec(count,4)
    }else{
        return false
    }
}

// rec(0,4)


 function rec2(i,n){
    console.log(i);
    if(i<n){
        rec2(i++,n)
    }else{
        return false
    }
    
 }

 rec2(0,4)
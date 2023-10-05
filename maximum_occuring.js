function maxOccuring(data){
    let obj = {}
    let maxCount = 0
    let ele
    for(let i = 0 ; i <data.length; i++){
        obj[data[i]] = (obj[data[i]] || 0 )+ 1
        if(obj[data[i]]>maxCount){
            maxCount = obj[data[i]]
            ele =data[i]
        }
    }
 
   console.log(ele,maxCount)
}

maxOccuring([1,3,4, 5,7,7,8,9])
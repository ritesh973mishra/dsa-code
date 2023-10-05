let arr = [12,-2,34,-6,45,6,-5]
let i = 0;
let j = arr.length-1


//Two Poiter problem
function sortme(){
    let count  = 0

    while(i<=j){
        count++
    
       if(arr[i] < 0 && arr[j] < 0){
         i++
       }
       else if(arr[i] > 0 && arr[j] > 0)
       {

                j--
        }
        else if(arr[i] > 0 && arr[j] < 0 ){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
        
        else{
            i++
            j--
        }

    }

    console.log(count)



}


// function sortme(){
//     let count = 0
   
//     while(i<=j){
//         count++
//         if(arr[i] <0){
//             i ++
//         }
//         else if(arr[j] >0 ){
//             j--
//         }
//         else{
//             let temp   = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
    
//     }

    
// console.log(count)

// }


sortme()

console.log("=================arr",arr)

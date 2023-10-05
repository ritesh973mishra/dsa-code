
let arr = [1,1,3,4,1]

// function isDuplicateAvailabel(){
//     let obj = {}
//     console.log("========================")
//     for (let i = 0 ; i <arr.length; i++){
//         obj[arr[i]] = (obj[arr[i]] || 0 )+1
//         if(obj[arr[i]]>1){
//             return true
//         }
//     }
// }
var containsDuplicate = function(nums) {
    let obj = {}
   for (let i = 0 ; i < nums.length; i++){
       obj[nums[i]] = (obj[nums[i]] || 0 )+1
       if(obj[nums[i]]>1){
           return true
       }
   }
   
};

console.log(isDuplicateAvailabel())
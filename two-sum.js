// let twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
       
//          for(let j=1; j<nums.length;j++){
//         if(nums[i]  + nums[j] === target && i != j){
        
//            return [i,j]
//         }
        
//     }
//     }

// };
// const twoSum = function(numbers, target) {
//     const comp = {};
//     for(let i=0; i<numbers.length; i++){
//         console.log("===",comp[numbers[i]])
//         if(comp[numbers[i] ]){
//             return [ comp[numbers[i] ] , i]
//         }
//         comp[target-numbers[i]] = i
//         console.log(comp)
//     }
// };


var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;    
    while(left <= right) {
        const leftVal = numbers[left];
        const rightVal = numbers[right];
        const sum = leftVal + rightVal;
        
        if (sum > target)
            right--;
        else if(sum < target)
            left++
        else
            return [left+1, right+1]
    }
};

const result  = twoSum([2,61,4,6],10)
console.log("++++++++++++++++++++++",result)
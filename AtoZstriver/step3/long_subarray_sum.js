


// brute force approach
function largestSubArraySum(arr,target){
    let sum = 0
    let maxLen = 0
    for(let i = 0; i<arr.length; i ++){
        for(let j = i; j<arr.length; j ++){
            let currentSum = 0
            for(let k = i; k<=j; k++){
                currentSum += arr[k]
            } 
            sum = Math.max(sum,currentSum)
            if(sum == target) {
                maxLen = Math.max(maxLen,j-i+1)
            }
        } 

    }
    return {sum,maxLen}

}
console.log(largestSubArraySum([2,-3,3,5,1,6,1],8))


// optimized approach

function largestSubArraySum(arr,taget){
    let target
    let sum = 0
    for(let i = 0; i<arr.length; i ++){
        let currentSum = 0

        for(let j = i; j<arr.length; j ++){
            currentSum += arr[j];
            sum = Math.max(sum,currentSum)

        } 

    }

    return sum

}

// console.log(largestSubArraySum([2, 3, -5,5, 1,-11, 9]))
function largestSubArraySum(arr, target) {
    let sum = 0;
    let maxLen = 0;
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < arr.length) {
        currentSum += arr[right];

        while (currentSum > target) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum == target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        sum = Math.max(sum, currentSum);
        right++;
    }

    return { sum, maxLen };
}

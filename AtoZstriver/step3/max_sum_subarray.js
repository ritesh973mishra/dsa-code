function subarray(arr) {
    let sum = 0;
    let currentSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      sum = Math.max(currentSum, sum);
    }
  
    return sum;
  }
  
  console.log(subarray([1, 4, 2, -8, 2, 4, 6]));
  


  function subarray(arr, target) {
    let sum = 0;
    let currentSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
  
      // If the current subarray sum exceeds the target, reset it to zero
      if (currentSum > target) {
        currentSum = 0;
      }
  
      sum = Math.max(currentSum, sum);
    }
  
    return sum;
  }
  
  console.log(subarray([1, 4, 2, -8, 2, 4, 6], 10)); // Example with a target of 10


//with lenght
  function subarrayWithMaxLength(arr, target) {
    let maxLength = 0;
    let currentLength = 0;
    let sum = 0;
    let currentSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
  
      // If the current subarray sum exceeds the target, reset it to zero
      if (currentSum > target) {
        currentSum = 0;
        currentLength = 0;
      } else {
        currentLength++;
        maxLength = Math.max(currentLength, maxLength);
      }
    }
  
    return maxLength;
  }
  
  console.log(subarrayWithMaxLength([1, 4, 2, -8, 2, 4, 6], 10)); // Example with a target of 10
  
  
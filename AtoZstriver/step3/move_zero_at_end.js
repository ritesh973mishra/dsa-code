function moveZerosToEnd(arr) {
    let left = 0; // Left pointer
    let right = 0; // Right pointer
  
    // Move non-zero elements to the left
    while (right < arr.length) {
      if (arr[right] !== 0) {
        // Swap arr[left] and arr[right]
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++; // Increment left pointer
      }
      right++; // Increment right pointer
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = [1, 2, 0, 3, 4, 0, 5];
  const result = moveZerosToEnd(inputArray);
  console.log(result); // Output: [2, 3, 4, 5, 0, 0, 0]
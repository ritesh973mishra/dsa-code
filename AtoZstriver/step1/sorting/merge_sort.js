function merge(arr, low, mid, high) {
    console.log("merge")

    const temp = []; // Temporary array
    let left = low; // Starting index of left half of arr
    let right = mid + 1; // Starting index of right half of arr
  
    // Storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }
  
    // If elements on the left half are still left
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
  
    // If elements on the right half are still left
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
  
    // Transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }
  
  function mergeSort(arr, low, high) {
    console.log("mergeSort")
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid); // Left half
    mergeSort(arr, mid + 1, high); // Right half
    merge(arr, low, mid, high); // Merging sorted halves
  }
  
  const arr = [555,1,0,9, 4, 7, 6, 3, 1, 5];
  const n = arr.length;
  
  console.log("Before Sorting Array:");
  console.log(arr);
  mergeSort(arr, 0, n - 1);
  console.log("After Sorting Array:");
  console.log(arr);
  
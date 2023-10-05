


function selectionSort(){
    for(let i=0; i< n-1; i++){
        let minIndex = i;
        for(let j=1; j< n; j++){
          if(arr[minIndex] > arr[j]){
            minIndex = j
          }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

}
/*

The "best" sorting algorithm depends on the specific context and requirements of your problem. There is no one-size-fits-all answer because different sorting algorithms have different strengths and weaknesses. Here are some of the most commonly used sorting algorithms and their characteristics:

1. **Quick Sort:**
   - Average and best-case time complexity: O(n log n)
   - Worst-case time complexity: O(n^2) (rare but possible)
   - In-place sorting algorithm (minimal additional memory usage)
   - Efficient for large datasets and often faster than other sorting algorithms in practice.
   - It uses a divide-and-conquer strategy.

2. **Merge Sort:**
   - Always has a time complexity of O(n log n), regardless of the input data.
   - Stable sorting algorithm (preserves the order of equal elements)
   - Requires additional memory for the merging step (not in-place)
   - Good choice for sorting linked lists.

3. **Heap Sort:**
   - Average, best, and worst-case time complexity: O(n log n)
   - In-place sorting algorithm
   - Requires no additional memory for the sorting process
   - Not as widely used as Quick Sort or Merge Sort but has its applications.

4. **Insertion Sort:**
   - Average and best-case time complexity: O(n)
   - Worst-case time complexity: O(n^2)
   - In-place sorting algorithm
   - Efficient for small datasets and nearly sorted data.

5. **Bubble Sort:**
   - Average, best, and worst-case time complexity: O(n^2)
   - Simple and easy to implement
   - Inefficient for large datasets and generally not used for practical purposes.

6. **Selection Sort:**
   - Average, best, and worst-case time complexity: O(n^2)
   - Simple and easy to implement
   - Inefficient for large datasets and generally not used for practical purposes.

7. **Tim Sort:**
   - A hybrid sorting algorithm that combines elements of Merge Sort and Insertion Sort.
   - Designed for real-world data and is the default sorting algorithm in Python.
   - Performs well on many kinds of real-world data.

8. **Radix Sort:**
   - Linear time complexity (O(nk)) where n is the number of elements and k is the number of digits in the input data.
   - Specialized for sorting integers or strings with fixed-length keys.
   - Not a comparison-based sorting algorithm.

The choice of the "best" sorting algorithm depends on factors like the size of the dataset, the distribution of data, memory constraints, stability requirements, and whether the data is partially sorted. It's important to analyze your specific use case to determine which sorting algorithm is most appropriate. In practice, many programming languages and libraries provide built-in sorting functions, so you often don't need to implement sorting algorithms from scratch.

*/
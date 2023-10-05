// checking sum zero
//[-5,-4,-3,-2,0,2,4,6,8] sorted array
//[?,?]==0
const { PerformanceObserver, performance } = require('perf_hooks');

// fins all combination of sum zero in an array
// function checkSumZero(arr) {
//   arr.forEach((element) => {

//     arr.forEach((elm) => {
//       if (element + elm === 0) {
//         console.log(element, elm);
//         return true;
//       } else {
//         return false;
//       }
//     });
//   });
// }


//find first sum of zero
// function checkSumZero(arr){
//     for(let numbers of arr){
//         console.log(numbers)
//         for(let i=0;i<arr.length;i++){
           

//             if(arr[i]+numbers === 0){
//                 console.log("called",[numbers,arr[i]]);
//                 return true
//             }
         
//         }
//     }
// }


//these all above logic will give complexity of o(n^2) that is quadratic


//improved logic============================================================


function checkSumZero(arr){
    let left =0;
    let right = arr.length-1;
    
    while(left<right){
        var sum= arr[left] + arr[right];
       
        if(sum == 0){
            console.log(arr[left] , arr[right])
            return true
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }

}
var t0 = performance.now()
checkSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")



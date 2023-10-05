let arr = [3, 9, 12, 16, 20 ];
let k = 3;
function minimize() {
  let ans = arr[arr.length - 1] - arr[0];
  arr.sort((a, b) => a - b);
  let smallest = arr[0] + k;
  let largest = arr[arr.length - 1] - k;
  let min;
  let max;



  for (let i = 0; i < arr.length-1; i++) {
    min = Math.min(smallest, (arr[i + 1] - k));
    max = Math.max(largest, (arr[i] + k));

    if (min < 0) continue;
    ans = Math.min(ans, max-min);
  }
  console.log(ans);
}

minimize();

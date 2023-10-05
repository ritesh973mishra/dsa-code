var isPalindrome = function (x) {
    let num = x.toString()
    // console.log(num.length)
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] !== num[num.length - 1 - i]) {
            

            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
};



// var isPalindrome = function(x) {
    
//     if(x< 0) return false;
//     let res = 0;
//     const original = x;
    
//     while(x > 0){ 
//         res = res * 10;
//         res = res + (x % 10); 
//         x = Math.floor(x/10);
//     }
    
//     return res === original ;
    
// };


let result = isPalindrome("madam")

console.log(result)


// function reverse(n){
//     let reverse = 0;
    
//     while (n!=0){
//         let digit  = n%10;
//          reverse = reverse *10 + digit;
//          n = Math.floor(n / 10);
//     }

//     return reverse
// }

function reverse(n){
    return n.toString().split('').reverse().join('')
}

console.log(reverse(1234))
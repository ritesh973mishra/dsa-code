function palindrome(n){
    let temp = n;
    let reverse = 0
    while(n!=0){
     let digit = n%10;
     reverse = reverse *10 + digit;
     n=Math.floor(n/10)
    }

    if(temp===reverse){
        return true
    }else{
        return false
    }

}

console.log(palindrome(1231))
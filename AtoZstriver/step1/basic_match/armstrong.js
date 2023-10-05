function armstrong(n){
    let temp = n;
    let number = n.toString();

    let sum =0 ;
    for(let i = 0 ; i < number.length; i++){
        
        sum = sum + Math.pow(parseInt(number[i]),3)
    }
    return sum == temp
}

console.log(armstrong(553))


function gcd(x,y){
    let ans = 1;

    for(let i = 1; i<=Math.min(x,y);i++){
        if(x%i == 0 && y%i == 0){
            ans = i
        }
    }

    return ans
}

console.log(gcd(18,24))

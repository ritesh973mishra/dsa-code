

function factorial(n){
    let factorial = 1

    for(let i = 1; i <=n; i++){
        factorial = factorial *i
    }

    console.log("factorial",factorial)

}

// factorial(3)


function factorial(n){
  if(n==1 || n == 0){
    return 1
  }else{
    return n * factorial(n-1)
  }

}

console.log(factorial(13))
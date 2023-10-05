// * 
// * * 
// * * *

function patternOne(n){
    for(let i =  0 ;  i< n; i++){
        let line = '';

        for(let j = 0 ; j <= i; j++){
            line += '*';
        }
        console.log(line);

    }
}




// patternOne(5)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

function pattern2(n){
    for(let i = 1; i < n ; i++){
        let line = ''
        for(let j = 1; j<=i ; j++){
            line += j
        }
        console.log(line)
    }
}

// pattern2(6)


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

function pattern3(n){
    for(let i = 1; i <n; i++){
        let line  = ''
        for(let j = 1; j <=i; j++){
            line += i
        }
        console.log(line)
    }
}

// pattern3(6)


// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// function pattern4(n){
//     for(let i = n; i > 0; i--){
//         let line = ''
//         for(j = i ; j>0; j--){
//             line += '*'
//         }
//         console.log(line)
//     }
// }

function pattern4(n){
    for(let i = 0; i < n; i++){
        let line = ''
        for(j = n ; j>i; j--){
            line += '*'
        }
        console.log(line)
    }
}


// pattern4(6)



// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

function pattern5(n){
    for(let i = 0; i<n; i++){
        let line =''
        for(j=1; j< (n-i);j++){
            line += j
        }
        console.log(line)
    }
}

// pattern5(8)


//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********
function pattern6(n){
    for(let i = 0 ; i < n; i ++){
       let line =''
        for(let j = 0; j < n - i - 1; j++){
            line +=' '
        }
        for(let j = 0 ; j < 2 * i + 1; j++){
            line += '*'
        }


        for(let j = 0; j < n -i - 1; j++){
            line +=' '
        }

        console.log(line)
    }
    
}

pattern6(6)


function pattern6(n) {
    for (let i = 0; i < n; i++) {
      let line = '';
  
      // Add spaces before the asterisks
      for (let j = 0; j < n - i - 1; j++) {
        line += ' ';
      }
  
      // Add asterisks
      for (let j = 0; j < 2 * i + 1; j++) {
        line += '*';
      }
  
      // Add spaces after the asterisks
      for (let j = 0; j < n - i - 1; j++) {
        line += ' ';
      }
  
      console.log(line);
    }
  }
  
  // Test with n = 5
//   pattern6(5);
  







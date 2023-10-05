// count unique number


//[1,2,2,3,4,4,5,5,6,6,7,8,9]

// function unique(number) {
//     if (number.length > 0) {
//         let i = 0;
//         for (let j = 1; j < number.length; j++) {
//             if (number[i] != number[j]) {
//                 i++;
//                 number[i] = number[j];
               
//             }
//         }
//         return i+1
//     } else {
//         throw new Error("Number is not availabale")
//     }
// }


function unique(number) {
    if (number.length > 0) {
        let obj ={};
        let counter = 0
        for (let j = 0; j < number.length; j++) {
            if(! obj[number[j]]){
                counter++ 
            }
            obj[number[j]] = (obj[number[j]] || 0) + 1;
            
        }
        return counter
    } else {
        throw new Error("Number is not availabale")
    }
}
const result = unique([1,2,2,3,4,4,5,5,6,6,7,8,8,9,9])
console.log(result)
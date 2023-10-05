// There is two approach to do so first is make 3rd array an apply two loop to push in the third array



// function mergeArray(){
// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = [2,34,56,2];
// let arr3 = []

// for(let i  = 0 ; i< arr1.length ;i++){
//     arr3[i] = arr1[i]
// }


// for(let i  = 0 ; i< arr2.length ;i++){
//     console.log(arr3.length)
//     // arr3.push(arr2[i])
//     arr3[arr3.length+i +1] = arr2[i]
// }

// console.log(arr3)




// }

// mergeArray()




function mergeArray(){

let arr1 = [1,12,45,78,98,450];
let arr2 = [2,34,66,100];

let arr4 =[...arr1,...arr2].sort((a,b)=>a-b)
console.log(arr4)


let arr3 = [] 
let d1=0;
let d2=0;
let d3=0;

while(d1<arr1.length && d2<arr2.length){

    if(arr1[d1] <arr2[d2]){
        arr3[d3] =  arr1[d1]
        d1++
    }else{
        arr3[d3] =  arr2[d2]
        d2++
    }
    d3++
    
    if(d1 < arr1.length){
        arr3[d3] = arr1[d1]
        d1++
        d3++
    }
}

console.log(arr3)

}
mergeArray()



// mergeArray()


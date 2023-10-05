function union(arr, arr2){
return [...new Set([...arr, ...arr2])]
}



console.log(union([1,2,3,4,5,6],[1,2,7,8]))
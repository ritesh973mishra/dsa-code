// Q #7) Find the count for the occurrence of a particular character in a string.

function chahracterCount(string){
    let obj = {}
    for(str of string){
        obj[str] = (obj[str] || obj[str] )+1
    }
    console.log(obj)
}
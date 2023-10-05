let queue = [];
let currentLength = 0
let max = 5;

function addInQue(val) {
    if (currentLength <= max) {
        queue[currentLength] = val;
        currentLength++
    } else {
        console.log("queue id already full")
    }

}

function display(){
    console.log(queue)
}


function removeFromQueue(){
    console.log("currentLength",currentLength)

    if(currentLength > 0){
        for(let i = 0; i< queue.length ;i++){
            queue[i] = queue[i+1];
          
        }
        queue.length = queue.length -1
    }else{
        console.log("quue is already empty")
    }
}

function getFront(){
    if(queue.length>0){
        console.log(queue[0])
    }
}


function getRear(){
    if(queue.length>0){
         
        console.log(queue[queue.length-1])

    }
}


addInQue(5)
addInQue(10)
addInQue(15)
addInQue(25)


display()



removeFromQueue()

display()
getFront()
getRear()
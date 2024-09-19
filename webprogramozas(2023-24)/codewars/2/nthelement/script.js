function every(arr, interval, start){
    let result = [];
    for (let i = start || 0; i < arr.length; i+= interval || 1) 
    {
        result.push(arr[i]);
    }
    return result;
  }

console.log(every([0,1,2,3,4]), [0,1,2,3,4])
console.log(every([0,1,2,3,4],1), [0,1,2,3,4])
console.log(every([0,1,2,3,4],2), [0,2,4])
console.log(every([0,1,2,3,4],3), [0,3])
console.log(every([0,1,2,3,4],3,1), [1,4])
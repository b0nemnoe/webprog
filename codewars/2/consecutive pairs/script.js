function pairs(arr){
    let pairs = 0;
    for (let i = 0; i < arr.length-1; i+=2) {
        console.log(arr[i], arr[i+1])
        if (arr[i]+1 == arr[i+1] || arr[i]-1 == arr[i+1]) {
            pairs++;
        } 
    }
    return pairs;
   };
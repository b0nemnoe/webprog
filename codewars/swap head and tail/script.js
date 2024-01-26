function swapHeadAndTail(arr){
    let len = arr.length/2;
    if((arr.length) % 2 == 0)
    {
        let ujTomb = arr.slice(len, arr.length)
        for (let index = 0; index < len; index++) {
            ujTomb.push(arr[index]);
        }
        console.log(ujTomb)
        return ujTomb;
        
    }
    else if (arr.length % 2 == 1) {
        len = Math.floor(len)
        let ujTomb = arr.slice(len+1, arr.length)
        ujTomb.push(arr[len]);
        for (let index = 0; index < len; index++) {
            ujTomb.push(arr[index]);
        }
        console.log(ujTomb)
        return ujTomb;
    }
    
}
console.log("paros hossz")
let tomb = [1,2,3,4,5,6];
swapHeadAndTail(tomb);
console.log("paratlan hossz")
let tomb1 = [1,2,3,4,5];
swapHeadAndTail(tomb1);
console.log("+- szamok")
let tomb2 = [-1,2];
swapHeadAndTail(tomb2);
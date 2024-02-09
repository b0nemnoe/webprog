// All or Nothing
function possiblyPerfect(key,answers) {
    // kód helye
    let eredmeny = null;
    for (let i = 0; i < key.length; i++) {
        if (key[i] !== '_') 
        {
            let egyezes = key[i] == answers[i];
                
            if (eredmeny === null) 
            {
                eredmeny = egyezes;
            }
            if (eredmeny !== egyezes) 
            {
                return false
            } 
        }   
    }
    return true;
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    // kód helye
    let median = numbers.sort((a,b) => a-b)[Math.floor(numbers.length/2)];
    if (numbers.length % 2 == 1 && numbers.length >= 3) 
        {
            let mean = numbers.reduce((a,b) => a+b)/numbers.length;
            return mean == median ? 'same' : mean > median ? 'mean' : 'median'
        }
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    // kód helye

        let mid = Math.floor(arr.length/2);
        let start = arr.splice(0,mid);
        let end = arr.splice(arr.length-mid,mid);
        arr.unshift(...end);
        arr.push(...start);
        return arr;
    }

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
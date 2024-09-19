function meanVsMedian(numbers) {
    median = numbers.sort((a,b) => a-b)[Math.floor(numbers.length/2)]
    if (numbers.length % 2 == 1 && numbers.length >= 3) 
    {
        let mean = numbers.reduce((a,b) => a+b)/numbers.length;
        return mean == median ? 'same' : mean > median ? 'mean' : 'median'
    }
}
function adjacentElementsProduct(array) {
    let max = Number.NEGATIVE_INFINITY
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i] * array[i+1] > max) {
            max = array[i] * array[i+1];
        }
    }
    return max
  }
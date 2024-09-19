L = (n , L0 , L1 , add) => {
    let array = [L0,L1];
    for (let i = 2; i < n; i++) {
        array.push(array[i-2] + array[i-1] + add)
    }
    return array;
  }
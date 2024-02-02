function insertDash(num) {
    let str = num.toString().split('');
     for (let i = 0; i < str.length; i++) {
        str[i]%2 > 0 && str[i +1]%2 > 0 ? str[i] = str[i] + '-' : ""
     }
     return str.join('');
  }
  
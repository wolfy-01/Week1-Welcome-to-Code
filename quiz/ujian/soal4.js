//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let x = 0;
    let o = 0;
    for (i = -1; i <= str.length; i++){
        if (str[i] === "x"){
            x += 1;
        }
        if (str[i] === "o"){
            o += 1;
        }
    }
    if (x === o){
        return true;
    } else {
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
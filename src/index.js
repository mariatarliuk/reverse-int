module.exports = function reverse (n) {
   let revNum;
   let nPos = Math.abs(n);
   revNum = nPos.toString().split('').reverse().join('')
   return +revNum
}
